import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxNumberBoxModule } from 'devextreme-angular/ui/number-box';
import { NumberBoxComponent } from './number-box.component';
import { FormsModule } from '@angular/forms';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    DxNumberBoxModule,
    FlexModule,
    FormsModule,
    SpacerModule
  ],
  declarations: [ NumberBoxComponent ],
  exports: [ NumberBoxComponent ]
})
export class NumberBoxModule {}
