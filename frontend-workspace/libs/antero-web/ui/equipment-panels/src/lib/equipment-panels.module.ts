import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentDetailsPanelComponent } from './equipment-details-panel/equipment-details-panel.component';
import { EquipmentDocumentsPanelComponent } from './equipment-documents-panel/equipment-documents-panel.component';
import { EquipmentHistoryPanelComponent } from './equipment-history-panel/equipment-history-panel.component';
import { EquipmentImagesPanelComponent } from './equipment-images-panel/equipment-images-panel.component';
import { EquipmentInstrumentsPanelComponent } from './equipment-instruments-panel/equipment-instruments-panel.component';
import { EquipmentMapPanelComponent } from './equipment-map-panel/equipment-map-panel.component';
import { EquipmentPartsPanelComponent } from './equipment-parts-panel/equipment-parts-panel.component';
import { EquipmentTemplatesPanelComponent } from './equipment-templates-panel/equipment-templates-panel.component';
import { EquipmentWorkPanelComponent } from './equipment-work-panel/equipment-work-panel.component';
import {
  DxContextMenuModule,
  DxFilterBuilderModule,
  DxScrollViewModule,
} from 'devextreme-angular';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SwitchModule } from '@allmax-angular/shared/ui/switch';
import { DateRangeBoxModule } from '@allmax-angular/shared/ui/form-fields/date-range-box';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from '@allmax-angular/shared/ui/accordion';
import { FilePickerModule } from '@allmax-angular/shared/ui/file-picker';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { ImageGalleryModule } from '@allmax-angular/shared/ui/image-gallery';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { CrudToolbarModule } from '@allmax-angular/shared/ui/crud-toolbar';
import { MapModule } from '@allmax-angular/shared/ui/map';
import { ContactBoxModule } from '@allmax-angular/shared/ui/contact-box';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { ShortcutButtonModule } from '@allmax-angular/shared/ui/shortcut-button';
import { FileExplorerModule } from '@allmax-angular/shared/ui/file-explorer';
import { DragAndDropModule } from '@allmax-angular/shared/ui/drag-and-drop';
import { EquipmentCategoriesSetupPanelComponent } from './equipment-categories-setup-panel/equipment-categories-setup-panel.component';
import { EquipmentConditionsSetupPanelComponent } from './equipment-conditions-setup-panel/equipment-conditions-setup-panel.component';
import { EquipmentDepartmentsSetupPanelComponent } from './equipment-departments-setup-panel/equipment-departments-setup-panel.component';
import { EquipmentCriticalitySetupPanelComponent } from './equipment-criticality-setup-panel/equipment-criticality-setup-panel.component';
import { EquipmentGroupsSetupPanelComponent } from './equipment-groups-setup-panel/equipment-groups-setup-panel.component';
import { EquipmentLocationsSetupPanelComponent } from './equipment-locations-setup-panel/equipment-locations-setup-panel.component';
import { EquipmentPrioritiesSetupPanelComponent } from './equipment-priorities-setup-panel/equipment-priorities-setup-panel.component';
import { EquipmentTypesSetupPanelComponent } from './equipment-types-setup-panel/equipment-types-setup-panel.component';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';
import { CollapsibleModule } from '@allmax-angular/shared/ui/collapsible';
import { SearchBoxModule } from '@allmax-angular/shared/ui/search-box';
import { FilterButtonModule } from '@allmax-angular/shared/ui/buttons/filter-button';
import { PortraitModule } from '@allmax-angular/shared/ui/portrait';
import { PopoverButtonModule } from '@allmax-angular/shared/ui/buttons/popover-button';
import { FilterModule } from '@allmax-angular/shared/ui/filter';
import { ListEditorModule } from '@allmax-angular/shared/ui/list-editor';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { InstrumentCardModule } from '@allmax-angular/antero-web/ui/cards/instrument-card';
import { EquipmentPartCardModule } from '@allmax-angular/antero-web/ui/cards/equipment-part-card';
import { WorkOrderCardModule } from '@allmax-angular/antero-web/ui/cards/work-order-card';
import { WorkHistoryCardModule } from '@allmax-angular/antero-web/ui/cards/work-history-card';
import { EquipmentTasksPanelComponent } from './equipment-tasks-panel/equipment-tasks-panel.component';
import { TaskCardModule } from '@allmax-angular/antero-web/ui/cards/task-card';
import { FormattedTextModule } from '@allmax-angular/shared/ui/formatted-text';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { EditableDataPointsModule } from '@allmax-angular/shared/ui/editable-data-points';
import { EquipmentMyDataPanelComponent } from './equipment-my-data-panel/equipment-my-data-panel.component';
import { EquipmentPurchasingPanelComponent } from './equipment-purchasing-panel/equipment-purchasing-panel.component';
import { EquipmentCustomFieldsPanelComponent } from './equipment-custom-fields-panel/equipment-custom-fields-panel.component';
import { EquipmentListItemsModule } from '@allmax-angular/antero-web/ui/equipment-list-items';
import { ListItemsModule } from '@allmax-angular/antero-web/ui/list-items';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';

