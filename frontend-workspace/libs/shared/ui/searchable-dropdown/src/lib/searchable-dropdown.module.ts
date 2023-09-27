import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchableDropdownComponent } from './searchable-dropdown.component';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';
import { FormsModule } from '@angular/forms';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SearchableDropdownItemComponent } from './searchable-dropdown-item/searchable-dropdown-item.component';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { DxScrollViewModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule,
    FlexModule,
    FormsModule,
    ScrollBoxModule,
    SpacerModule,
    IconButtonModule,
    DataTableModule,
    DxScrollViewModule
  ],
  declarations: [
    SearchableDropdownComponent,
    SearchableDropdownItemComponent
  ],
  exports: [
    SearchableDropdownComponent,
    SearchableDropdownItemComponent
  ],
})
export class SearchableDropdownModule {}
