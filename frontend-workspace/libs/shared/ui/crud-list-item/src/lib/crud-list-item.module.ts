import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudListItemComponent } from './crud-list-item.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { CrudButtonModule } from '@allmax-angular/shared/ui/buttons/crud-button';

@NgModule({
  imports: [
    CommonModule,
    CrudButtonModule,
    FlexModule
  ],
  declarations: [ CrudListItemComponent ],
  exports: [ CrudListItemComponent ],
})
export class CrudListItemModule {}
