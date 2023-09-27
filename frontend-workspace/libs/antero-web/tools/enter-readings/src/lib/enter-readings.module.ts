import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterReadingsComponent } from './enter-readings.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { FormsModule } from '@angular/forms';
import { TableDropDownModule } from '@allmax-angular/shared/ui/form-fields/table-drop-down';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { DxScrollViewModule } from 'devextreme-angular';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { SearchableTableDropdownModule } from '@allmax-angular/shared/ui/searchable-table-dropdown';

@NgModule({
  imports: [
    CommonModule,
    ComboButtonModule,
    DateBoxModule,
    DxScrollViewModule,
    FlexModule,
    FormsModule,
    GridModule,
    ModalWindowModule,
    NumberBoxModule,
    ReadOnlyBoxModule,
    SearchableDropdownModule,
    SearchableTableDropdownModule,
    SpacerModule,
    TableDropDownModule,
    SearchableDropdownModule
  ],
  declarations: [ EnterReadingsComponent ],
  exports: [ EnterReadingsComponent ],
})
export class EnterReadingsModule {}
