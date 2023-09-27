import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderPartAddComponent } from './work-order-part-add/work-order-part-add.component';
import { WorkOrderPartEditComponent } from './work-order-part-edit/work-order-part-edit.component';
import { WorkOrderPartDeleteComponent } from './work-order-part-delete/work-order-part-delete.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { FormsModule } from '@angular/forms';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { SearchableTableDropdownModule} from '@allmax-angular/shared/ui/searchable-table-dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    ModalWindowModule,
    NumberBoxModule,
    SearchableDropdownModule,
    SearchableTableDropdownModule,
    SpacerModule
  ],
  declarations: [
    WorkOrderPartAddComponent,
    WorkOrderPartEditComponent,
    WorkOrderPartDeleteComponent,
  ],
  exports: [
    WorkOrderPartAddComponent,
    WorkOrderPartEditComponent,
    WorkOrderPartDeleteComponent,
  ],
})
export class WorkOrderPartFormsModule {}
