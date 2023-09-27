import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadOnlyCheckBoxComponent } from './read-only-check-box.component';
import { DxCheckBoxModule } from 'devextreme-angular';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    DxCheckBoxModule,
    FlexModule
  ],
  declarations: [ ReadOnlyCheckBoxComponent ],
  exports: [ ReadOnlyCheckBoxComponent ],
})
export class ReadOnlyCheckBoxModule {}
