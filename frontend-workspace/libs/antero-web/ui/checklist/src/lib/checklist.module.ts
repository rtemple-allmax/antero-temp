import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistViewerComponent } from './checklist-viewer/checklist-viewer.component';
import { ChecklistEditorComponent } from './checklist-editor/checklist-editor.component';
import { DxScrollViewModule } from 'devextreme-angular';
import { ReadOnlyCheckBoxModule } from '@allmax-angular/shared/ui/read-only-check-box';
import { CheckBoxModule } from '@allmax-angular/shared/ui/form-fields/check-box';
import { FormsModule } from '@angular/forms';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';

@NgModule({
  imports: [
    CheckBoxModule,
    ComboButtonModule,
    CommonModule,
    DxScrollViewModule,
    FlexModule,
    FormsModule,
    GroupBoxModule,
    IconButtonModule,
    ModalWindowModule,
    ReadOnlyCheckBoxModule,
    SpacerModule,
    TextBoxModule
  ],
  declarations: [
    ChecklistViewerComponent,
    ChecklistEditorComponent
  ],
  exports: [
    ChecklistViewerComponent,
    ChecklistEditorComponent
  ],
})
export class ChecklistModule {}
