import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWorkComponent } from './section-work/section-work.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { ViewSwitchModule } from '@allmax-angular/shared/ui/view-switch';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { SearchBoxModule } from '@allmax-angular/shared/ui/search-box';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { PopoverButtonModule } from '@allmax-angular/shared/ui/buttons/popover-button';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { MediaObjectModule } from '@allmax-angular/shared/ui/media-object';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { FormattedTextModule } from '@allmax-angular/shared/ui/formatted-text';
import { ChecklistModule } from '@allmax-angular/antero-web/ui/checklist';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { PopoverTextModule } from '@allmax-angular/shared/ui/popover-text';
import { MapModule } from '@allmax-angular/shared/ui/map';

import { WorkOrderListItemComponent } from './list-items/work-order-list-item/work-order-list-item.component';
import { WorkRequestListItemComponent } from './list-items/work-request-list-item/work-request-list-item.component';
import { WorkHistoryListItemComponent } from './list-items/work-history-list-item/work-history-list-item.component';
import { WorkTemplateListItemComponent } from './list-items/work-template-list-item/work-template-list-item.component';

import { WorkTemplateContentComponent } from './content/work-template-content/work-template-content.component';
import { WorkOrderContentComponent } from './content/work-order-content/work-order-content.component';
import { WorkRequestContentComponent } from './content/work-request-content/work-request-content.component';
import { WorkHistoryContentComponent } from './content/work-history-content/work-history-content.component';

import { WorkOrderTabDetailsComponent } from './content/work-order-content/tabs/work-order-tab-details/work-order-tab-details.component';
import { WorkOrderTabMapComponent } from './content/work-order-content/tabs/work-order-tab-map/work-order-tab-map.component';
import { WorkOrderTabActivityComponent } from './content/work-order-content/tabs/work-order-tab-activity/work-order-tab-activity.component';

import { WorkOrderPanelEquipmentComponent } from './content/work-order-content/tabs/work-order-tab-details/panels/work-order-panel-equipment/work-order-panel-equipment.component';
import { WorkOrderPanelTaskComponent } from './content/work-order-content/tabs/work-order-tab-details/panels/work-order-panel-task/work-order-panel-task.component';
import { WorkOrderPanelCompletionComponent } from './content/work-order-content/tabs/work-order-tab-details/panels/work-order-panel-completion/work-order-panel-completion.component';
import { WorkOrderPanelAdminComponent } from './content/work-order-content/tabs/work-order-tab-details/panels/work-order-panel-admin/work-order-panel-admin.component';
import { WorkOrderPanelPartsComponent } from './content/work-order-content/tabs/work-order-tab-details/panels/work-order-panel-parts/work-order-panel-parts.component';
import { WorkOrderPanelLaborComponent } from './content/work-order-content/tabs/work-order-tab-details/panels/work-order-panel-labor/work-order-panel-labor.component';
import { WorkOrderPanelContractorsComponent } from './content/work-order-content/tabs/work-order-tab-details/panels/work-order-panel-contractors/work-order-panel-contractors.component';
import { WorkOrderPanelToolsComponent } from './content/work-order-content/tabs/work-order-tab-details/panels/work-order-panel-tools/work-order-panel-tools.component';
import { WorkOrderPanelMiscComponent } from './content/work-order-content/tabs/work-order-tab-details/panels/work-order-panel-misc/work-order-panel-misc.component';

