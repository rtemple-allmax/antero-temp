import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectBoxComponent } from './select-box.component';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { FormsModule } from '@angular/forms';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    CommonModule,
    DxSelectBoxModule,
    FormsModule,
    SpacerModule
  ],
  declarations: [SelectBoxComponent],
  exports: [SelectBoxComponent]
})
export class SelectBoxModule {}
