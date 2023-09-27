import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentAddComponent } from './equipment-add/equipment-add.component';
import { EquipmentCopyComponent } from './equipment-copy/equipment-copy.component';
import { EquipmentEditComponent } from './equipment-edit/equipment-edit.component';
import { EquipmentDeleteComponent } from './equipment-delete/equipment-delete.component';
import { EquipmentEditPrimaryComponent } from './equipment-edit-primary/equipment-edit-primary.component';
import { EquipmentEditPurchasingComponent } from './equipment-edit-purchasing/equipment-edit-purchasing.component';
import { EquipmentEditCustomComponent } from './equipment-edit-custom/equipment-edit-custom.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { FormsModule } from '@angular/forms';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { TextAreaModule } from '@allmax-angular/shared/ui/form-fields/text-area';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { EquipmentEditMyDataComponent } from './equipment-edit-my-data/equipment-edit-my-data.component';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { CheckBoxModule } from '@allmax-angular/shared/ui/form-fields/check-box';

@NgModule({
  imports: [
    CheckBoxModule,
    ComboButtonModule,
    CommonModule,
    DateBoxModule,
    FlexModule,
    FormsModule,
    GridModule,
    GroupBoxModule,
    ModalWindowModule,
    NumberBoxModule,
    ReadOnlyBoxModule,
    ScrollBoxModule,
    SearchableDropdownModule,
    SpacerModule,
    TextAreaModule,
    TextBoxModule,
  ],
  declarations: [
    EquipmentAddComponent,
    EquipmentCopyComponent,
    EquipmentEditComponent,
    EquipmentDeleteComponent,
    EquipmentEditPrimaryComponent,
    EquipmentEditPurchasingComponent,
    EquipmentEditCustomComponent,
    EquipmentEditMyDataComponent,
  ],
  exports: [
    EquipmentAddComponent,
    EquipmentCopyComponent,
    EquipmentEditComponent,
    EquipmentDeleteComponent,
    EquipmentEditPrimaryComponent,
    EquipmentEditPurchasingComponent,
    EquipmentEditCustomComponent,
    EquipmentEditMyDataComponent,
  ],
})
export class EquipmentFormsModule {}
