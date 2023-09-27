import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverTextComponent } from './popover-text.component';
import { DxPopoverModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxPopoverModule
  ],
  declarations: [ PopoverTextComponent ],
  exports: [ PopoverTextComponent ],
})
export class PopoverTextModule {}
