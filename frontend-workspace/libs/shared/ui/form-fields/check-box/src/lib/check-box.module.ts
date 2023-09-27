import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckBoxComponent } from './check-box.component';
import { DxCheckBoxModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DxCheckBoxModule,
    FormsModule
  ],
  declarations: [ CheckBoxComponent ],
  exports: [ CheckBoxComponent ],
})
export class CheckBoxModule {}
