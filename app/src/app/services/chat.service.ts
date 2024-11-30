import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private isConnected = false;
  private responseSubscription: any;
  private errorSubscription: any;

  constructor(private socket: Socket) {
    this.initSocket();
  }

  private initSocket() {
    this.socket.on('connect', () => {
      console.log('Connected to server');
      this.isConnected = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
      this.isConnected = false;
    });

    this.socket.on('connect_error', (error: any) => {
      console.error('Connection error:', error);
      this.isConnected = false;
    });
  }

  connectToSocket() {
    if (!this.isConnected) {
      console.log('Attempting to connect...');
      this.socket.connect();
    }
  }

  disconnectFromSocket() {
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.disconnect();
    }
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.isConnected) {
      throw new Error('未连接到服务器');
    }

    return new Promise((resolve, reject) => {
      console.log('Sending message:', message);
      
      // 发送消息
      this.socket.emit('send_chat_message', { message });
      console.log('Message sent, waiting for response...');

      // 清理之前的订阅
      this.cleanupSubscriptions();

      // 设置响应监听器
      this.responseSubscription = this.socket
        .fromEvent<any>('receive_chat_response')
        .subscribe({
          next: (response) => {
            console.log('Received response:', response);
            this.cleanupSubscriptions();
            clearTimeout(timeoutId);
            resolve(response.response);
          },
          error: (error) => {
            console.error('Response error:', error);
            this.cleanupSubscriptions();
            clearTimeout(timeoutId);
            reject(error);
          }
        });

      // 设置错误监听器
      this.errorSubscription = this.socket
        .fromEvent<any>('chat_error')
        .subscribe({
          next: (error) => {
            console.error('Received error:', error);
            this.cleanupSubscriptions();
            clearTimeout(timeoutId);
            reject(error);
          },
          error: (error) => {
            console.error('Error subscription error:', error);
            this.cleanupSubscriptions();
            clearTimeout(timeoutId);
            reject(error);
          }
        });

      // 设置超时（减少超时时间以便测试）
      const timeoutId = setTimeout(() => {
        console.error('Request timed out');
        this.cleanupSubscriptions();
        reject(new Error('请求超时'));
      }, 10000); // 改为 10 秒以便测试
    });
  }

  private cleanupSubscriptions() {
    if (this.responseSubscription) {
      this.responseSubscription.unsubscribe();
      this.responseSubscription = null;
    }
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
      this.errorSubscription = null;
    }
  }

  // 获取连接状态的观察者
  getConnectionStatus(): Observable<boolean> {
    return new Observable(observer => {
      const connectHandler = () => observer.next(true);
      const disconnectHandler = () => observer.next(false);

      this.socket.on('connect', connectHandler);
      this.socket.on('disconnect', disconnectHandler);

      return () => {
        this.socket.removeListener('connect', connectHandler);
        this.socket.removeListener('disconnect', disconnectHandler);
      };
    });
  }
}