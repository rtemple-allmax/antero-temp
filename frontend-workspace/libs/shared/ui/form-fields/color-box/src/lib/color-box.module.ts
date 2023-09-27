import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorBoxComponent } from './color-box.component';
import { DxColorBoxModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';

@NgModule({
  imports: [
    CommonModule,
    DxColorBoxModule,
    FlexModule,
    FormsModule,
    IconButtonModule
  ],
  declarations: [ ColorBoxComponent ],
  exports: [ ColorBoxComponent ],
})
export class ColorBoxModule {}
