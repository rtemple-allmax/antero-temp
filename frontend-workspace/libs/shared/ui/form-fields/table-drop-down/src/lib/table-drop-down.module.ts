import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDropDownComponent } from './table-drop-down.component';
import { DxDropDownBoxModule } from 'devextreme-angular';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    DxDropDownBoxModule,
    SpacerModule
  ],
  declarations: [ TableDropDownComponent ],
  exports: [ TableDropDownComponent ],
})
export class TableDropDownModule {}