@NgModule({
  imports: [
    AccordionModule,
    CardModule,
    CollapsibleModule,
    ComboButtonModule,
    CommonModule,
    ConfirmationModule,
    ContactBoxModule,
    CrudToolbarModule,
    DataTableModule,
    DateBoxModule,
    DateRangeBoxModule,
    DragAndDropModule,
    DropdownButtonModule,
    DxContextMenuModule,
    DxScrollViewModule,
    FlexModule,
    FileExplorerModule,
    FilePickerModule,
    FilterButtonModule,
    FilterModule,
    FontAwesomeModule,
    FormsModule,
    IconButtonModule,
    ImageGalleryModule,
    FormsModule,
    GridModule,
    GroupBoxModule,
    LabelButtonModule,
    LinkButtonModule,
    ListEditorModule,
    MapModule,
    ModalWindowModule,
    NumberBoxModule,
    PortraitModule,
    ReadOnlyBoxModule,
    ScrollBoxModule,
    SearchBoxModule,
    ShortcutButtonModule,
    SpacerModule,
    SwitchModule,
    TextBoxModule,
    PopoverButtonModule,
    IconModule,
    ReadOnlyBoxModule,
    InstrumentCardModule,
    EquipmentPartCardModule,
    WorkOrderCardModule,
    WorkHistoryCardModule,
    TaskCardModule,
    FormattedTextModule,
    LayoutPanelModule,
    EditableDataPointsModule,
    EquipmentListItemsModule,
    ListItemsModule,
    SeparatorModule
  ],
  declarations: [
    EquipmentDetailsPanelComponent,
    EquipmentDocumentsPanelComponent,
    EquipmentHistoryPanelComponent,
    EquipmentImagesPanelComponent,
    EquipmentInstrumentsPanelComponent,
    EquipmentMapPanelComponent,
    EquipmentPartsPanelComponent,
    EquipmentTemplatesPanelComponent,
    EquipmentWorkPanelComponent,
    EquipmentCategoriesSetupPanelComponent,
    EquipmentConditionsSetupPanelComponent,
    EquipmentDepartmentsSetupPanelComponent,
    EquipmentCriticalitySetupPanelComponent,
    EquipmentGroupsSetupPanelComponent,
    EquipmentLocationsSetupPanelComponent,
    EquipmentPrioritiesSetupPanelComponent,
    EquipmentTypesSetupPanelComponent,
    EquipmentTasksPanelComponent,
    EquipmentMyDataPanelComponent,
    EquipmentPurchasingPanelComponent,
    EquipmentCustomFieldsPanelComponent,
  ],
  exports: [
    EquipmentDetailsPanelComponent,
    EquipmentDocumentsPanelComponent,
    EquipmentHistoryPanelComponent,
    EquipmentImagesPanelComponent,
    EquipmentInstrumentsPanelComponent,
    EquipmentMapPanelComponent,
    EquipmentPartsPanelComponent,
    EquipmentTemplatesPanelComponent,
    EquipmentWorkPanelComponent,
    EquipmentCategoriesSetupPanelComponent,
    EquipmentConditionsSetupPanelComponent,
    EquipmentDepartmentsSetupPanelComponent,
    EquipmentCriticalitySetupPanelComponent,
    EquipmentGroupsSetupPanelComponent,
    EquipmentLocationsSetupPanelComponent,
    EquipmentPrioritiesSetupPanelComponent,
    EquipmentTypesSetupPanelComponent,
    EquipmentTasksPanelComponent,
    EquipmentMyDataPanelComponent,
    EquipmentPurchasingPanelComponent,
    EquipmentCustomFieldsPanelComponent,
  ],
})
export class EquipmentPanelsModule {}
