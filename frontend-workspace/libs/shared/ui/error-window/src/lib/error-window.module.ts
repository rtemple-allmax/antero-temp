import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorWindowComponent } from './error-window.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';

@NgModule({
  imports: [
    CommonModule,
    ModalWindowModule
  ],
  declarations: [ ErrorWindowComponent ],
  exports: [ ErrorWindowComponent ],
})
export class ErrorWindowModule {}
