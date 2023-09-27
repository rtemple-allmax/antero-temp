import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartQuantityAddComponent } from './part-quantity-add/part-quantity-add.component';
import { PartQuantityEditComponent } from './part-quantity-edit/part-quantity-edit.component';
import { PartQuantityDeleteComponent } from './part-quantity-delete/part-quantity-delete.component';
import { FormsModule } from '@angular/forms';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
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
    NumberBoxModule,
    SearchableDropdownModule,
    SpacerModule
  ],
  declarations: [
    PartQuantityAddComponent,
    PartQuantityEditComponent,
    PartQuantityDeleteComponent,
  ],
  exports: [
    PartQuantityAddComponent,
    PartQuantityEditComponent,
    PartQuantityDeleteComponent,
  ],
})
export class PartQuantityFormsModule {}
