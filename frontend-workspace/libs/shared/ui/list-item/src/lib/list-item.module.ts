import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';
import { CrudButtonModule } from '@allmax-angular/shared/ui/buttons/crud-button';

@NgModule({
  imports: [
    CommonModule,
    CrudButtonModule,
    DropdownButtonModule,
    FlexModule,
    IconButtonModule,
    SeparatorModule
  ],
  declarations: [
    ListItemComponent
  ],
  exports: [
    ListItemComponent
  ],
})
export class ListItemModule {}
