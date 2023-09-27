import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleEntryFormTextComponent } from './single-entry-form-text/single-entry-form-text.component';
import { FormsModule } from '@angular/forms';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { SingleEntryFormNumberComponent } from './single-entry-form-number/single-entry-form-number.component';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { SingleEntryFormSelectionComponent } from './single-entry-form-selection/single-entry-form-selection.component';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FormsModule,
    IconButtonModule,
    TextBoxModule,
    NumberBoxModule,
    SearchableDropdownModule
  ],
  declarations: [
    SingleEntryFormTextComponent,
    SingleEntryFormNumberComponent,
    SingleEntryFormSelectionComponent,
  ],
  exports: [
    SingleEntryFormTextComponent,
    SingleEntryFormNumberComponent,
    SingleEntryFormSelectionComponent,
  ],
})
export class SingleEntryFormsModule {}
