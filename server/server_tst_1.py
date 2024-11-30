"""Server for interfacing with the frontend.
"""
import json
import os
from pathlib import Path
import logging

import aiofiles
import pandas as pd
import socketio
from aiohttp import web
from aiohttp_index import IndexMiddleware

import bias
import bias_util

# 设置日志
logging.basicConfig(level=logging.WARNING)
logger = logging.getLogger(__name__)

# 创建输出目录
OUTPUT_DIR = Path("output")
OUTPUT_DIR.mkdir(exist_ok=True)

# Set the path for the Google Cloud Logging logger
currdir = Path(__file__).parent.absolute()

CLIENTS = {}  # entire data map of all client data
CLIENT_PARTICIPANT_ID_SOCKET_ID_MAPPING = {}
CLIENT_SOCKET_ID_PARTICIPANT_MAPPING = {}
COMPUTE_BIAS_FOR_TYPES = [
    "mouseout_item",
    "mouseout_group",
    "click_group",
    "click_add_item",
    "click_remove_item",
]

SIO = socketio.AsyncServer(cors_allowed_origins='*')
APP = web.Application(middlewares=[IndexMiddleware()])
SIO.attach(APP)

async def handle_ui_files(request):
    # Extract the requested file name
    fname = request.match_info.get('fname', 'index.html')

    # Serve index.html for all routes that don't have a file extension
    if '.' not in fname:
        fname = 'index.html'

    # Define the public directory (similar to Flask's 'public' directory)
    public_dir = os.path.join(os.path.dirname(__file__), 'public')

    # Serve the file from the public directory
    file_path = os.path.join(public_dir, fname)

    try:
        return web.FileResponse(file_path)
    except FileNotFoundError:
        raise web.HTTPNotFound()

# Static file serving
APP.router.add_static('/static/', path=str(os.path.join(os.path.dirname(__file__), 'public')), name='static')

# Dynamic routing for all paths, similar to Flask's catch-all routes
APP.router.add_route('GET', '/{fname:.*}', handle_ui_files)

@SIO.event
async def connect(sid, environ):
    logger.warning(f"Connected: {sid}")
    attr_dist = {}
    for filename in bias.DATA_MAP:
        dataset = bias.DATA_MAP[filename]
        attr_dist[filename] = dataset["distribution"]
    await SIO.emit("attribute_distribution", attr_dist, room=sid)


@SIO.event
def disconnect(sid):
    if sid in CLIENT_SOCKET_ID_PARTICIPANT_MAPPING:
        pid = CLIENT_SOCKET_ID_PARTICIPANT_MAPPING[sid]
        if pid in CLIENTS:
            CLIENTS[pid]["disconnected_at"] = bias_util.get_current_time()
            logger.warning(f"Disconnected: Participant ID: {pid} | Socket ID: {sid}")


@SIO.event
async def on_session_end_page_level_logs(sid, payload):
    try:
        pid = payload["participantId"]
        if pid in CLIENTS and "data" in payload:
            # 创建用户特定的目录
            dirname = OUTPUT_DIR / CLIENTS[pid]['app_type'] / pid
            dirname.mkdir(parents=True, exist_ok=True)
            
            filename = dirname / f"session_end_page_logs_{pid}_{bias_util.get_current_time()}.tsv"
            df_to_save = pd.DataFrame(payload["data"])

            # persist to disk
            df_to_save.transpose().to_csv(filename, sep="\t")
            logger.warning(f"Saved session logs to file: {filename}")
            
            # 发送确认消息给客户端
            await SIO.emit("logs_saved", {"status": "success", "filename": str(filename)}, room=sid)
    except Exception as e:
        #logger.error(f"Error saving session logs: {e}")
        logger.error(f"Error saving session logs")
        await SIO.emit("logs_saved", {"status": "error", "message": str(e)}, room=sid)


@SIO.event
async def on_save_logs(sid, data):
    try:
        if sid in CLIENT_SOCKET_ID_PARTICIPANT_MAPPING:
            pid = CLIENT_SOCKET_ID_PARTICIPANT_MAPPING[sid]
            if pid in CLIENTS:
                dirname = OUTPUT_DIR / CLIENTS[pid]['app_type'] / pid
                dirname.mkdir(parents=True, exist_ok=True)
                
                filename = dirname / f"logs_{pid}_{bias_util.get_current_time()}.tsv"
                df_to_save = pd.DataFrame(CLIENTS[pid]["response_list"])

                # persist to disk
                df_to_save.to_csv(filename, sep="\t")
                logger.warning(f"Saved logs to file: {filename}")
                
                # 发送确认消息给客户端
                await SIO.emit("logs_saved", {"status": "success", "filename": str(filename)}, room=sid)
    except Exception as e:
        #logger.error(f"Error saving logs: {e}")
        logger.error(f"Error  saving logs")
        await SIO.emit("logs_saved", {"status": "error", "message": str(e)}, room=sid)


