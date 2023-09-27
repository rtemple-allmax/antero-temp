import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DxDropDownBoxModule, DxListModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxDropDownBoxModule,
    DxListModule
  ],
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
})
export class DropdownModule {}
