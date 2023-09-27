import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './text-box.component';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { FormsModule } from '@angular/forms';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { GridModule } from '@allmax-angular/shared/ui/grid';

@NgModule({
  imports: [
    CommonModule,
    DxTextBoxModule,
    FlexModule,
    FormsModule,
    GridModule,
    SpacerModule,
    GridModule
  ],
  declarations: [TextBoxComponent],
  exports: [ TextBoxComponent]
})
export class TextBoxModule {}
