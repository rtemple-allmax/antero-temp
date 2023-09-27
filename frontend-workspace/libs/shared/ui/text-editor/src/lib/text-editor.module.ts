import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { TextEditorDropdownComponent } from './text-editor-dropdown/text-editor-dropdown.component';
import { DxScrollViewModule } from 'devextreme-angular';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    DxScrollViewModule,
    IconModule,
    FlexModule,
    ClickOutsideModule
  ],
  declarations: [
    TextEditorComponent,
    TextEditorDropdownComponent
  ],
  exports: [ TextEditorComponent ]
})
export class TextEditorModule {}
