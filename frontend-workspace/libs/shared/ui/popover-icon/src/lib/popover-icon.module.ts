import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverIconComponent } from './popover-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DxPopoverModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxPopoverModule,
    FontAwesomeModule
  ],
  declarations: [ PopoverIconComponent ],
  exports: [ PopoverIconComponent ],
})
export class PopoverIconModule {}
