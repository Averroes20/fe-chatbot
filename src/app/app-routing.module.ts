import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './features/chat/chat.component';
import { ImageGeneratorComponent } from './features/image-generator/image-generator.component';
import { LmStudioComponent } from './features/lm-studio/lm-studio.component';
import { VertexImageComponent } from './features/vertex-image/vertex-image.component';
import { VertexMultimodalComponent } from './features/vertex-multimodal/vertex-multimodal.component';

const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent },
  { path: 'vertex-multimodal', component: VertexMultimodalComponent },
  { path: 'lm-studio', component: LmStudioComponent },
  { path: 'image-creator', component: ImageGeneratorComponent },
  { path: 'vertex-image', component: VertexImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
