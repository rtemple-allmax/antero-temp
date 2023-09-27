import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudToolbarComponent } from './crud-toolbar.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    IconButtonModule,
  ],
  declarations: [ CrudToolbarComponent ],
  exports: [ CrudToolbarComponent ],
})
export class CrudToolbarModule {}
