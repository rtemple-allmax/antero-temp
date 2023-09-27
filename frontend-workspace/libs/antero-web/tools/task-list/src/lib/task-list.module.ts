import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { CrudToolbarModule } from '@allmax-angular/shared/ui/crud-toolbar';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { DxScrollViewModule } from 'devextreme-angular';
import { CheckBoxModule } from '@allmax-angular/shared/ui/form-fields/check-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FormsModule } from '@angular/forms';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddChecklistItemComponent } from './add-checklist-item/add-checklist-item.component';
import { ReadOnlyCheckBoxModule } from '@allmax-angular/shared/ui/read-only-check-box';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';
import { DeleteConfirmationModule } from '@allmax-angular/shared/ui/delete-confirmation';
import { TextEditorModule } from '@allmax-angular/shared/ui/text-editor';
import { FormattedTextModule } from '@allmax-angular/shared/ui/formatted-text';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationModule,
    CrudToolbarModule,
    DataTableModule,
    FlexModule,
    GridModule,
    GroupBoxModule,
    ModalWindowModule,
    DxScrollViewModule,
    CheckBoxModule,
    SpacerModule,
    FormsModule,
    TextBoxModule,
    IconButtonModule,
    ComboButtonModule,
    ReadOnlyCheckBoxModule,
    DeleteConfirmationModule,
    TextEditorModule,
    FormattedTextModule
  ],
  declarations: [
    TaskListComponent,
    AddTaskComponent,
    AddChecklistItemComponent,
    DeleteTaskComponent
  ],
  exports: [ TaskListComponent ],
})
export class TaskListModule {}
