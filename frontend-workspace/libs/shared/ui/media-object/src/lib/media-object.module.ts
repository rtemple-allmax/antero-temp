import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaObjectComponent } from './media-object.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { AvatarModule } from '@allmax-angular/shared/ui/avatar';

@NgModule({
  imports: [
    AvatarModule,
    CommonModule,
    FlexModule
  ],
  declarations: [MediaObjectComponent],
  exports: [MediaObjectComponent],
})
export class MediaObjectModule {}
