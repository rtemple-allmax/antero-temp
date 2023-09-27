import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateBoxComponent } from './date-box.component';
import { DxDateBoxModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    CommonModule,
    DxDateBoxModule,
    FormsModule,
    SpacerModule
  ],
  declarations: [ DateBoxComponent ],
  exports: [ DateBoxComponent ],
})
export class DateBoxModule {}
