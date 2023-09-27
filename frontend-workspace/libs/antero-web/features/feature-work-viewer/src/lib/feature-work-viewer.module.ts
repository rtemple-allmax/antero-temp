import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkViewerComponent } from './work-viewer/work-viewer.component';
import { WorkViewerPanelAdminComponent } from './tabs/work-viewer-tab-details/panels/work-viewer-panel-admin/work-viewer-panel-admin.component';
import { WorkViewerPanelAttachmentsComponent } from './tabs/work-viewer-tab-details/panels/work-viewer-panel-attachments/work-viewer-panel-attachments.component';
import { WorkViewerPanelCompletionComponent } from './tabs/work-viewer-tab-details/panels/work-viewer-panel-completion/work-viewer-panel-completion.component';
import { WorkViewerPanelContractorsComponent } from './tabs/work-viewer-tab-details/panels/work-viewer-panel-contractors/work-viewer-panel-contractors.component';
import { WorkViewerPanelEquipmentComponent } from './tabs/work-viewer-tab-details/panels/work-viewer-panel-equipment/work-viewer-panel-equipment.component';
import { WorkViewerPanelInstrumentsComponent } from './tabs/work-viewer-tab-details/panels/work-viewer-panel-instruments/work-viewer-panel-instruments.component';
import { WorkViewerPanelLaborComponent } from './tabs/work-viewer-tab-details/panels/work-viewer-panel-labor/work-viewer-panel-labor.component';
import { WorkViewerPanelMiscComponent } from './tabs/work-viewer-tab-details/panels/work-viewer-panel-misc/work-viewer-panel-misc.component';
import { WorkViewerPanelPartsComponent } from './tabs/work-viewer-tab-details/panels/work-viewer-panel-parts/work-viewer-panel-parts.component';
import { WorkViewerPanelTaskComponent } from './tabs/work-viewer-tab-details/panels/work-viewer-panel-task/work-viewer-panel-task.component';
import { WorkViewerPanelToolsComponent } from './tabs/work-viewer-tab-details/panels/work-viewer-panel-tools/work-viewer-panel-tools.component';
import { WorkViewerContractorListItemComponent } from './tabs/work-viewer-tab-details/list-items/work-viewer-contractor-list-item/work-viewer-contractor-list-item.component';
import { WorkViewerToolListItemComponent } from './tabs/work-viewer-tab-details/list-items/work-viewer-tool-list-item/work-viewer-tool-list-item.component';
import { WorkViewerInstrumentListItemComponent } from './tabs/work-viewer-tab-details/list-items/work-viewer-instrument-list-item/work-viewer-instrument-list-item.component';
import { WorkViewerLaborListItemComponent } from './tabs/work-viewer-tab-details/list-items/work-viewer-labor-list-item/work-viewer-labor-list-item.component';
import { WorkViewerMiscListItemComponent } from './tabs/work-viewer-tab-details/list-items/work-viewer-misc-list-item/work-viewer-misc-list-item.component';
import { WorkViewerPartListItemComponent } from './tabs/work-viewer-tab-details/list-items/work-viewer-part-list-item/work-viewer-part-list-item.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { PopoverTextModule } from '@allmax-angular/shared/ui/popover-text';
import { MediaObjectModule } from '@allmax-angular/shared/ui/media-object';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { FileExplorerModule } from '@allmax-angular/shared/ui/file-explorer';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { FormattedTextModule } from '@allmax-angular/shared/ui/formatted-text';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { DrawerModule } from '@allmax-angular/shared/ui/drawer';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { WorkViewerTabDetailsComponent } from './tabs/work-viewer-tab-details/work-viewer-tab-details.component';
import { WorkViewerTabActivityComponent } from './tabs/work-viewer-tab-activity/work-viewer-tab-activity.component';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { WorkViewerTabMapComponent } from './tabs/work-viewer-tab-map/work-viewer-tab-map.component';
import { MapModule } from '@allmax-angular/shared/ui/map';
import { WindowModule } from '@allmax-angular/shared/ui/window';
import { WorkViewerSliderAdminComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-admin/work-viewer-slider-admin.component';
import { WorkViewerSliderEquipmentHistoryComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-equipment-history/work-viewer-slider-equipment-history.component';
import { WorkViewerSliderEquipmentDocumentsComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-equipment-documents/work-viewer-slider-equipment-documents.component';
import { WorkViewerSliderInstructionsComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-instructions/work-viewer-slider-instructions.component';
import { WorkViewerSliderChecklistComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-checklist/work-viewer-slider-checklist.component';
import { WorkViewerSliderCompletionComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-completion/work-viewer-slider-completion.component';
import { WorkViewerSliderInstrumentsComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-instruments/work-viewer-slider-instruments.component';
import { WorkViewerSliderEquipmentDowntimeComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-equipment-downtime/work-viewer-slider-equipment-downtime.component';
import { WorkViewerSliderLaborAddComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-labor-add/work-viewer-slider-labor-add.component';
import { WorkViewerSliderLaborEditComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-labor-edit/work-viewer-slider-labor-edit.component';
import { WorkViewerSliderLaborDeleteComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-labor-delete/work-viewer-slider-labor-delete.component';
import { WorkViewerSliderPartAddComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-part-add/work-viewer-slider-part-add.component';
import { WorkViewerSliderPartEditComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-part-edit/work-viewer-slider-part-edit.component';
import { WorkViewerSliderPartDeleteComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-part-delete/work-viewer-slider-part-delete.component';
import { WorkViewerSliderContractorAddComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-contractor-add/work-viewer-slider-contractor-add.component';
import { WorkViewerSliderContractorEditComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-contractor-edit/work-viewer-slider-contractor-edit.component';
import { WorkViewerSliderContractorDeleteComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-contractor-delete/work-viewer-slider-contractor-delete.component';
import { WorkViewerSliderToolAddComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-tool-add/work-viewer-slider-tool-add.component';
import { WorkViewerSliderToolEditComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-tool-edit/work-viewer-slider-tool-edit.component';
import { WorkViewerSliderToolDeleteComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-tool-delete/work-viewer-slider-tool-delete.component';
import { WorkViewerSliderMiscAddComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-misc-add/work-viewer-slider-misc-add.component';
import { WorkViewerSliderMiscEditComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-misc-edit/work-viewer-slider-misc-edit.component';
import { WorkViewerSliderMiscDeleteComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-misc-delete/work-viewer-slider-misc-delete.component';
import { WorkViewerSliderMoveToReviewComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-move-to-review/work-viewer-slider-move-to-review.component';
import { WorkViewerSliderMoveToHistoryComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-move-to-history/work-viewer-slider-move-to-history.component';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { TextEditorModule } from '@allmax-angular/shared/ui/text-editor';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';
import { ProgressBarModule } from '@allmax-angular/shared/ui/progress-bar';
import { ReactiveCheckboxModule } from '@allmax-angular/shared/ui/reactive-checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChecklistModule } from '@allmax-angular/shared/ui/checklist';
import { WorkViewerSliderEquipmentComponent } from './tabs/work-viewer-tab-details/sliders/work-viewer-slider-equipment/work-viewer-slider-equipment.component';

@NgModule({
  imports: [
    ChecklistModule,
    ComboButtonModule,
    CommonModule,
    DataTableModule,
    DateBoxModule,
    DrawerModule,
    FileExplorerModule,
    FlexModule,
    FormattedTextModule,
    FormsModule,
    GridModule,
    IconButtonModule,
    LayoutPanelModule,
    MapModule,
    MediaObjectModule,
    NumberBoxModule,
    PopoverTextModule,
    ProgressBarModule,
    ReactiveFormsModule,
    ReadOnlyBoxModule,
    ScrollBoxModule,
    SearchableDropdownModule,
    SeparatorModule,
    SpacerModule,
    TabsModule,
    TextEditorModule,
    TextBoxModule,
    WindowModule,
    DateBoxModule,
    ReactiveCheckboxModule,
  ],
  declarations: [
    WorkViewerComponent,
    WorkViewerPanelAdminComponent,
    WorkViewerPanelAttachmentsComponent,
    WorkViewerPanelCompletionComponent,
    WorkViewerPanelContractorsComponent,
    WorkViewerPanelEquipmentComponent,
    WorkViewerPanelInstrumentsComponent,
    WorkViewerPanelLaborComponent,
    WorkViewerPanelMiscComponent,
    WorkViewerPanelPartsComponent,
    WorkViewerPanelTaskComponent,
    WorkViewerPanelToolsComponent,
    WorkViewerContractorListItemComponent,
    WorkViewerToolListItemComponent,
    WorkViewerInstrumentListItemComponent,
    WorkViewerLaborListItemComponent,
    WorkViewerMiscListItemComponent,
    WorkViewerPartListItemComponent,
    WorkViewerTabDetailsComponent,
    WorkViewerTabActivityComponent,
    WorkViewerTabMapComponent,
    WorkViewerSliderAdminComponent,
    WorkViewerSliderEquipmentHistoryComponent,
    WorkViewerSliderEquipmentDocumentsComponent,
    WorkViewerSliderInstructionsComponent,
    WorkViewerSliderChecklistComponent,
    WorkViewerSliderCompletionComponent,
    WorkViewerSliderInstrumentsComponent,
    WorkViewerSliderEquipmentDowntimeComponent,
    WorkViewerSliderLaborAddComponent,
    WorkViewerSliderLaborEditComponent,
    WorkViewerSliderLaborDeleteComponent,
    WorkViewerSliderPartAddComponent,
    WorkViewerSliderPartEditComponent,
    WorkViewerSliderPartDeleteComponent,
    WorkViewerSliderContractorAddComponent,
    WorkViewerSliderContractorEditComponent,
    WorkViewerSliderContractorDeleteComponent,
    WorkViewerSliderToolAddComponent,
    WorkViewerSliderToolEditComponent,
    WorkViewerSliderToolDeleteComponent,
    WorkViewerSliderMiscAddComponent,
    WorkViewerSliderMiscEditComponent,
    WorkViewerSliderMiscDeleteComponent,
    WorkViewerSliderMoveToReviewComponent,
    WorkViewerSliderMoveToHistoryComponent,
    WorkViewerSliderEquipmentComponent,
  ],
  exports: [WorkViewerComponent],
})
export class FeatureWorkViewerModule {}
