import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionEquipmentComponent } from './content/section-equipment/section-equipment.component';
import { EquipmentTabActivityComponent } from './content/tabs/equipment-tab-activity/equipment-tab-activity.component';
import { EquipmentTabDetailsComponent } from './content/tabs/equipment-tab-details/equipment-tab-details.component';
import { EquipmentTabImagesComponent } from './content/tabs/equipment-tab-images/equipment-tab-images.component';
import { EquipmentTabMapComponent } from './content/tabs/equipment-tab-map/equipment-tab-map.component';
import { EquipmentTabWorkComponent } from './content/tabs/equipment-tab-work/equipment-tab-work.component';
import { EquipmentListItemComponent } from './content/list-items/equipment-list-item/equipment-list-item.component';
import { EquipmentPanelDetailsComponent } from './content/panels/equipment-panel-details/equipment-panel-details.component';
import { EquipmentPanelPurchasingComponent } from './content/panels/equipment-panel-purchasing/equipment-panel-purchasing.component';
import { EquipmentPanelPartsComponent } from './content/panels/equipment-panel-parts/equipment-panel-parts.component';
import { EquipmentPanelInstrumentsComponent } from './content/panels/equipment-panel-instruments/equipment-panel-instruments.component';
import { EquipmentPanelDocumentsComponent } from './content/panels/equipment-panel-documents/equipment-panel-documents.component';
import { EquipmentPanelCustomFieldsComponent } from './content/panels/equipment-panel-custom-fields/equipment-panel-custom-fields.component';
import { EquipmentPanelSavedWorkOrdersComponent } from './content/tabs/equipment-tab-work/panels/equipment-panel-saved-work-orders/equipment-panel-saved-work-orders.component';
import { EquipmentPanelActiveWorkOrdersComponent } from './content/tabs/equipment-tab-work/panels/equipment-panel-active-work-orders/equipment-panel-active-work-orders.component';
import { EquipmentPanelWorkHistoryComponent } from './content/tabs/equipment-tab-work/panels/equipment-panel-work-history/equipment-panel-work-history.component';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ContactBoxModule } from '@allmax-angular/shared/ui/contact-box';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { SearchBoxModule } from '@allmax-angular/shared/ui/search-box';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { MediaObjectModule } from '@allmax-angular/shared/ui/media-object';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { EquipmentPanelCustomizedDataComponent } from './content/panels/equipment-panel-customized-data/equipment-panel-customized-data.component';
import { EquipmentSliderCustomizeViewComponent } from './content/sliders/equipment-slider-customize-view/equipment-slider-customize-view.component';
import { CustomizationItemModule } from '@allmax-angular/shared/ui/customization-item';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';
import { EquipmentSliderDetailsEditComponent } from './content/sliders/equipment-slider-details-edit/equipment-slider-details-edit.component';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { CrudButtonModule } from '@allmax-angular/shared/ui/buttons/crud-button';
import { FileExplorerModule } from '@allmax-angular/shared/ui/file-explorer';
import { AvatarModule } from '@allmax-angular/shared/ui/avatar';
import { PopoverTextModule } from '@allmax-angular/shared/ui/popover-text';
import { EquipmentSliderAddComponent } from './content/sliders/equipment-slider-add/equipment-slider-add.component';
import { EquipmentSliderEditComponent } from './content/sliders/equipment-slider-edit/equipment-slider-edit.component';
import { EquipmentSliderCopyComponent } from './content/sliders/equipment-slider-copy/equipment-slider-copy.component';
import { EquipmentSliderDeleteComponent } from './content/sliders/equipment-slider-delete/equipment-slider-delete.component';
import { EquipmentSliderManageCustomFieldsComponent } from './content/sliders/equipment-slider-manage-custom-fields/equipment-slider-manage-custom-fields.component';
import { EquipmentSliderInstrumentAddComponent } from './content/sliders/equipment-slider-instrument-add/equipment-slider-instrument-add.component';
import { EquipmentSliderInstrumentEditComponent } from './content/sliders/equipment-slider-instrument-edit/equipment-slider-instrument-edit.component';
import { EquipmentSliderInstrumentDeleteComponent } from './content/sliders/equipment-slider-instrument-delete/equipment-slider-instrument-delete.component';
import { EquipmentSliderPartAddComponent } from './content/sliders/equipment-slider-part-add/equipment-slider-part-add.component';
import { EquipmentSliderPartEditComponent } from './content/sliders/equipment-slider-part-edit/equipment-slider-part-edit.component';
import { EquipmentSliderPartDeleteComponent } from './content/sliders/equipment-slider-part-delete/equipment-slider-part-delete.component';
import { EquipmentSliderDocumentDeleteComponent } from './content/sliders/equipment-slider-document-delete/equipment-slider-document-delete.component';
import { EquipmentSliderImageDeleteComponent } from './content/sliders/equipment-slider-image-delete/equipment-slider-image-delete.component';
import { EquipmentSliderPurchasingEditComponent } from './content/sliders/equipment-slider-purchasing-edit/equipment-slider-purchasing-edit.component';
import { EquipmentSliderCustomFieldsEditComponent } from './content/sliders/equipment-slider-custom-fields-edit/equipment-slider-custom-fields-edit.component';
import { EquipmentSliderMyDataEditComponent } from './content/sliders/equipment-slider-my-data-edit/equipment-slider-my-data-edit.component';
import { EquipmentSliderInServiceComponent } from './content/sliders/equipment-slider-in-service/equipment-slider-in-service.component';
import { EquipmentSliderListsComponent } from './content/sliders/equipment-slider-lists/equipment-slider-lists.component';
import { EquipmentSliderReadingHistoryComponent } from './content/sliders/equipment-slider-reading-history/equipment-slider-reading-history.component';
import { EquipmentSliderReactivateComponent } from './content/sliders/equipment-slider-reactivate/equipment-slider-reactivate.component';
import { EquipmentSliderReplaceComponent } from './content/sliders/equipment-slider-replace/equipment-slider-replace.component';
import { EquipmentSliderRetireComponent } from './content/sliders/equipment-slider-retire/equipment-slider-retire.component';
import { EquipmentSliderManageCriticalityComponent } from './content/sliders/equipment-slider-manage-criticality/equipment-slider-manage-criticality.component';
import { EquipmentSliderEnterReadingsComponent } from './content/sliders/equipment-slider-enter-readings/equipment-slider-enter-readings.component';
import { EquipmentSliderInServiceHistoryComponent } from './content/sliders/equipment-slider-in-service-history/equipment-slider-in-service-history.component';
import { AccordionModule } from '@allmax-angular/shared/ui/accordion';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { TextAreaModule } from '@allmax-angular/shared/ui/form-fields/text-area';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { FilePickerModule } from '@allmax-angular/shared/ui/file-picker';
import { EquipmentListItemInstrumentComponent } from './content/list-items/equipment-list-item-instrument/equipment-list-item-instrument.component';
import { EquipmentListItemPartComponent } from './content/list-items/equipment-list-item-part/equipment-list-item-part.component';
import { EquipmentInServiceHistoryListItemComponent } from './content/list-items/equipment-in-service-history-list-item/equipment-in-service-history-list-item.component';
import { EquipmentCriticalityWidgetComponent } from './content/widgets/equipment-criticality-widget/equipment-criticality-widget.component';
import { DxPopoverModule } from 'devextreme-angular';
import { SelectBoxModule } from '@allmax-angular/shared/ui/form-fields/select-box';
import { CrudListItemModule } from '@allmax-angular/shared/ui/crud-list-item';
import { MapModule } from '@allmax-angular/shared/ui/map';
import { SearchableTableDropdownModule } from '@allmax-angular/shared/ui/searchable-table-dropdown';
import { EquipmentPanelHistoryComponent } from './content/panels/equipment-panel-history/equipment-panel-history.component';
import { EquipmentPanelWorkComponent } from './content/panels/equipment-panel-work/equipment-panel-work.component';
import { EquipmentPanelTemplatesComponent } from './content/panels/equipment-panel-templates/equipment-panel-templates.component';
import { PopoverButtonModule } from '@allmax-angular/shared/ui/buttons/popover-button';
import { ListItemsModule } from '@allmax-angular/antero-web/ui/list-items';

