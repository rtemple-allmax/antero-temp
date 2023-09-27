import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcedureViewerComponent } from './procedure-viewer.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';

@NgModule({
  imports: [
    CommonModule,
    ModalWindowModule
  ],
  declarations: [ProcedureViewerComponent],
  exports: [ProcedureViewerComponent],
})
export class ProcedureViewerModule {}
