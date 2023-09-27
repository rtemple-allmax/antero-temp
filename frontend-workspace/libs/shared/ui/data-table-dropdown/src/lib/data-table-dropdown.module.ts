import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableDropdownComponent } from './data-table-dropdown.component';
import { DxDropDownBoxModule } from 'devextreme-angular';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DxDropDownBoxModule,
    FormsModule,
    DataTableModule
  ],
  declarations: [ DataTableDropdownComponent ],
  exports: [ DataTableDropdownComponent ],
})
export class DataTableDropdownModule {}
