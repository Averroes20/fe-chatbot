import { Component } from '@angular/core';
import { SocketService } from '../Service/socket.service';

@Component({
  selector: 'app-vertex-image',
  templateUrl: './vertex-image.component.html',
  styleUrls: ['./vertex-image.component.css']
})
export class VertexImageComponent {
  imageSrc: string = '';
  prompt: string = '';

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.onVertexImageResponse().subscribe({
      next: (imagePaths: string[]) => {
        console.log('Generated images:', imagePaths);
        // Update imageSrc to the first image path, assuming it exists
        if (imagePaths && imagePaths.length > 0) {
          this.imageSrc = `http://localhost:3000/${imagePaths[0]}`;
        } else {
          console.error('No image paths received');
          // Handle the case where no image paths are received
        }
      },
      error: (error: any) => {
        console.error('Error receiving Vertex Images:', error);
        // Handle error, if needed
      }
    });
  }

  generateVertexImages(): void {
    this.socketService.generateVertexImages(this.prompt);
  }
}
