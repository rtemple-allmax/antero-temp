import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { FormattedTextModule } from '@allmax-angular/shared/ui/formatted-text';
import { PopoverButtonModule } from '@allmax-angular/shared/ui/buttons/popover-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { WorkOrderListItemComponent } from './work-order-list-item/work-order-list-item.component';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { WorkHistoryListItemComponent } from './work-history-list-item/work-history-list-item.component';
import { ReadingListItemComponent } from './reading-list-item/reading-list-item.component';
import { StockLocationListItemComponent } from './stock-location-list-item/stock-location-list-item.component';
import { PopoverTextModule } from '@allmax-angular/shared/ui/popover-text';
import { SupplierPartListItemComponent } from './supplier-part-list-item/supplier-part-list-item.component';
import { PurchaseOrderPartListItemComponent } from './purchase-order-part-list-item/purchase-order-part-list-item.component';
import { PartTransferListItemComponent } from './part-transfer-list-item/part-transfer-list-item.component';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { WorkHistoryPartListItemComponent } from './work-history-part-list-item/work-history-part-list-item.component';
import { PartAuditListItemComponent } from './part-audit-list-item/part-audit-list-item.component';
import { SupplierContactListItemComponent } from './supplier-contact-list-item/supplier-contact-list-item.component';
import { ContactBoxModule } from '@allmax-angular/shared/ui/contact-box';
import { SupplierEquipmentListItemComponent } from './supplier-equipment-list-item/supplier-equipment-list-item.component';
import { MediaObjectModule } from '@allmax-angular/shared/ui/media-object';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';
import { TransactionListItemComponent } from './transaction-list-item/transaction-list-item.component';
import { WorkOrderPartListItemComponent } from './work-order-part-list-item/work-order-part-list-item.component';
import { WorkOrderLaborListItemComponent } from './work-order-labor-list-item/work-order-labor-list-item.component';
import { WorkOrderContractorListItemComponent } from './work-order-contractor-list-item/work-order-contractor-list-item.component';
import { WorkOrderEquipmentListItemComponent } from './work-order-equipment-list-item/work-order-equipment-list-item.component';
import { WorkOrderMiscListItemComponent } from './work-order-misc-list-item/work-order-misc-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownButtonModule,
    FlexModule,
    FormattedTextModule,
    GridModule,
    IconButtonModule,
    PopoverButtonModule,
    PopoverTextModule,
    IconModule,
    ContactBoxModule,
    MediaObjectModule,
    SeparatorModule,
  ],
  declarations: [
    TaskListItemComponent,
    WorkOrderListItemComponent,
    WorkHistoryListItemComponent,
    ReadingListItemComponent,
    StockLocationListItemComponent,
    SupplierPartListItemComponent,
    PurchaseOrderPartListItemComponent,
    PartTransferListItemComponent,
    WorkHistoryPartListItemComponent,
    PartAuditListItemComponent,
    SupplierContactListItemComponent,
    SupplierEquipmentListItemComponent,
    TransactionListItemComponent,
    WorkOrderPartListItemComponent,
    WorkOrderLaborListItemComponent,
    WorkOrderContractorListItemComponent,
    WorkOrderEquipmentListItemComponent,
    WorkOrderMiscListItemComponent,
  ],
  exports: [
    TaskListItemComponent,
    WorkOrderListItemComponent,
    WorkHistoryListItemComponent,
    ReadingListItemComponent,
    StockLocationListItemComponent,
    SupplierPartListItemComponent,
    PurchaseOrderPartListItemComponent,
    PartTransferListItemComponent,
    WorkHistoryPartListItemComponent,
    PartAuditListItemComponent,
    SupplierContactListItemComponent,
    SupplierEquipmentListItemComponent,
    TransactionListItemComponent,
    WorkOrderPartListItemComponent,
    WorkOrderLaborListItemComponent,
    WorkOrderContractorListItemComponent,
    WorkOrderEquipmentListItemComponent,
    WorkOrderMiscListItemComponent,
  ],
})
export class ListItemsModule {}
