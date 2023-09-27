import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBoxComponent } from './list-box.component';
import { DxDropDownBoxModule } from 'devextreme-angular/ui/drop-down-box';

@NgModule({
  imports: [
    CommonModule,
    DxDropDownBoxModule,
  ],
  declarations: [ ListBoxComponent ],
  exports: [ ListBoxComponent ],
})
export class ListBoxModule {}
