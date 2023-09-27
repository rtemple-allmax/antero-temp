import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeBoxComponent } from './date-range-box.component';
import { FormsModule } from '@angular/forms';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { DxSelectBoxModule } from 'devextreme-angular';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';

@NgModule({
  imports: [
    CommonModule,
    DxSelectBoxModule,
    FormsModule,
    ModalWindowModule,
    SpacerModule,
  ],
  declarations: [ DateRangeBoxComponent ],
  exports: [ DateRangeBoxComponent ],
})
export class DateRangeBoxModule {}
