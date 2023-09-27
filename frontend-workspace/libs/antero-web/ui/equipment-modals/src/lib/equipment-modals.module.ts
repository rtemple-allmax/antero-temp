import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentModalsComponent } from './equipment-modals.component';
import { AddEditEquipmentPartModalComponent } from './add-edit-equipment-part-modal/add-edit-equipment-part-modal.component';
import { AddEditEquipmentComponent } from './add-edit-equipment/add-edit-equipment.component';
import { AddEditInstrumentComponent } from './add-edit-instrument/add-edit-instrument.component';
import { DeleteEquipmentComponent } from './delete-equipment/delete-equipment.component';
import { DeleteEquipmentDocumentComponent } from './delete-equipment-document/delete-equipment-document.component';
import { DeleteEquipmentPartComponent } from './delete-equipment-part/delete-equipment-part.component';
import { DeleteInstrumentComponent } from './delete-instrument/delete-instrument.component';
import { DeleteReadingComponent } from './delete-reading/delete-reading.component';
import { EditReadingComponent } from './edit-reading/edit-reading.component';
import { InServiceToggleComponent } from './in-service-toggle/in-service-toggle.component';
import { InServiceHistoryComponent } from './in-service-history/in-service-history.component';
import { EquipmentListsComponent } from './equipment-lists/equipment-lists.component';
import { EquipmentReplaceComponent } from './equipment-replace/equipment-replace.component';
import { EquipmentRetireComponent } from './equipment-retire/equipment-retire.component';
import { EquipmentReactivateComponent } from './equipment-reactivate/equipment-reactivate.component';
import { ReadingsHistoryComponent } from './readings-history/readings-history.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { CheckBoxModule } from '@allmax-angular/shared/ui/form-fields/check-box';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { FormsModule } from '@angular/forms';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { TextAreaModule } from '@allmax-angular/shared/ui/form-fields/text-area';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { TableDropDownModule } from '@allmax-angular/shared/ui/form-fields/table-drop-down';
import { SelectBoxModule } from '@allmax-angular/shared/ui/form-fields/select-box';
import { ListBoxModule } from '@allmax-angular/shared/ui/list-box';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
// import { StockLocationsComponent } from './stock-locations/stock-locations.component';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { EquipmentPanelsModule } from '@allmax-angular/antero-web/ui/equipment-panels';
import { ListEditorModule } from '@allmax-angular/shared/ui/list-editor';
import { DeleteEquipmentImageComponent } from './delete-equipment-image/delete-equipment-image.component';
import { SearchableTableDropdownModule } from '@allmax-angular/shared/ui/searchable-table-dropdown';
import { InstrumentFormsModule } from '@allmax-angular/antero-web/ui/forms/instrument-forms';
import { ReadingCardModule } from '@allmax-angular/antero-web/ui/cards/reading-card';
import { EquipmentFormsModule } from '@allmax-angular/antero-web/ui/forms/equipment-forms';
import { ListItemsModule } from '@allmax-angular/antero-web/ui/list-items';
import { ManageCriticalityComponent } from './manage-criticality/manage-criticality.component';

@NgModule({
  imports: [
    CheckBoxModule,
    ComboButtonModule,
    CommonModule,
    ConfirmationModule,
    DataTableModule,
    DateBoxModule,
    DropdownButtonModule,
    FlexModule,
    FormsModule,
    GridModule,
    GroupBoxModule,
    IconButtonModule,
    LinkButtonModule,
    ListBoxModule,
    ModalWindowModule,
    NumberBoxModule,
    ReadOnlyBoxModule,
    ScrollBoxModule,
    SearchableDropdownModule,
    SelectBoxModule,
    SpacerModule,
    TableDropDownModule,
    TabsModule,
    TextAreaModule,
    TextBoxModule,
    ListEditorModule,
    EquipmentPanelsModule,
    SearchableTableDropdownModule,
    InstrumentFormsModule,
    ReadingCardModule,
    EquipmentFormsModule,
    ListItemsModule,
  ],
  declarations: [
    EquipmentModalsComponent,
    AddEditEquipmentPartModalComponent,
    AddEditEquipmentComponent,
    AddEditInstrumentComponent,
    DeleteEquipmentComponent,
    DeleteEquipmentDocumentComponent,
    DeleteEquipmentPartComponent,
    DeleteInstrumentComponent,
    DeleteReadingComponent,
    EditReadingComponent,
    InServiceToggleComponent,
    InServiceHistoryComponent,
    EquipmentListsComponent,
    EquipmentReplaceComponent,
    EquipmentRetireComponent,
    EquipmentReactivateComponent,
    ReadingsHistoryComponent,
    CustomFieldsComponent,
    DeleteEquipmentImageComponent,
    ManageCriticalityComponent,
  ],
  exports: [
    EquipmentModalsComponent,
    AddEditEquipmentPartModalComponent,
    AddEditEquipmentComponent,
    AddEditInstrumentComponent,
    DeleteEquipmentComponent,
    DeleteEquipmentDocumentComponent,
    DeleteEquipmentPartComponent,
    DeleteInstrumentComponent,
    DeleteReadingComponent,
    EditReadingComponent,
    InServiceToggleComponent,
    InServiceHistoryComponent,
    EquipmentListsComponent,
    EquipmentReplaceComponent,
    EquipmentRetireComponent,
    EquipmentReactivateComponent,
    ReadingsHistoryComponent,
    CustomFieldsComponent,
    DeleteEquipmentImageComponent,
    ManageCriticalityComponent,
  ],
})
export class EquipmentModalsModule {}
