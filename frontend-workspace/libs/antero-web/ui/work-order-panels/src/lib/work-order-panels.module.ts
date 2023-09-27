import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderLaborPanelComponent } from './work-order-labor-panel/work-order-labor-panel.component';
import { WorkOrderPartsPanelComponent } from './work-order-parts-panel/work-order-parts-panel.component';
import { WorkOrderContractorsPanelComponent } from './work-order-contractors-panel/work-order-contractors-panel.component';
import { WorkOrderToolsPanelComponent } from './work-order-tools-panel/work-order-tools-panel.component';
import { WorkOrderMiscPanelComponent } from './work-order-misc-panel/work-order-misc-panel.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { DxScrollViewModule } from 'devextreme-angular';
import { CrudToolbarModule } from '@allmax-angular/shared/ui/crud-toolbar';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
// import { WorkOrderTaskPanelComponent } from './work-order-task-panel/work-order-task-panel.component';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { FormattedTextModule } from '@allmax-angular/shared/ui/formatted-text';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
// import { WorkOrderInstrumentsPanelComponent } from './work-order-instruments-panel/work-order-instruments-panel.component';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { WorkOrderCompletionPanelComponent } from './work-order-completion-panel/work-order-completion-panel.component';
import { WorkOrderAdminPanelComponent } from './work-order-admin-panel/work-order-admin-panel.component';
import { CardModule } from '@allmax-angular/shared/ui/card';
// import { WorkOrderMapPanelComponent } from './work-order-map-panel/work-order-map-panel.component';
import { WorkOrderAuditPanelComponent } from './work-order-audit-panel/work-order-audit-panel.component';
import { CheckBoxModule } from '@allmax-angular/shared/ui/form-fields/check-box';
import { FormsModule } from '@angular/forms';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { SafeUrlModule } from '@allmax-angular/shared/pipes/safe-url';
import { ImageModule } from '@allmax-angular/shared/ui/image';
import { WorkOrderDetailsPanelComponent } from './work-order-details-panel/work-order-details-panel.component';
import { MediaObjectModule } from '@allmax-angular/shared/ui/media-object';
import { WorkOrderDocumentsPanelComponent } from './work-order-documents-panel/work-order-documents-panel.component';
import { ChecklistModule } from '@allmax-angular/antero-web/ui/checklist';
import { LaborAccountSetupPanelComponent } from './labor-account-setup-panel/labor-account-setup-panel.component';
import { LaborClassSetupPanelComponent } from './labor-class-setup-panel/labor-class-setup-panel.component';
import { LaborTypeSetupPanelComponent } from './labor-type-setup-panel/labor-type-setup-panel.component';
import { WorkPrioritySetupPanelComponent } from './work-priority-setup-panel/work-priority-setup-panel.component';
import { WorkStatusSetupPanelComponent } from './work-status-setup-panel/work-status-setup-panel.component';
import { WorkTypeSetupPanelComponent } from './work-type-setup-panel/work-type-setup-panel.component';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { SearchableTableDropdownModule } from '@allmax-angular/shared/ui/searchable-table-dropdown';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { FileExplorerModule } from '@allmax-angular/shared/ui/file-explorer';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { SingleEntryFormsModule } from '@allmax-angular/shared/ui/single-entry-forms';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';
import { LaborClassFormsModule } from '@allmax-angular/antero-web/ui/forms/labor-class-forms';
import { LaborTypeFormsModule } from '@allmax-angular/antero-web/ui/forms/labor-type-forms';
import { ColorBoxModule } from '@allmax-angular/shared/ui/form-fields/color-box';
import { WorkStatusFormsModule } from '@allmax-angular/antero-web/ui/forms/work-status-forms';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';

@NgModule({
  imports: [
    CardModule,
    CheckBoxModule,
    ComboButtonModule,
    CommonModule,
    ConfirmationModule,
    CrudToolbarModule,
    DataTableModule,
    DateBoxModule,
    DxScrollViewModule,
    FileExplorerModule,
    FlexModule,
    FormattedTextModule,
    FormsModule,
    GridModule,
    GroupBoxModule,
    IconButtonModule,
    LinkButtonModule,
    LabelButtonModule,
    NumberBoxModule,
    ReadOnlyBoxModule,
    SafeUrlModule,
    SearchableDropdownModule,
    SearchableTableDropdownModule,
    SpacerModule,
    ImageModule,
    MediaObjectModule,
    ChecklistModule,
    TextBoxModule,
    DropdownButtonModule,
    SingleEntryFormsModule,
    SeparatorModule,
    LaborClassFormsModule,
    LaborTypeFormsModule,
    WorkStatusFormsModule,
    LayoutPanelModule
  ],
  declarations: [
    WorkOrderLaborPanelComponent,
    WorkOrderPartsPanelComponent,
    WorkOrderContractorsPanelComponent,
    WorkOrderToolsPanelComponent,
    WorkOrderMiscPanelComponent,
    WorkOrderDetailsPanelComponent,
    // WorkOrderTaskPanelComponent,
    // WorkOrderInstrumentsPanelComponent,
    WorkOrderCompletionPanelComponent,
    WorkOrderAdminPanelComponent,
    // WorkOrderMapPanelComponent,
    WorkOrderAuditPanelComponent,
    WorkOrderDocumentsPanelComponent,
    LaborAccountSetupPanelComponent,
    LaborClassSetupPanelComponent,
    LaborTypeSetupPanelComponent,
    WorkPrioritySetupPanelComponent,
    WorkStatusSetupPanelComponent,
    WorkTypeSetupPanelComponent,
  ],
  exports: [
    WorkOrderLaborPanelComponent,
    WorkOrderPartsPanelComponent,
    WorkOrderContractorsPanelComponent,
    WorkOrderToolsPanelComponent,
    WorkOrderMiscPanelComponent,
    WorkOrderDetailsPanelComponent,
    // WorkOrderTaskPanelComponent,
    // WorkOrderInstrumentsPanelComponent,
    WorkOrderCompletionPanelComponent,
    WorkOrderAdminPanelComponent,
    // WorkOrderMapPanelComponent,
    WorkOrderAuditPanelComponent,
    WorkOrderDocumentsPanelComponent,
    LaborAccountSetupPanelComponent,
    LaborClassSetupPanelComponent,
    LaborTypeSetupPanelComponent,
    WorkPrioritySetupPanelComponent,
    WorkStatusSetupPanelComponent,
    WorkTypeSetupPanelComponent,
  ],
})
export class WorkOrderPanelsModule {}
