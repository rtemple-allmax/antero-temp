import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { PopoverButtonModule } from '@allmax-angular/shared/ui/buttons/popover-button';

@NgModule({
  imports: [
    ClickOutsideModule,
    CommonModule,
    DropdownButtonModule,
    FlexModule,
    GridModule,
    IconModule,
    IconButtonModule,
    PopoverButtonModule
  ],
  declarations: [ CardComponent ],
  exports: [ CardComponent ],
})
export class CardModule {}
