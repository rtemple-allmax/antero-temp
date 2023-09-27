import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistEditorComponent } from './checklist-editor.component';
import { ListEditorModule } from '@allmax-angular/shared/ui/list-editor';

@NgModule({
  imports: [
    CommonModule,
    ListEditorModule
  ],
  declarations: [ChecklistEditorComponent],
  exports: [ChecklistEditorComponent],
})
export class ChecklistEditorModule {}
