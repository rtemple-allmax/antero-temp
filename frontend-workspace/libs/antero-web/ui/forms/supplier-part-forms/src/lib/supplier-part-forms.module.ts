import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierPartAddComponent } from './supplier-part-add/supplier-part-add.component';
import { SupplierPartEditComponent } from './supplier-part-edit/supplier-part-edit.component';
import { SupplierPartDeleteComponent } from './supplier-part-delete/supplier-part-delete.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FormsModule } from '@angular/forms';
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
    SearchableDropdownModule,
    SpacerModule,
    TextBoxModule
  ],
  declarations: [
    SupplierPartAddComponent,
    SupplierPartEditComponent,
    SupplierPartDeleteComponent,
  ],
  exports: [
    SupplierPartAddComponent,
    SupplierPartEditComponent,
    SupplierPartDeleteComponent,
  ],
})
export class SupplierPartFormsModule {}
