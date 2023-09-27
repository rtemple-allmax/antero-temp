import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableTextComponent } from './editable-text/editable-text.component';
import { EditableNumberComponent } from './editable-number/editable-number.component';
import { EditableDateComponent } from './editable-date/editable-date.component';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { EditableSelectionComponent } from './editable-selection/editable-selection.component';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { EditableDataPointsContainerComponent } from './editable-data-points-container/editable-data-points-container.component';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';

@NgModule({
  imports: [
    ClickOutsideModule,
    CommonModule,
    DateBoxModule,
    FlexModule,
    FormsModule,
    IconButtonModule,
    NumberBoxModule,
    ReadOnlyBoxModule,
    SearchableDropdownModule,
    TextBoxModule
  ],
  declarations: [
    EditableTextComponent,
    EditableNumberComponent,
    EditableDateComponent,
    EditableSelectionComponent,
    EditableDataPointsContainerComponent,
  ],
  exports: [
    EditableTextComponent,
    EditableNumberComponent,
    EditableDateComponent,
    EditableSelectionComponent,
    EditableDataPointsContainerComponent,
  ],
})
export class EditableDataPointsModule {}
