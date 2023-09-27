import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveCheckboxComponent } from './reactive-checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DxCheckBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxCheckBoxModule,
    ReactiveFormsModule
  ],
  declarations: [ ReactiveCheckboxComponent ],
  exports: [ ReactiveCheckboxComponent ],
})
export class ReactiveCheckboxModule {}
