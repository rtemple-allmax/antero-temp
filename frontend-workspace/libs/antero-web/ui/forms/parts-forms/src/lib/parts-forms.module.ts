import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartAddComponent } from './part-add/part-add.component';
import { PartEditComponent } from './part-edit/part-edit.component';
import { PartCopyComponent } from './part-copy/part-copy.component';
import { PartDeleteComponent } from './part-delete/part-delete.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { FormsModule } from '@angular/forms';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { TextAreaModule } from '@allmax-angular/shared/ui/form-fields/text-area';
import { CheckBoxModule } from '@allmax-angular/shared/ui/form-fields/check-box';
import { SelectBoxModule } from '@allmax-angular/shared/ui/form-fields/select-box';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';

@NgModule({
  imports: [
    ComboButtonModule,
    CommonModule,
    ConfirmationModule,
    FlexModule,
    FormsModule,
    GridModule,
    ModalWindowModule,
    ScrollBoxModule,
    SearchableDropdownModule,
    SpacerModule,
    TextBoxModule,
    NumberBoxModule,
    TextAreaModule,
    CheckBoxModule,
    SelectBoxModule
  ],
  declarations: [
    PartAddComponent,
    PartEditComponent,
    PartCopyComponent,
    PartDeleteComponent,
  ],
  exports: [
    PartAddComponent,
    PartEditComponent,
    PartCopyComponent,
    PartDeleteComponent,
  ],
})
export class PartsFormsModule {}
