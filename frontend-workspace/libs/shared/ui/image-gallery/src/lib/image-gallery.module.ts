import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { DxScrollViewModule } from 'devextreme-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { FilePickerModule } from '@allmax-angular/shared/ui/file-picker';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';
import { SafeUrlModule } from '@allmax-angular/shared/pipes/safe-url';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationModule,
    DxScrollViewModule,
    FilePickerModule,
    FlexModule,
    FontAwesomeModule,
    GridModule,
    IconButtonModule,
    LabelButtonModule,
    SafeUrlModule
  ],
  declarations: [ ImageGalleryComponent ],
  exports: [ ImageGalleryComponent ],
})
export class ImageGalleryModule {}
