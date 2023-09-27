import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorkOrderComponent } from './create-work-order.component';
import { CollapsibleWindowModule } from '@allmax-angular/shared/ui/collapsible-window';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import {
  DxDataGridModule,
  DxDropDownBoxModule,
  DxScrollViewModule,
} from 'devextreme-angular';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { DataTableDropdownModule } from '@allmax-angular/shared/ui/data-table-dropdown';
import { TableDropDownModule } from '@allmax-angular/shared/ui/form-fields/table-drop-down';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { AccordionModule } from '@allmax-angular/shared/ui/accordion';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { CrudToolbarModule } from '@allmax-angular/shared/ui/crud-toolbar';

@NgModule({
  imports: [
    CommonModule,
    CollapsibleWindowModule,
    ModalWindowModule,
    DateBoxModule,
    DxDropDownBoxModule,
    FlexModule,
    ComboButtonModule,
    NumberBoxModule,
    SpacerModule,
    FormsModule,
    DxDataGridModule,
    DataTableDropdownModule,
    TableDropDownModule,
    GridModule,
    AccordionModule,
    GroupBoxModule,
    DxScrollViewModule,
    SearchableDropdownModule,
    LabelButtonModule,
    DataTableModule,
    CrudToolbarModule,
  ],
  declarations: [ CreateWorkOrderComponent ],
  exports: [ CreateWorkOrderComponent ],
})
export class CreateWorkOrderModule {}