@SIO.event
async def on_interaction(sid, data):
    try:
        app_mode = data["appMode"]  # The dataset that is being used, e.g. cars.csv
        app_type = data["appType"]  # CONTROL / AWARENESS / ADMIN
        app_level = data["appLevel"]  # live / practice
        pid = data["participantId"]
        interaction_type = data["interactionType"] # Interaction type - eg. hover, click

        #debug
        # print(data)
        # Let these get updated everytime an interaction occurs, to handle the
        #   worst case scenario of random restart of the server.
        CLIENT_SOCKET_ID_PARTICIPANT_MAPPING[sid] = pid
        CLIENT_PARTICIPANT_ID_SOCKET_ID_MAPPING[pid] = sid

        if pid not in CLIENTS:
            # new participant => establish data mapping for them!
            CLIENTS[pid] = {}
            CLIENTS[pid]["id"] = sid
            CLIENTS[pid]["participant_id"] = pid
            CLIENTS[pid]["app_mode"] = app_mode
            CLIENTS[pid]["app_type"] = app_type
            CLIENTS[pid]["app_level"] = app_level
            CLIENTS[pid]["connected_at"] = bias_util.get_current_time()
            CLIENTS[pid]["bias_logs"] = []
            CLIENTS[pid]["response_list"] = []
            logger.warning(f"New participant connected: {pid}")

        if app_mode != CLIENTS[pid]["app_mode"] or app_level != CLIENTS[pid]["app_level"]:
            # datasets have been switched => reset the logs array!
            # OR
            # app_level (e.g. practice > live) is changed but same dataset is in use => reset the logs array!
            CLIENTS[pid]["app_mode"] = app_mode
            CLIENTS[pid]["app_level"] = app_level
            CLIENTS[pid]["bias_logs"] = []
            CLIENTS[pid]["response_list"] = []
            logger.warning(f"Reset logs for participant {pid} due to mode/level change")


        # 打印数据
        print("participant_id:")
        print(pid)
        print("interaction_type:")
        print(interaction_type)
        # 保存json
        interaction_data = {
            "timestamp": bias_util.get_current_time(),  # 记录时间戳
            "interaction_type": interaction_type,       # 交互类型（点击/悬停）
            "element_data": data.get("data", {}),      # 元素数据（ID、标签等）
            "app_info": {                              # 应用信息
                "mode": app_mode,
                "type": app_type,
                "level": app_level
            }
        }
        print("interaction_data:")
        print(interaction_data)

        # 3. 创建保存目录结构
        # 格式: output/interactions/用户ID/
        interaction_dir = Path("output/interactions") / str(pid)
        interaction_dir.mkdir(parents=True, exist_ok=True)  # 创建多级目录

        # 4. 生成文件名（使用时间戳确保唯一性）
        # 格式: interaction_时间戳.json
        filename = interaction_dir / f"interaction_{interaction_data['timestamp']}.json"
        """
        async with aiofiles.open(filename, 'w', encoding='utf-8') as f:
            await f.write(json.dumps(interaction_data, ensure_ascii=False, indent=2))
        """
        # 5. 将数据写入JSON文件
        async with aiofiles.open(filename, 'w', encoding='utf-8') as f:
            # ensure_ascii=False 确保中文正确显示
            # indent=2 使JSON格式化便于阅读
            await f.write(json.dumps(interaction_data, ensure_ascii=False, indent=2))

        print(f"Saved interaction data to: {filename}")




        # record response to interaction
        response = {}
        response["sid"] = sid
        response["participant_id"] = pid
        response["app_mode"] = app_mode
        response["app_type"] = app_type
        response["app_level"] = app_level
        response["processed_at"] = bias_util.get_current_time()
        response["interaction_type"] = interaction_type
        response["input_data"] = data

        # check whether to compute bias metrics or not
        if interaction_type in COMPUTE_BIAS_FOR_TYPES:
            CLIENTS[pid]["bias_logs"].append(data)
            metrics = bias.compute_metrics(app_mode, CLIENTS[pid]["bias_logs"])
            response["output_data"] = metrics
            logger.warning(f"Computed bias metrics for participant {pid}")
        else:
            response["output_data"] = None

        # save response
        CLIENTS[pid]["response_list"].append(response)

        await SIO.emit("log", response)  # send this to all
        await SIO.emit("interaction_response", response, room=sid)
        
    except Exception as e:
        logger.error(f"Error processing interaction: {e}")
        await SIO.emit("interaction_error", {"status": "error", "message": str(e)}, room=sid)


if __name__ == "__main__":
    try:
        bias.precompute_distributions()
        port = int(os.environ.get("PORT", 3000))
        logger.warning(f"Starting server on port {port}")
        web.run_app(APP, port=port)
    except Exception as e:
        logger.error(f"Server startup error: {e}")
