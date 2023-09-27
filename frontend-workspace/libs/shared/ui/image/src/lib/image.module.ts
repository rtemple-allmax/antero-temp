import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { SafeUrlModule } from '@allmax-angular/shared/pipes/safe-url';

@NgModule({
  imports: [CommonModule, SafeUrlModule ],
  declarations: [ImageComponent],
  exports: [ImageComponent],
})
export class ImageModule {}
