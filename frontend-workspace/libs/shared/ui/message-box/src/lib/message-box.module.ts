import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from './message-box.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';

@NgModule({
  declarations: [ MessageBoxComponent ],
  imports: [
    CommonModule,
    ModalWindowModule
  ],
  exports: [ MessageBoxComponent ],
})
export class MessageBoxModule {}
