import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window.component';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';

@NgModule({
  imports: [
    CommonModule,
    IconButtonModule
  ],
  declarations: [ModalWindowComponent],
  exports: [ModalWindowComponent]
})
export class ModalWindowModule {}
