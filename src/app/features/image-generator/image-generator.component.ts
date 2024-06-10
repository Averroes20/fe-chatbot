import { Component } from '@angular/core';
import { SocketService } from '../Service/socket.service';

@Component({
  selector: 'app-image-generator',
  templateUrl: './image-generator.component.html',
  styleUrls: ['./image-generator.component.css']
})
export class ImageGeneratorComponent {
  imageSrc: string = '';
  prompt: string = '';

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.onImageResponse().subscribe((imageData: any) => {
      console.log('Image response received: ', imageData);
      if (imageData && Array.isArray(imageData.data) && imageData.data.length > 0) {
        this.imageSrc = imageData.data[0].asset_url;
      } else {
        console.error('No image data found in response');
      }
    });

    // Subscribe to socket errors
    this.socketService.onError().subscribe((error: string) => {
      console.error('Socket error: ', error);
      // Handle error, if needed
    });
  }

  generateImage(): void {
    // Send a request to the server to generate the image
    this.socketService.generateImage(this.prompt);
  }
}