@NgModule({
  imports: [
    AccordionModule,
    AnteroAppFrameModule,
    AvatarModule,
    ComboButtonModule,
    CommonModule,
    ContactBoxModule,
    CrudButtonModule,
    CrudListItemModule,
    CustomizationItemModule,
    DataTableModule,
    DateBoxModule,
    DropdownButtonModule,
    DxPopoverModule,
    FileExplorerModule,
    FilePickerModule,
    FlexModule,
    FormsModule,
    GridModule,
    GroupBoxModule,
    IconButtonModule,
    LayoutPanelModule,
    MasterDetailModule,
    MapModule,
    MediaObjectModule,
    NumberBoxModule,
    PopoverButtonModule,
    PopoverTextModule,
    ReactiveFormsModule,
    ReadOnlyBoxModule,
    ScrollBoxModule,
    SearchableDropdownModule,
    SearchableTableDropdownModule,
    SearchBoxModule,
    SelectBoxModule,
    SeparatorModule,
    SpacerModule,
    TabsModule,
    TextAreaModule,
    TextBoxModule,
    ListItemsModule,
  ],
  declarations: [
    SectionEquipmentComponent,
    EquipmentTabActivityComponent,
    EquipmentTabDetailsComponent,
    EquipmentTabImagesComponent,
    EquipmentTabMapComponent,
    EquipmentTabWorkComponent,
    EquipmentListItemComponent,
    EquipmentListItemPartComponent,
    EquipmentListItemInstrumentComponent,
    EquipmentPanelCustomizedDataComponent,
    EquipmentPanelDetailsComponent,
    EquipmentPanelPurchasingComponent,
    EquipmentPanelPartsComponent,
    EquipmentPanelInstrumentsComponent,
    EquipmentPanelDocumentsComponent,
    EquipmentPanelCustomFieldsComponent,
    EquipmentPanelSavedWorkOrdersComponent,
    EquipmentPanelActiveWorkOrdersComponent,
    EquipmentPanelWorkHistoryComponent,
    EquipmentSliderCustomizeViewComponent,
    EquipmentSliderDetailsEditComponent,
    EquipmentSliderAddComponent,
    EquipmentSliderEditComponent,
    EquipmentSliderCopyComponent,
    EquipmentSliderDeleteComponent,
    EquipmentSliderManageCustomFieldsComponent,
    EquipmentSliderInstrumentAddComponent,
    EquipmentSliderInstrumentEditComponent,
    EquipmentSliderInstrumentDeleteComponent,
    EquipmentSliderPartAddComponent,
    EquipmentSliderPartEditComponent,
    EquipmentSliderPartDeleteComponent,
    EquipmentSliderDocumentDeleteComponent,
    EquipmentSliderImageDeleteComponent,
    EquipmentSliderPurchasingEditComponent,
    EquipmentSliderCustomFieldsEditComponent,
    EquipmentSliderMyDataEditComponent,
    EquipmentSliderInServiceComponent,
    EquipmentSliderInServiceHistoryComponent,
    EquipmentSliderListsComponent,
    EquipmentSliderReadingHistoryComponent,
    EquipmentSliderReactivateComponent,
    EquipmentSliderReplaceComponent,
    EquipmentSliderRetireComponent,
    EquipmentSliderManageCriticalityComponent,
    EquipmentSliderEnterReadingsComponent,
    EquipmentInServiceHistoryListItemComponent,
    EquipmentCriticalityWidgetComponent,
    EquipmentPanelHistoryComponent,
    EquipmentPanelWorkComponent,
    EquipmentPanelTemplatesComponent,
  ],
  exports: [SectionEquipmentComponent],
})
export class FeatureAssetManagementModule {}
