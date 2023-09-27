import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderEquipmentModalComponent } from './work-order-equipment-modal/work-order-equipment-modal.component';
import { WorkOrderCompleteModalComponent } from './work-order-complete-modal/work-order-complete-modal.component';
import { WorkOrderMoveToHistoryModalComponent } from './work-order-move-to-history-modal/work-order-move-to-history-modal.component';
import { WorkOrderMoveToReviewModalComponent } from './work-order-move-to-review-modal/work-order-move-to-review-modal.component';
import { WorkOrderInstructionsModalComponent } from './work-order-instructions-modal/work-order-instructions-modal.component';
import { WorkOrderChecklistModalComponent } from './work-order-checklist-modal/work-order-checklist-modal.component';
import { WorkOrderInstrumentModalComponent } from './work-order-instrument-modal/work-order-instrument-modal.component';
import { WorkOrderPartModalComponent } from './work-order-part-modal/work-order-part-modal.component';
import { WorkOrderLaborModalComponent } from './work-order-labor-modal/work-order-labor-modal.component';
import { WorkOrderContractorModalComponent } from './work-order-contractor-modal/work-order-contractor-modal.component';
import { WorkOrderToolModalComponent } from './work-order-tool-modal/work-order-tool-modal.component';
import { WorkOrderMiscModalComponent } from './work-order-misc-modal/work-order-misc-modal.component';
// import { WorkOrderCompletionInfoModalComponent } from './work-order-completion-info-modal/work-order-completion-info-modal.component';
import { WorkOrderAdminInfoModalComponent } from './work-order-admin-info-modal/work-order-admin-info-modal.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { FormsModule } from '@angular/forms';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { CheckBoxModule } from '@allmax-angular/shared/ui/form-fields/check-box';
import { TextAreaModule } from '@allmax-angular/shared/ui/form-fields/text-area';
import { TableDropDownModule } from '@allmax-angular/shared/ui/form-fields/table-drop-down';
import { DxScrollViewModule } from 'devextreme-angular';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
// import { WorkOrderMapModalComponent } from './work-order-map-modal/work-order-map-modal.component';
import { TextEditorModule } from '@allmax-angular/shared/ui/text-editor';
import { ReadOnlyCheckBoxModule } from '@allmax-angular/shared/ui/read-only-check-box';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { AnteroSectionEquipmentModule } from '@allmax-angular/antero-web/sections/antero-section-equipment';
import { AvatarModule } from '@allmax-angular/shared/ui/avatar';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { WorkOrderModalsComponent } from './work-order-modals.component';
import { SelectBoxModule } from '@allmax-angular/shared/ui/form-fields/select-box';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { EquipmentPanelsModule } from '@allmax-angular/antero-web/ui/equipment-panels';
import { ImageModule } from '@allmax-angular/shared/ui/image';
import { WorkOrderEquipmentHistoryModalComponent } from './work-order-equipment-history-modal/work-order-equipment-history-modal.component';
import { ChecklistModule } from '@allmax-angular/antero-web/ui/checklist';
import { WorkOrderEditMultipleModalComponent } from './work-order-edit-multiple-modal/work-order-edit-multiple-modal.component';
import { WorkListsModalComponent } from './work-lists-modal/work-lists-modal.component';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { WorkOrderPanelsModule } from '@allmax-angular/antero-web/ui/work-order-panels';
import { AccordionModule } from '@allmax-angular/shared/ui/accordion';
import { WorkOrderPartFormsModule } from '@allmax-angular/antero-web/ui/forms/work-order-part-forms';

@NgModule({
  imports: [
    CommonModule,
    ComboButtonModule,
    CheckBoxModule,
    DateBoxModule,
    DxScrollViewModule,
    AccordionModule,
    FlexModule,
    FormsModule,
    GridModule,
    GroupBoxModule,
    IconButtonModule,
    ImageModule,
    TextEditorModule,
    LabelButtonModule,
    LinkButtonModule,
    ModalWindowModule,
    NumberBoxModule,
    ReadOnlyCheckBoxModule,
    SelectBoxModule,
    SpacerModule,
    TableDropDownModule,
    TextAreaModule,
    TextBoxModule,
    AnteroSectionEquipmentModule,
    AvatarModule,
    TableDropDownModule,
    SearchableDropdownModule,
    EquipmentPanelsModule,
    WorkOrderPanelsModule,
    ChecklistModule,
    TabsModule,
    WorkOrderPartFormsModule
  ],
  declarations: [
    WorkOrderModalsComponent,
    WorkOrderEquipmentModalComponent,
    WorkOrderCompleteModalComponent,
    WorkOrderMoveToHistoryModalComponent,
    WorkOrderMoveToReviewModalComponent,
    WorkOrderInstructionsModalComponent,
    WorkOrderChecklistModalComponent,
    WorkOrderInstrumentModalComponent,
    WorkOrderPartModalComponent,
    WorkOrderLaborModalComponent,
    WorkOrderContractorModalComponent,
    WorkOrderToolModalComponent,
    WorkOrderMiscModalComponent,
    // WorkOrderCompletionInfoModalComponent,
    WorkOrderAdminInfoModalComponent,
    // WorkOrderMapModalComponent,
    WorkOrderEquipmentHistoryModalComponent,
    WorkOrderEditMultipleModalComponent,
    WorkListsModalComponent,
  ],
  exports: [ WorkOrderModalsComponent ],
})
export class WorkOrderModalsModule {}
