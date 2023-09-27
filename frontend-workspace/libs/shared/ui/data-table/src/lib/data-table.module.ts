import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DataTableComponent } from './data-table.component';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { SearchBoxModule } from '@allmax-angular/shared/ui/search-box';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';

@NgModule({
  imports: [
    CommonModule,
    ComboButtonModule,
    DropdownButtonModule,
    DxDataGridModule,
    FlexModule,
    IconButtonModule,
    SearchBoxModule,
    SpacerModule
  ],
  declarations: [ DataTableComponent ],
  exports: [ DataTableComponent ]
})
export class DataTableModule {}
