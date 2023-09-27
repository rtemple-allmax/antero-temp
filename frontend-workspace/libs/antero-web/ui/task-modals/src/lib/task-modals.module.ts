import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { TaskModalsComponent } from './task-modals.component';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { TextEditorModule } from '@allmax-angular/shared/ui/text-editor';
import { FormsModule } from '@angular/forms';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';

@NgModule({
  imports: [
    ComboButtonModule,
    CommonModule,
    ConfirmationModule,
    FlexModule,
    FormsModule,
    ModalWindowModule,
    SpacerModule,
    TextBoxModule,
    TextEditorModule
  ],
  declarations: [
    TaskAddComponent,
    TaskEditComponent,
    TaskDeleteComponent,
    TaskModalsComponent,
  ],
  exports: [
    TaskAddComponent,
    TaskEditComponent,
    TaskDeleteComponent,
    TaskModalsComponent,
  ],
})
export class TaskModalsModule {}
