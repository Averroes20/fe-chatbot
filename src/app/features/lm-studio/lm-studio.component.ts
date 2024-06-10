// lm-studio.component.ts
import { Component } from '@angular/core';
import { SocketService } from '../Service/socket.service';

@Component({
  selector: 'app-lm-studio',
  templateUrl: './lm-studio.component.html',
  styleUrls: ['./lm-studio.component.css']
})
export class LmStudioComponent {
  responses: string[] = [];
  newPrompt: string = '';

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.onStudioResponse().subscribe((response: any) => {
      console.log('Studio response received: ', response);
      this.responses.push(response.content);
    });

    this.socketService.onStudioError().subscribe((error: string) => {
      console.log('Socket error: ', error);
    });
  }

  sendStudioPrompt(): void {
    console.log('Sending studio prompt: ', this.newPrompt);
    this.socketService.sendStudioPrompt(this.newPrompt);
    this.responses.push(`You: ${this.newPrompt}`);
    this.newPrompt = '';
  }
}
