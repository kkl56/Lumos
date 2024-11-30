import { Component, ViewChild, ElementRef, AfterViewChecked, OnInit, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
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
  
  @ViewChild('chatWindow') chatWindow: ElementRef;
  @ViewChild('dragHandle') dragHandle: ElementRef;
  @ViewChild('scrollContainer') private scrollContainer: ElementRef;

  position = {
    x: (window.innerWidth - 300) / 2,  // 300是窗口宽度
    y: (window.innerHeight - 700) / 2  // 400是窗口高度
  };  // 设置初始位置
  private isDragging = false;
  private dragOffset = { x: 0, y: 0 };
  private hasBeenDragged = false; // 新增：标记是否被拖动过


  private connectionSubscription: Subscription;
  
  isSending = false;
  isVisible = false;
  isMinimized = false;
  messages: ChatMessage[] = [];
  userInput = '';

  // position = { x: 100, y: 100 };  // 初始位置
  // private isDragging = false;
  // private dragOffset = { x: 0, y: 0 };

  // @ViewChild('chatWindow') chatWindow: ElementRef;
  // @ViewChild('dragHandle') dragHandle: ElementRef;

  constructor(
    private aiChatService: AiChatService,
    private ngZone: NgZone,  // 添加 NgZone
    private changeDetectorRef: ChangeDetectorRef  // 添加这个
  ) {
    // 添加全局鼠标事件监听
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('mousemove', this.onMouseMove.bind(this));
      window.addEventListener('mouseup', this.stopDragging.bind(this));
    });
  }

  toggleChat() {
    if (this.isMinimized) {
      this.isMinimized = false;
    } else {
      this.isVisible = !this.isVisible;
      if (!this.hasBeenDragged && this.isVisible) {
        // 重置到屏幕中间
        this.position = {
          x: (window.innerWidth - 300) / 2,
          y: (window.innerHeight - 700) / 2
        };
      }
    }
  }

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



  // toggleChat() {
  //   if (this.isMinimized) {
  //     this.isMinimized = false;
  //   } else {
  //     this.isVisible = !this.isVisible;
  //     if (!this.hasBeenDragged && this.isVisible) {
  //       // 重置位置到默认位置
  //       this.position = { x: 0, y: 0 };
  //     }
  //   }
  // }

  startDragging(event: MouseEvent) {
    if (event.target === this.dragHandle.nativeElement) {
      this.isDragging = true;
      const rect = this.chatWindow.nativeElement.getBoundingClientRect();
      
      if (!this.hasBeenDragged) {
        // 第一次拖动时，设置初始位置
        this.position = {
          x: rect.left,
          y: rect.top
        };
        this.hasBeenDragged = true;
      }
      
      this.dragOffset = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      event.preventDefault();
    }
  }

  private onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.ngZone.run(() => {
        this.position = {
          x: event.clientX - this.dragOffset.x,
          y: event.clientY - this.dragOffset.y
        };
      });
    }
  }

  private stopDragging() {
    this.isDragging = false;
  }


  ngOnDestroy() {
    // 清理订阅
    if (this.connectionSubscription) {
      this.connectionSubscription.unsubscribe();
    }
    // 断开连接
    this.aiChatService.disconnectFromSocket();
  }

  // startDragging(event: MouseEvent) {
  //   if (event.target === this.dragHandle.nativeElement) {
  //     this.isDragging = true;
  //     const rect = this.chatWindow.nativeElement.getBoundingClientRect();
  //     this.dragOffset = {
  //       x: event.clientX - rect.left,
  //       y: event.clientY - rect.top
  //     };
  //     event.preventDefault();
  //   }
  // }

  // private onMouseMove(event: MouseEvent) {
  //   if (this.isDragging) {
  //     this.ngZone.run(() => {
  //       this.position = {
  //         x: event.clientX - this.dragOffset.x,
  //         y: event.clientY - this.dragOffset.y
  //       };
  //     });
  //   }
  // }

  // private stopDragging() {
  //   this.isDragging = false;
  // }



  // ngAfterViewChecked() {
  //   this.scrollToBottom();
  // }

  // toggleChat() {
  //   if (this.isMinimized) {
  //     this.isMinimized = false;
  //   } else {
  //     this.isVisible = !this.isVisible;
  //   }
  // }

  minimizeChat() {
    this.isMinimized = true;
  }

  closeChat() {
    this.isVisible = false;
  }

  async sendMessage() {
    if (!this.userInput.trim()|| this.isSending) return;
  
    try {
      this.isSending = true;
      const userMessage = this.userInput;      
      // 添加用户消息
      this.messages.push({
        content: userMessage,
        isUser: true
      });
  

      this.userInput = '';
  
      // 调用服务发送消息
      const response = await this.aiChatService.sendMessage(userMessage);
      
      // 添加AI响应
      this.ngZone.run(() => {
        this.messages.push({
          content: response,
          isUser: false
        });
        this.changeDetectorRef.detectChanges(); // 强制检测变更
      });
      
    } catch (error) {
      console.error('发送消息失败:', error);
      
      // 添加错误消息
      this.ngZone.run(() => {
        this.messages.push({
          content: typeof error === 'string' ? error : error.message || '发送消息失败',
          isUser: false,
          isError: true,
        });
        this.changeDetectorRef.detectChanges(); // 强制检测变更
      });
      
    } finally {
      this.isSending = false;
      this.ngZone.run(() => {});
    }
  }

  private scrollToBottom() {
    try {
      this.scrollContainer.nativeElement.scrollTop = 
        this.scrollContainer.nativeElement.scrollHeight;
    } catch(err) {}
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
}