"""Server for interfacing with the frontend.
"""
import asyncio
import json
import os
from pathlib import Path
import logging

import aiofiles
#from flask import request
import pandas as pd
import socketio
from aiohttp import web
from aiohttp_index import IndexMiddleware

import bias
import bias_util

import aiohttp_cors

import josn_data
from josn_data import chat_history
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

ai_chat_history = josn_data.ChatHistory()
# # CORS 中间件
# @web.middleware
# async def cors_middleware(request, handler):
#     if request.method == 'OPTIONS':
#         response = web.Response()
#     else:
#         response = await handler(request)
    
#     response.headers.update({
#         'Access-Control-Allow-Origin': 'http://localhost:4200',  # 指定允许的源
#         'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
#         'Access-Control-Allow-Headers': 'Content-Type',
#         'Access-Control-Allow-Credentials': 'true'
#     })
#     return response


#SIO = socketio.AsyncServer(cors_allowed_origins='*')
#APP = web.Application(middlewares=[IndexMiddleware(), cors_middleware])
# 设置 Socket.IO
#SIO = socketio.AsyncServer(cors_allowed_origins='http://localhost:4200')  # 指定允许的源
SIO = socketio.AsyncServer(cors_allowed_origins='*',
   async_mode='aiohttp',
   logger=True,
   engineio_logger=True)
APP = web.Application()
SIO.attach(APP)



@SIO.event
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


# ai路由
#routes = web.RouteTableDef()
#@routes.post('/api/chat') 


#routes = web.RouteTableDef()
@SIO.event
async def send_chat_message(sid, data):
    try:
        logger.warning(f'Received message from {sid}: {data}')
        message = data.get('message', '')

        # 检查 sid 是否在映射中
        if sid not in CLIENT_SOCKET_ID_PARTICIPANT_MAPPING:
            response = {
                'content': '请先查看并交互图表数据后再开始对话',
                'code': 'NO_PARTICIPANT',
                'response': f'请先查看并交互图表数据后再开始对话'
            }
            await SIO.emit('receive_chat_response', response, room=sid)
            return
            
        # 获取参与者ID
        pid = CLIENT_SOCKET_ID_PARTICIPANT_MAPPING.get(sid)
        if not pid:
            response = {
                'content': '请先查看图表数据并交互后再试试',
                'code': 'INVALID_PARTICIPANT',
                'response': f'请先查看图表数据并交互后再试试'

            }
            await SIO.emit('receive_chat_response', response, room=sid)
            return

            
        json_data =josn_data.process_interaction_data(pid)
        # 获取用户的聊天历史记录
        print(f"pid: {pid}")    
        print(f"json_data: {len(json_data)}")
        chat_history =ai_chat_history.get_history(pid)
        #chat_id = None
        #last_response_id = None
        chat_id = None
        if chat_history and len(chat_history) > 0:
            chat_id = chat_history[-1].get('chatId')
        else:
            chat_id = josn_data.generate_chat_id()

            #last_response_id = None
            
        # 如果有生成场景描述
        scene_description = "  "
        if not chat_id:
            scene_description = f"""
            我是一名使用Lumos(https://github.com/lumos-vis/Lumos)进行数据分析的研究员。
            当前正在分析用户ID为{pid}的交互数据。
            """
          
        # 分析最近的交互数据
        # 分析最近的交互数据
        recent_interactions = ""
        if json_data:
            # 提取最近5条交互记录
            # recent_data = json_data[:5]
            
            # 格式化输出交互记录
            for interaction in json_data:
                time = interaction.get('time', '')
                action = interaction.get('interaction_type', '')
                x_name = interaction.get('x_name', '')
                x_value = interaction.get('x_value', '')
                y_name = interaction.get('y_name', '')
                y_value = interaction.get('y_value', '')
                
                recent_interactions += f"""
                时间: {time}
                操作: {action}
                X轴: {x_name} = {x_value}
                Y轴: {y_name} = {y_value}
                -------------------"""
        else:
            recent_interactions = "暂无交互记录"
        # 构建完整的上下文消息
        context_message = f"""
        {scene_description}
        
        最近的交互记录:
        {recent_interactions}
        
        用户问题:
        {message}
        """
        print(f"context_message: {context_message}")    
        # 调用AI接口获取响应
        ai_response = josn_data.get_ai_response(
            message=context_message,
            participant_id=pid,
            chat_id=chat_id,
            #last_response_id=last_response_id
        )

        if ai_response['code'] == 200:
            # {'code': 200, 'data': {'content': '请告诉我您的问题，我将尽力帮助您解答。', 'chatId': '8599165123'}, 'message': '获取成功'}
            chatId = ai_response['data']['chatId']
            content=ai_response['data']['content']
            #responseId = ai_response['data']['response_id']  # 返回响应ID供下次使用
            ai_chat_history.add_message(pid=pid, chat_id=chatId, content=content)
            # 构造响应数据
            #print(f"ai_response['data']['content']: {ai_response['data']['content']}")
            #ai_response_content = ai_response['data']['content']
            #ai_response_content = ai_response['data']['content'].replace('\n', '')
            response = {
                # 'content': ai_response['data']['content'],
                # 'response': f'{content}'
                'response': f'{content}'
                #'chatId': ai_response['data']['chatId'],
                #'responseId': ai_response['data']['response_id']  # 返回响应ID供下次使用
            }
            logger.info(f'Sending response to {sid}: {response}')
            await SIO.emit('receive_chat_response', response, room=sid)
        else:
            # 发生错误时返回错误信息
            error_response = {
                'error': ai_response['message']
            }
            logger.error(f'Error response for {sid}: {error_response}')
            await SIO.emit('chat_error', error_response, room=sid)
        
    except Exception as e:
        logger.error(f'Error processing message: {str(e)}')
        await SIO.emit('chat_error', {'error': str(e)}, room=sid)








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
        # async with aiofiles.open(filename, 'w', encoding='utf-8') as f:
        #     # ensure_ascii=False 确保中文正确显示
        #     # indent=2 使JSON格式化便于阅读
        #     #await f.write(json.dumps(interaction_data, ensure_ascii=False, indent=2))
        #     #f.write(json.dumps(interaction_data, ensure_ascii=False, indent=2))
        #     await f.write(json.dumps(interaction_data, ensure_ascii=False, indent=2))
        
        asyncio.create_task(save_interaction_data(interaction_data, filename))
        


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


# 定义保存数据的异步函数
async def save_interaction_data(data, filename):
    try:
        async with aiofiles.open(filename, 'w', encoding='utf-8') as f:
            await f.write(json.dumps(data, ensure_ascii=False, indent=2))
        logger.info(f"Background save completed: {filename}")
    except Exception as e:
        logger.error(f"Background save failed: {e}")        




if __name__ == "__main__":
    try:
        bias.precompute_distributions()
        port = int(os.environ.get("PORT", 3000))
        logger.warning(f"Starting server on port {port}")
        
        web.run_app(APP, port=port)
    except Exception as e:
        logger.error(f"Server startup error: {e}")
