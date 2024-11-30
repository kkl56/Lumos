import json
import os
from datetime import datetime
from typing import List, Dict
#import uuid
import requests
import random

# 全局变量声明
chat_history = {}

def generate_chat_id() -> str:
    """生成10位数字的chatId"""
    return str(random.randint(1000000000, 9999999999))

def process_interaction_data(participant_id: str, limit: int = 50) -> List[Dict]:
    """
    处理交互数据文件，返回格式化的最近交互记录
    """
    
    interaction_type_map = {
        "mouseout_item": "移出数据点",
        "mouseover_item": "悬停数据点",
        "click_item": "点击数据点",
        "axis_attribute_changed": "更改坐标轴",
        "toggle_attribute_accordion_awareness_panel": "切换属性面板"
    }
    
    directory_path = os.path.join("output", "interactions", participant_id)
    
    if not os.path.exists(directory_path):
        print(f"Directory not found: {directory_path}")
        return []
    
    print(f"Current working directory: {os.getcwd()}")
    print(f"Looking for files in: {directory_path}")
    
    interaction_files = []
    try:
        for filename in os.listdir(directory_path):
            if filename.endswith('.json'):
                file_path = os.path.join(directory_path, filename)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        data['file_path'] = file_path
                        interaction_files.append(data)
                except Exception as e:
                    print(f"Error reading file {filename}: {e}")
    except Exception as e:
        print(f"Error accessing directory: {e}")
        return []

    formatted_records = []
    for record in interaction_files[:limit]:
        try:
            # 基本信息
            formatted_record = {
                'time': datetime.fromtimestamp(record['timestamp'] / 1000).strftime('%Y-%m-%d %H:%M:%S'),
                'interaction_type': interaction_type_map.get(record['interaction_type'], record['interaction_type'])
            }
            
            # 提取坐标数据和额外字段
            element_data = record.get('element_data', {})
            if element_data:
                # 检查并添加 id
                if 'id' in element_data:
                    formatted_record['id'] = element_data['id']
                
                # 检查并添加 attribute
                if 'attribute' in element_data:
                    formatted_record['attribute'] = element_data['attribute']
                
                # 检查并添加 isBookmarked
                if 'isBookmarked' in element_data:
                    formatted_record['isBookmarked'] = element_data['isBookmarked']
                
                # x轴数据
                if 'x' in element_data:
                    formatted_record['x_name'] = element_data.get('x')
                    formatted_record['x_value'] = element_data.get('eventX')
                
                # y轴数据
                if 'y' in element_data:
                    formatted_record['y_name'] = element_data.get('y')
                    formatted_record['y_value'] = element_data.get('eventY')
            
            formatted_records.append(formatted_record)
            
        except Exception as e:
            print(f"Error processing record: {e}")
            continue
    
    return formatted_records

# 示例输出格式更新为：
"""
{
    'code': 200,
    'data': [
        {
            'time': '2024-01-01 12:30:45',
            'interaction_type': '移出数据点',
            'id': 'some_id',                  # 如果存在
            'attribute': 'some_attribute',    # 如果存在
            'isBookmarked': true,            # 如果存在
            'x_name': 'Annual Income',
            'x_value': 50000,
            'y_name': 'Credit Score',
            'y_value': 750
        },
        // ... 更多记录
    ],
    'message': '获取成功'
}
"""

# 使用示例 Lumos\server\output\interactions\zpjG9GDY8yIq
def get_recent_interactions(participant_id: str = "zKkCGueo8PAQ") -> Dict:
    """
    获取最近的交互记录
    
    Returns:
        List[Dict]: 格式化后的交互记录列表
    """
    try:
        records = process_interaction_data(participant_id)
        if not records:
            return {
                'code': 404,
                'data': [],
                'message': '未找到交互记录'
            }
        return {
            'code': 200,
            'data': records,
            'message': '获取成功'
        }
    except Exception as e:
        return {
            'code': 500,
            'data': None,
            'message': f'获取失败: {str(e)}'
        }

# 示例输出格式
"""
{
    'code': 200,
    'data': [
        {
            'time': '2024-01-01 12:30:45',
            'interaction_type': '移出数据点',
            'x_name': 'Annual Income',
            'x_value': 50000,
            'y_name': 'Credit Score',
            'y_value': 750
        },
        // ... 更多记录
    ],
    'message': '获取成功'
}
"""

# 在文件末尾添加新的AI对话相关代码
class ChatHistory:
    def __init__(self):
        self.histories = {}
        
    def add_message(self, pid: str, chat_id: str, content: str):
        if pid not in self.histories:   
            self.histories[pid] = []
        self.histories[pid].append({"chatId": chat_id, "content": content})
    
    def get_history(self, pid: str) -> List[Dict]:
        return self.histories.get(pid, [])

