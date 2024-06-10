import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatComponent } from './features/chat/chat.component';
import { LmStudioComponent } from './features/lm-studio/lm-studio.component';
import { VertexMultimodalComponent } from './features/vertex-multimodal/vertex-multimodal.component';
import { VertexImageComponent } from './features/vertex-image/vertex-image.component';
import { ImageGeneratorComponent } from './features/image-generator/image-generator.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    VertexMultimodalComponent,
    LmStudioComponent,
    ImageGeneratorComponent,
    VertexImageComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
