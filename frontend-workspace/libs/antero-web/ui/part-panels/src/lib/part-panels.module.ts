import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartDetailPanelComponent } from './part-detail-panel/part-detail-panel.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { AvatarModule } from '@allmax-angular/shared/ui/avatar';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { PartQuantityCardModule } from '@allmax-angular/antero-web/ui/cards/part-quantity-card';
import { ToggleModule } from '@allmax-angular/shared/ui/toggle';
import { FormsModule } from '@angular/forms';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { PartStockPanelComponent } from './part-stock-panel/part-stock-panel.component';
import { PartsSuppliersPanelComponent } from './parts-suppliers-panel/parts-suppliers-panel.component';
import { PartsEquipmentPanelComponent } from './parts-equipment-panel/parts-equipment-panel.component';
import { PartsOrderHistoryPanelComponent } from './parts-order-history-panel/parts-order-history-panel.component';
import { PartsTransferHistoryPanelComponent } from './parts-transfer-history-panel/parts-transfer-history-panel.component';
import { PartsWorkHistoryPanelComponent } from './parts-work-history-panel/parts-work-history-panel.component';
import { PartsActivityPanelComponent } from './parts-activity-panel/parts-activity-panel.component';
import { PartsImagesPanelComponent } from './parts-images-panel/parts-images-panel.component';
import { ListItemsModule } from '@allmax-angular/antero-web/ui/list-items';
import { EquipmentListItemsModule } from '@allmax-angular/antero-web/ui/equipment-list-items';
import { PopoverTextModule } from '@allmax-angular/shared/ui/popover-text';
import { FilePickerModule } from '@allmax-angular/shared/ui/file-picker';
import { DxScrollViewModule } from 'devextreme-angular';
import { DragAndDropModule } from '@allmax-angular/shared/ui/drag-and-drop';
import { PortraitModule } from '@allmax-angular/shared/ui/portrait';

@NgModule({
  imports: [
    AvatarModule,
    CommonModule,
    DataTableModule,
    DragAndDropModule,
    DxScrollViewModule,
    FilePickerModule,
    FlexModule,
    FormsModule,
    GridModule,
    GroupBoxModule,
    PartQuantityCardModule,
    PortraitModule,
    ReadOnlyBoxModule,
    SpacerModule,
    LayoutPanelModule,
    ToggleModule,
    ListItemsModule,
    EquipmentListItemsModule,
    PopoverTextModule
  ],
  declarations: [
    PartDetailPanelComponent,
    PartStockPanelComponent,
    PartsSuppliersPanelComponent,
    PartsEquipmentPanelComponent,
    PartsOrderHistoryPanelComponent,
    PartsTransferHistoryPanelComponent,
    PartsWorkHistoryPanelComponent,
    PartsActivityPanelComponent,
    PartsImagesPanelComponent,
  ],
  exports: [
    PartDetailPanelComponent,
    PartStockPanelComponent,
    PartsSuppliersPanelComponent,
    PartsEquipmentPanelComponent,
    PartsOrderHistoryPanelComponent,
    PartsTransferHistoryPanelComponent,
    PartsWorkHistoryPanelComponent,
    PartsActivityPanelComponent,
    PartsImagesPanelComponent,
  ],
})
export class PartPanelsModule {}
