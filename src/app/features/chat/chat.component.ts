import { Component, OnInit } from '@angular/core';
import { SocketService } from '../Service/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: string[] = [];
  newMessage: string = '';

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    console.log('ChatComponent initialized');
    this.socketService.onMessage().subscribe((message: string) => {
      console.log('New message received:', message);
      this.messages.push(message);
    });

    this.socketService.onAIResponse().subscribe((response: string) => {
      console.log('AI response received:', response);
      this.messages.push(`AI: ${response}`);
    });

    this.socketService.onError().subscribe((error: string) => {
      console.error('Socket error:', error);
    });
  }

  sendMessage(): void {
    console.log('Sending message:', this.newMessage);
    this.socketService.sendMessage(this.newMessage);
    this.messages.push(`You: ${this.newMessage}`);
    this.newMessage = '';
  }
}