import { WorkOrderPartListItemComponent } from './content/work-order-content/tabs/work-order-tab-details/list-items/work-order-part-list-item/work-order-part-list-item.component';
import { WorkOrderLaborListItemComponent } from './content/work-order-content/tabs/work-order-tab-details/list-items/work-order-labor-list-item/work-order-labor-list-item.component';
import { WorkOrderContractorListItemComponent } from './content/work-order-content/tabs/work-order-tab-details/list-items/work-order-contractor-list-item/work-order-contractor-list-item.component';
import { WorkOrderEquipmentListItemComponent } from './content/work-order-content/tabs/work-order-tab-details/list-items/work-order-equipment-list-item/work-order-equipment-list-item.component';
import { WorkOrderMiscListItemComponent } from './content/work-order-content/tabs/work-order-tab-details/list-items/work-order-misc-list-item/work-order-misc-list-item.component';
import { WorkOrderActivityListItemComponent } from './content/work-order-content/tabs/work-order-tab-activity/list-items/work-order-activity-list-item/work-order-activity-list-item.component';
import { WorkOrderPanelAttachmentsComponent } from './content/work-order-content/tabs/work-order-tab-details/panels/work-order-panel-attachments/work-order-panel-attachments.component';
import { FileExplorerModule } from '@allmax-angular/shared/ui/file-explorer';
import { WorkOrderPanelInstrumentsComponent } from './content/work-order-content/tabs/work-order-tab-details/panels/work-order-panel-instruments/work-order-panel-instruments.component';
import { WorkOrderInstrumentListItemComponent } from './content/work-order-content/tabs/work-order-tab-details/list-items/work-order-instrument-list-item/work-order-instrument-list-item.component';
import { WorkHistoryTabDetailsComponent } from './content/work-history-content/tabs/work-history-tab-details/work-history-tab-details.component';
import { WorkHistoryTabMapComponent } from './content/work-history-content/tabs/work-history-tab-map/work-history-tab-map.component';
import { WorkHistoryTabActivityComponent } from './content/work-history-content/tabs/work-history-tab-activity/work-history-tab-activity.component';
import { WorkHistoryPanelAttachmentsComponent } from './content/work-history-content/tabs/work-history-tab-details/panels/work-history-panel-attachments/work-history-panel-attachments.component';
import { WorkHistoryPanelInformationComponent } from './content/work-history-content/tabs/work-history-tab-details/panels/work-history-panel-information/work-history-panel-information.component';
import { WorkHistoryPanelContractorsComponent } from './content/work-history-content/tabs/work-history-tab-details/panels/work-history-panel-contractors/work-history-panel-contractors.component';
import { WorkHistoryPanelEquipmentComponent } from './content/work-history-content/tabs/work-history-tab-details/panels/work-history-panel-equipment/work-history-panel-equipment.component';
import { WorkHistoryPanelInstrumentsComponent } from './content/work-history-content/tabs/work-history-tab-details/panels/work-history-panel-instruments/work-history-panel-instruments.component';
import { WorkHistoryPanelLaborComponent } from './content/work-history-content/tabs/work-history-tab-details/panels/work-history-panel-labor/work-history-panel-labor.component';
import { WorkHistoryPanelMiscComponent } from './content/work-history-content/tabs/work-history-tab-details/panels/work-history-panel-misc/work-history-panel-misc.component';
import { WorkHistoryPanelPartsComponent } from './content/work-history-content/tabs/work-history-tab-details/panels/work-history-panel-parts/work-history-panel-parts.component';
import { WorkHistoryPanelTaskComponent } from './content/work-history-content/tabs/work-history-tab-details/panels/work-history-panel-task/work-history-panel-task.component';
import { WorkHistoryPanelToolsComponent } from './content/work-history-content/tabs/work-history-tab-details/panels/work-history-panel-tools/work-history-panel-tools.component';
import { WorkHistoryInstrumentListItemComponent } from './content/work-history-content/tabs/work-history-tab-details/list-items/work-history-instrument-list-item/work-history-instrument-list-item.component';
import { WorkHistoryPartListItemComponent } from './content/work-history-content/tabs/work-history-tab-details/list-items/work-history-part-list-item/work-history-part-list-item.component';
import { WorkHistoryLaborListItemComponent } from './content/work-history-content/tabs/work-history-tab-details/list-items/work-history-labor-list-item/work-history-labor-list-item.component';
import { WorkHistoryContractorListItemComponent } from './content/work-history-content/tabs/work-history-tab-details/list-items/work-history-contractor-list-item/work-history-contractor-list-item.component';
import { WorkHistoryToolListItemComponent } from './content/work-history-content/tabs/work-history-tab-details/list-items/work-history-tool-list-item/work-history-tool-list-item.component';
import { WorkHistoryMiscListItemComponent } from './content/work-history-content/tabs/work-history-tab-details/list-items/work-history-misc-list-item/work-history-misc-list-item.component';
import { WorkTemplateTabDetailsComponent } from './content/work-template-content/tabs/work-template-tab-details/work-template-tab-details.component';
import { WorkTemplateTabMapComponent } from './content/work-template-content/tabs/work-template-tab-map/work-template-tab-map.component';
import { WorkTemplateTabActivityComponent } from './content/work-template-content/tabs/work-template-tab-activity/work-template-tab-activity.component';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { WorkTemplatePanelEquipmentComponent } from './content/work-template-content/tabs/work-template-tab-details/panels/work-template-panel-equipment/work-template-panel-equipment.component';
import { WorkTemplatePanelTaskComponent } from './content/work-template-content/tabs/work-template-tab-details/panels/work-template-panel-task/work-template-panel-task.component';
import { WorkTemplatePanelWorkOrdersComponent } from './content/work-template-content/tabs/work-template-tab-details/panels/work-template-panel-work-orders/work-template-panel-work-orders.component';
import { WorkTemplatePanelPartsComponent } from './content/work-template-content/tabs/work-template-tab-details/panels/work-template-panel-parts/work-template-panel-parts.component';
import { WorkTemplatePanelToolsComponent } from './content/work-template-content/tabs/work-template-tab-details/panels/work-template-panel-tools/work-template-panel-tools.component';
import { WorkTemplatePanelLaborComponent } from './content/work-template-content/tabs/work-template-tab-details/panels/work-template-panel-labor/work-template-panel-labor.component';
import { WorkTemplatePanelContractorsComponent } from './content/work-template-content/tabs/work-template-tab-details/panels/work-template-panel-contractors/work-template-panel-contractors.component';
import { WorkTemplatePanelMiscComponent } from './content/work-template-content/tabs/work-template-tab-details/panels/work-template-panel-misc/work-template-panel-misc.component';
import { WorkTemplatePartListItemComponent } from './content/work-template-content/tabs/work-template-tab-details/list-items/work-template-part-list-item/work-template-part-list-item.component';
import { WorkTemplateToolListItemComponent } from './content/work-template-content/tabs/work-template-tab-details/list-items/work-template-tool-list-item/work-template-tool-list-item.component';
import { WorkTemplateLaborListItemComponent } from './content/work-template-content/tabs/work-template-tab-details/list-items/work-template-labor-list-item/work-template-labor-list-item.component';
import { WorkTemplateWorkOrderListItemComponent } from './content/work-template-content/tabs/work-template-tab-details/list-items/work-template-work-order-list-item/work-template-work-order-list-item.component';
import { WorkTemplateContractorListItemComponent } from './content/work-template-content/tabs/work-template-tab-details/list-items/work-template-contractor-list-item/work-template-contractor-list-item.component';
import { WorkTemplateMiscListItemComponent } from './content/work-template-content/tabs/work-template-tab-details/list-items/work-template-misc-list-item/work-template-misc-list-item.component';
import { WorkTemplatePanelAttachmentsComponent } from './content/work-template-content/tabs/work-template-tab-details/panels/work-template-panel-attachments/work-template-panel-attachments.component';
import { WorkTemplatePanelSchedulingComponent } from './content/work-template-content/tabs/work-template-tab-details/panels/work-template-panel-scheduling/work-template-panel-scheduling.component';
import { FormsModule } from '@angular/forms';
import { ToggleModule } from '@allmax-angular/shared/ui/toggle';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    ChecklistModule,
    ComboButtonModule,
    CommonModule,
    DataTableModule,
    DropdownButtonModule,
    FileExplorerModule,
    FlexModule,
    FormattedTextModule,
    FormsModule,
    GridModule,
    GroupBoxModule,
    IconButtonModule,
    IconModule,
    LayoutPanelModule,
    MapModule,
    MasterDetailModule,
    MediaObjectModule,
    PopoverButtonModule,
    PopoverTextModule,
    ReadOnlyBoxModule,
    ScrollBoxModule,
    SearchBoxModule,
    SpacerModule,
    TabsModule,
    ToggleModule,
    ViewSwitchModule
  ],
  declarations: [
    SectionWorkComponent,
    WorkOrderListItemComponent,
    WorkRequestListItemComponent,
    WorkHistoryListItemComponent,
    WorkTemplateListItemComponent,
    WorkTemplateContentComponent,
    WorkOrderContentComponent,
    WorkRequestContentComponent,
    WorkHistoryContentComponent,
    WorkOrderTabDetailsComponent,
    WorkOrderTabMapComponent,
    WorkOrderTabActivityComponent,
    WorkOrderPanelEquipmentComponent,
    WorkOrderPanelTaskComponent,
    WorkOrderPanelCompletionComponent,
    WorkOrderPanelAdminComponent,
    WorkOrderPanelPartsComponent,
    WorkOrderPanelLaborComponent,
    WorkOrderPanelContractorsComponent,
    WorkOrderPanelToolsComponent,
    WorkOrderPanelMiscComponent,
    WorkOrderPartListItemComponent,
    WorkOrderLaborListItemComponent,
    WorkOrderContractorListItemComponent,
    WorkOrderEquipmentListItemComponent,
    WorkOrderMiscListItemComponent,
    WorkOrderActivityListItemComponent,
    WorkOrderPanelAttachmentsComponent,
    WorkOrderPanelInstrumentsComponent,
    WorkOrderInstrumentListItemComponent,
    WorkHistoryTabDetailsComponent,
    WorkHistoryTabMapComponent,
    WorkHistoryTabActivityComponent,
    WorkHistoryPanelAttachmentsComponent,
    WorkHistoryPanelInformationComponent,
    WorkHistoryPanelContractorsComponent,
    WorkHistoryPanelEquipmentComponent,
    WorkHistoryPanelInstrumentsComponent,
    WorkHistoryPanelLaborComponent,
    WorkHistoryPanelMiscComponent,
    WorkHistoryPanelPartsComponent,
    WorkHistoryPanelTaskComponent,
    WorkHistoryPanelToolsComponent,
    WorkHistoryInstrumentListItemComponent,
    WorkHistoryPartListItemComponent,
    WorkHistoryLaborListItemComponent,
    WorkHistoryContractorListItemComponent,
    WorkHistoryToolListItemComponent,
    WorkHistoryMiscListItemComponent,
    WorkTemplateTabDetailsComponent,
    WorkTemplateTabMapComponent,
    WorkTemplateTabActivityComponent,
    WorkTemplatePanelEquipmentComponent,
    WorkTemplatePanelTaskComponent,
    WorkTemplatePanelWorkOrdersComponent,
    WorkTemplatePanelPartsComponent,
    WorkTemplatePanelToolsComponent,
    WorkTemplatePanelLaborComponent,
    WorkTemplatePanelContractorsComponent,
    WorkTemplatePanelMiscComponent,
    WorkTemplatePartListItemComponent,
    WorkTemplateToolListItemComponent,
    WorkTemplateLaborListItemComponent,
    WorkTemplateWorkOrderListItemComponent,
    WorkTemplateContractorListItemComponent,
    WorkTemplateMiscListItemComponent,
    WorkTemplatePanelAttachmentsComponent,
    WorkTemplatePanelSchedulingComponent,
  ],
  exports: [SectionWorkComponent],
})
export class FeatureWorkManagementModule {}
