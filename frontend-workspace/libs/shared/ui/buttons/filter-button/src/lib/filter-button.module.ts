import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterButtonComponent } from './filter-button.component';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';

@NgModule({
  imports: [
    ClickOutsideModule,
    CommonModule,
    DataTableModule,
    FlexModule,
    IconModule,
    LinkButtonModule,
    SpacerModule
  ],
  declarations: [ FilterButtonComponent ],
  exports: [ FilterButtonComponent ],
})
export class FilterButtonModule {}
