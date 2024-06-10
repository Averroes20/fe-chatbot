import { Component, OnInit } from '@angular/core';
import { SocketService } from '../Service/socket.service';

@Component({
  selector: 'app-vertex',
  templateUrl: './vertex-multimodal.component.html',
  styleUrls: ['./vertex-multimodal.component.scss']
})
export class VertexMultimodalComponent implements OnInit {
  responses: string[] = [];
  newPrompt: string = '';
  newImage: string = '';

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.onVertexResponse().subscribe((response: any) => {
      console.log('Vertex response received:', response);
      const text = response.parts[0].text;
      this.responses.push(`Vertex: ${text}`);
    });

    this.socketService.onVertexError().subscribe((error: string) => {
      console.error('Socket error:', error);
    });
  }

  sendVertexPrompt(): void {
    console.log('Sending vertex prompt:', this.newPrompt);
    this.socketService.sendVertexPrompt(this.newPrompt, this.newImage);
    this.responses.push(`You: ${this.newPrompt}`);
    this.newPrompt = '';
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newImage = e.target.result.split(',')[1];
      };
      reader.readAsDataURL(file);
    }
  }
}
