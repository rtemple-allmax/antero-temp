import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { CreateWorkOrderToolComponent } from './create-work-order-tool/create-work-order-tool.component';
import { EnterReadingsToolComponent } from './enter-readings-tool/enter-readings-tool.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { SearchableTableDropdownModule } from '@allmax-angular/shared/ui/searchable-table-dropdown';
import { FormsModule } from '@angular/forms';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { SearchableDropdownModule } from '@allmax-angular/shared/ui/searchable-dropdown';
import { WorkOrderPanelsModule } from '@allmax-angular/antero-web/ui/work-order-panels';
import { TextEditorModule } from '@allmax-angular/shared/ui/text-editor';
import { ChecklistEditorModule } from '@allmax-angular/shared/ui/checklist-editor';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { CheckBoxModule } from '@allmax-angular/shared/ui/form-fields/check-box';
import { CriticalityRankingToolComponent } from './criticality-ranking-tool/criticality-ranking-tool.component';
import { DxPopoverModule } from 'devextreme-angular';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';
import { LogPartUsageToolComponent } from './log-part-usage-tool/log-part-usage-tool.component';
import { AdjustInventoryToolComponent } from './adjust-inventory-tool/adjust-inventory-tool.component';
import { TransferStockToolComponent } from './transfer-stock-tool/transfer-stock-tool.component';
import { ReceivePartsToolComponent } from './receive-parts-tool/receive-parts-tool.component';

@NgModule({
  imports: [
    CardModule,
    ChecklistEditorModule,
    CheckBoxModule,
    ComboButtonModule,
    CommonModule,
    DateBoxModule,
    IconButtonModule,
    FlexModule,
    FormsModule,
    GridModule,
    ModalWindowModule,
    NumberBoxModule,
    ReadOnlyBoxModule,
    ScrollBoxModule,
    SearchableDropdownModule,
    SearchableTableDropdownModule,
    SpacerModule,
    TabsModule,
    WorkOrderPanelsModule,
    TextEditorModule,
    DxPopoverModule,
    SeparatorModule,
  ],
  declarations: [
    ToolsComponent,
    CreateWorkOrderToolComponent,
    EnterReadingsToolComponent,
    CriticalityRankingToolComponent,
    LogPartUsageToolComponent,
    AdjustInventoryToolComponent,
    TransferStockToolComponent,
    ReceivePartsToolComponent,
  ],
  exports: [
    ToolsComponent,
    CriticalityRankingToolComponent,
    LogPartUsageToolComponent,
    AdjustInventoryToolComponent,
    TransferStockToolComponent,
    ReceivePartsToolComponent,
  ],
})
export class ToolsModule {}
