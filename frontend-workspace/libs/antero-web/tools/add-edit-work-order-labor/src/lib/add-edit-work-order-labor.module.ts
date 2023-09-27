import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditWorkOrderLaborComponent } from './add-edit-work-order-labor.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { FormsModule } from '@angular/forms';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    ComboButtonModule,
    FlexModule,
    FormsModule,
    ModalWindowModule,
    SearchableDropdownModule,
    SpacerModule,
    NumberBoxModule
  ],
  declarations: [ AddEditWorkOrderLaborComponent ],
  exports: [ AddEditWorkOrderLaborComponent ],
})
export class AddEditWorkOrderLaborModule {}
