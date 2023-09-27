import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaComponent } from './text-area.component';
import { DxTextAreaModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    CommonModule,
    DxTextAreaModule,
    FormsModule,
    SpacerModule
  ],
  declarations: [ TextAreaComponent ],
  exports: [ TextAreaComponent ],
})
export class TextAreaModule {}
