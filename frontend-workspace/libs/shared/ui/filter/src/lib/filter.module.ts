import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { FlexModule } from '@allmax-angular/shared/ui/flex'
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';

@NgModule({
  imports: [
    ClickOutsideModule,
    ComboButtonModule,
    CommonModule,
    DataTableModule,
    FlexModule,
    LinkButtonModule
  ],
  declarations: [ FilterComponent ],
  exports: [ FilterComponent ],
})
export class FilterModule {}
