import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownButtonComponent } from './dropdown-button.component';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';
import { DropdownItemButtonComponent } from './dropdown-item-button/dropdown-item-button.component';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { DxContextMenuModule } from 'devextreme-angular';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';
import { SlideOutButtonComponent, SlideOutButtonModule } from '@allmax-angular/shared/ui/buttons/slide-out-button';

@NgModule({
  imports: [
    CommonModule,
    IconButtonModule,
    ClickOutsideModule,
    IconModule,
    FlexModule,
    DxContextMenuModule,
    SeparatorModule,
    SlideOutButtonModule
  ],
  declarations: [
    DropdownButtonComponent,
    DropdownItemButtonComponent
  ],
  exports: [
    DropdownButtonComponent,
    DropdownItemButtonComponent
  ],
})
export class DropdownButtonModule {}
