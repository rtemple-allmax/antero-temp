import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchableTableDropdownComponent } from './searchable-table-dropdown.component';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FormsModule } from '@angular/forms';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';

@NgModule({
  imports: [
    ClickOutsideModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    IconButtonModule,
    SpacerModule
  ],
  declarations: [SearchableTableDropdownComponent],
  exports: [SearchableTableDropdownComponent],
})
export class SearchableTableDropdownModule {}
