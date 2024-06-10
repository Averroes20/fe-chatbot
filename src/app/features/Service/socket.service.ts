import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000'); // Sesuaikan dengan URL backend Anda

    this.socket.on('connect', () => {
      console.log('Successfully connected to the server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from the server');
    });
  }

  onMessage(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('message', (message: string) => {
        observer.next(message);
      });
    });
  }

  onAIResponse(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('ai_response', (response: string) => {
        observer.next(response);
      });
    });
  }

  sendMessage(message: string): void {
    this.socket.emit('message', message);
  }

  onError(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('error', (error: string) => {
        observer.next(error);
      });
    });
  }

  onVertexResponse(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('vertex_response', (response: string) => {
        observer.next(response);
      });
    });
  }

  onVertexError(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('vertex_error', (error: string) => {
        observer.next(error);
      });
    });
  }

  sendVertexPrompt(prompt: string, image?: string): void {
    this.socket.emit('prompt', { textPrompt: prompt, image });
  }

  onStudioResponse(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('response', (response: string) => {
        observer.next(response);
      });
    });
  }

  onStudioError(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('error', (error: string) => {
        observer.next(error);
      });
    });
  }

  sendStudioPrompt(prompt: string): void {
    const message = { messages: [{ role: 'user', content: prompt }] };
    this.socket.emit('prompt', message);
    console.log(message);
  }

  onImageResponse(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('image-response', (imageData: any) => {
        observer.next(imageData);
      });
    });
  }

  onImageError(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('error', (error: string) => {
        observer.next(error);
      });
    });
  }

  generateImage(prompt: string): void {
    this.socket.emit('generate-image', { prompt });
  }

  onVertexImageResponse(): Observable<string[]> {
    return new Observable(observer => {
      this.socket.on('images', (imageData: string[]) => {
        observer.next(imageData);
      });
    });
  }

  onVertexImageError(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('error', (error: string) => {
        observer.next(error);
      });
    });
  }

  generateVertexImages(prompt: string): void {
    this.socket.emit('prompt', { textPrompt: prompt });
  }
}
