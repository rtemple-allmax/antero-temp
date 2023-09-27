import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { PopoverButtonComponent } from './popover-button.component';
import { DxPopoverModule } from 'devextreme-angular';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';

@NgModule({
  imports: [
    ClickOutsideModule,
    CommonModule,
    DxPopoverModule,
    IconButtonModule,
    LinkButtonModule
  ],
  declarations: [ PopoverButtonComponent ],
  exports: [ PopoverButtonComponent ],
})
export class PopoverButtonModule {}