# 创建全局聊天历史实例
chat_history = ChatHistory()
"""
def get_ai_response(message: str, participant_id: str, chat_id: str = None) -> Dict:
    
    # 获取AI响应
    
    # Args:
    #     message: 用户消息
    #     participant_id: 用户ID
    #     chat_id: 会话ID（如果为None则创建新会话）
   
    try:
        # 如果没有chat_id，创建新的
        if not chat_id:
            chat_id = str(uuid.uuid4())
        
        response_chat_item_id = str(uuid.uuid4())
        history = chat_history.get_history(chat_id)
        
        # 修改请求数据格式
        data = {
            "messages": [{"role": "user", "content": message}],  # 添加messages数组
            "model": "gpt-4-turbo-2024-04-09",
            "detail": False,
            "chatId": chat_id,
            "responseChatItemId": response_chat_item_id,
            "uid": participant_id,
            "name": "研究员"
        }
        
        # 如果有历史记录，添加到messages中
        if history:
            data["messages"] = history + data["messages"]
        
        response = requests.post(
            'https://aigc.quickwashmaster.website/chat',
            headers={
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your_token_here'
            },
            json=data
        )
        
        if response.status_code == 200:
            result = response.json()
            chat_history.add_message(chat_id, "user", message)
            chat_history.add_message(chat_id, "assistant", result['data']['content'])
            
            return {
                'code': 200,
                'data': {
                    'content': result['data']['content'],
                    'chatId': chat_id,
                    'responseChatItemId': response_chat_item_id
                },
                'message': '获取成功'
            }
        else:
            return {
                'code': response.status_code,
                'data': None,
                'message': f'API请求失败: {response.text}'
            }
            
    except Exception as e:
        return {
            'code': 500,
            'data': None,
            'message': f'获取失败: {str(e)}'
        }
"""


def get_ai_response(message: str, participant_id: str, chat_id: str = None, last_response_id: str = None) -> Dict:
    try:
        ask_ai_dict = {
            "chatId": chat_id if chat_id else generate_chat_id(),
            "stream": False,
            "detail": False,
            #"responseChatItemId": last_response_id,
            "model": "gpt-4-turbo-2024-04-09",
            "variables": {
                "uid": participant_id,
                "name": "研究员"
            },
            "messages": [{
                "role": "assistant",
                "content": message
            }]
        }
        
        print(f"Sending request with data: {ask_ai_dict}")  # 调试日志
        
        response = requests.post(
            'https://aigc.quickwashmaster.website/chat',
            headers={
                'Content-Type': 'application/json',
                'Authorization': 'Bearer fastgpt-deMMyQ7MnU70whHEsKU1MenN2TgdfFn949wE8PNmESw8S0H4AjvfSNp'
            },
            json=ask_ai_dict,
            timeout=60  # 添加超时设置
        )
        
        response.raise_for_status()  # 检查HTTP错误
        result = response.json()
        
        print(f"Received response: {result}")  # 调试日志
        
        # 提取id和content
        response_id = result.get('id', '')
        content = result.get('choices', [{}])[0].get('message', {}).get('content', '')
 

        return {
            'code': 200,
            'data': {
                'content': content,
                'chatId': response_id
                # 'response_id': result.get('data', {}).get('id', '')
            },
            'message': '获取成功'
        }
            
    except requests.exceptions.RequestException as e:
        print(f"Request error: {e}")  # 调试日志
        return {
            'code': 500,
            'data': None,
            'message': f'网络请求失败: {str(e)}'
        }
    except Exception as e:
        print(f"General error: {e}")  # 调试日志
        return {
            'code': 500,
            'data': None,
            'message': f'处理失败: {str(e)}'
        }

# 使用示例
if __name__ == "__main__":
    # 第一次对话
    first_response = get_ai_response("你好,我是研究员", "test_user")
    print("First response:", first_response)
    
    if first_response['code'] == 200:
        # 使用上一次响应的ID继续对话
        chat_id = first_response['data']['chatId']
        #response_id = first_response['data']['response_id']
        second_response = get_ai_response(
            "第二个问题", 
            "test_user",
            chat_id=chat_id,
            #last_response_id=response_id
        )
        print("\nSecond response:", second_response)

"""
if __name__ == "__main__":
    # 原有的测试代码
    result = get_recent_interactions()
    print("Interaction Result:", result)
    
    interactions_dir = os.path.join("output", "interactions")
    if os.path.exists(interactions_dir):
        print("\nAvailable participant IDs:")
        for participant_id in os.listdir(interactions_dir):
            print(f"- {participant_id}")
    
    # AI对话测试代码
    print("\nTesting AI Chat:")
    participant_id = "zpjG9GDY8yIq"
    response1 = get_ai_response("你好", participant_id)
    print("First response:", response1)
    
    if response1['code'] == 200:
        chat_id = response1['data']['chatId']
        response2 = get_ai_response("我是研究员", participant_id, chat_id)
        print("\nSecond response:", response2)



# if __name__ == "__main__":
#     # 测试不同的参数
#     result = get_recent_interactions()
#     print("Result:", result)
    
#     # 打印所有可用的参与者ID
#     interactions_dir = os.path.join("output", "interactions")
#     if os.path.exists(interactions_dir):
#         print("\nAvailable participant IDs:")
#         for participant_id in os.listdir(interactions_dir):
#             print(f"- {participant_id}")
"""