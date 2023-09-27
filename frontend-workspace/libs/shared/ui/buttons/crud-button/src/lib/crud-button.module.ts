import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudButtonComponent } from './crud-button.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DxContextMenuModule } from 'devextreme-angular';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';
@NgModule({
  imports: [
    CommonModule,
    DropdownButtonModule,
    DxContextMenuModule,
    FlexModule,
    FontAwesomeModule,
    ClickOutsideModule
  ],
  declarations: [ CrudButtonComponent ],
  exports: [ CrudButtonComponent ],
})
export class CrudButtonModule {}
