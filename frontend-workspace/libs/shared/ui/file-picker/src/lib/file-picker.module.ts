import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePickerComponent } from './file-picker.component';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';

@NgModule({
  imports: [
    IconButtonModule,
    CommonModule
  ],
  declarations: [ FilePickerComponent ],
  exports: [ FilePickerComponent ],
})
export class FilePickerModule {}
