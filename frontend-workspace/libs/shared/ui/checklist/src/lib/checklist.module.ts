import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistComponent } from './checklist/checklist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DxCheckBoxModule } from 'devextreme-angular';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    DxCheckBoxModule,
    FlexModule,
    ReactiveFormsModule
  ],
  declarations: [ ChecklistComponent ],
  exports: [ ChecklistComponent ]
})
export class ChecklistModule {}
