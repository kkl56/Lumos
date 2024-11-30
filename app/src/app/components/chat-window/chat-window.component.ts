import { Component, ViewChild, ElementRef, AfterViewChecked, OnInit, OnDestroy } from '@angular/core';
import { AiChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

interface ChatMessage {
  content: string;
  isUser: boolean;
  isError?: boolean;
}

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements AfterViewChecked, OnInit, OnDestroy {
  @ViewChild('scrollContainer') private scrollContainer: ElementRef;
  private connectionSubscription: Subscription;
  
  isSending = false;
  isVisible = false;
  isMinimized = false;
  messages: ChatMessage[] = [];
  userInput = '';

  constructor(private aiChatService: AiChatService) {}

  ngOnInit() {
    // 连接到服务器
    this.aiChatService.connectToSocket();
    
    // 监听连接状态
    this.connectionSubscription = this.aiChatService.getConnectionStatus()
      .subscribe(isConnected => {
        console.log('聊天服务器连接状态:', isConnected);
        if (!isConnected) {
          this.messages.push({
            content: '与服务器的连接已断开，请稍后重试。',
            isUser: false,
            isError: true
          });
        }
      });
  }

  ngOnDestroy() {
    // 清理订阅
    if (this.connectionSubscription) {
      this.connectionSubscription.unsubscribe();
    }
    // 断开连接
    this.aiChatService.disconnectFromSocket();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat() {
    if (this.isMinimized) {
      this.isMinimized = false;
    } else {
      this.isVisible = !this.isVisible;
    }
  }

  minimizeChat() {
    this.isMinimized = true;
  }

  closeChat() {
    this.isVisible = false;
  }

  async sendMessage() {
    if (!this.userInput.trim()) return;
  
    try {
      this.isSending = true;
      
      // 添加用户消息
      this.messages.push({
        content: this.userInput,
        isUser: true
      });
  
      const userMessage = this.userInput;
      this.userInput = '';
  
      // 调用服务发送消息
      const response = await this.aiChatService.sendMessage(userMessage);
      
      // 添加AI响应
      this.messages.push({
        content: response,
        isUser: false
      });
      
    } catch (error) {
      console.error('发送消息失败:', error);
      
      // 显示错误消息
      this.messages.push({
        content: error.message || '抱歉，发生了错误，请稍后重试。',
        isUser: false,
        isError: true
      });
      
    } finally {
      this.isSending = false;
    }
  }

  private scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = 
        this.scrollContainer.nativeElement.scrollHeight;
    } catch(err) {}
  }
}