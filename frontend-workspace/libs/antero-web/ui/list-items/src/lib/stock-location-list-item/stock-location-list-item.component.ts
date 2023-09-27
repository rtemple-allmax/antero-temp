import { PartQuantity, PurchaseOrderPart } from '@allmax-angular/antero-web/entities';
import { Modals } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ListItemBaseComponent } from '../list-item.base';
import { PartListItemBaseComponent } from '../part-list-item.base';

interface PartOrderData {
  poNumber: Nullable<string>;
  unit: Nullable<string>;
  qty: number;
  supplier: Nullable<string>;
}

interface PartWorkOrderData {
  workOrderNumber: Nullable<string>;
  qty: number;
}

@Component({
  selector: 'ant-stock-location-list-item',
  templateUrl: './stock-location-list-item.component.html',
  styleUrls: ['./stock-location-list-item.component.scss'],
})
export class StockLocationListItemComponent extends PartListItemBaseComponent implements AfterViewInit {
  @Input() public record: Nullable<PartQuantity>;

  public contextMenuItems: any[] = [];

  public orderData: PartOrderData[] = [];
  public workOrderData: PartWorkOrderData[] = [];
  
  public ngAfterViewInit(): void {
    this.contextMenuItems = this.updateMenu();
    this.getPOParts();
    this.getWOAlloc();
  }

  public editHandler(): void {
    this.partStore.selectedStockLocation = this.record;
    this.antero.openModal(Modals.PART_QUANTITY_EDIT);
  }

  public deleteHandler(): void {
    this.partStore.selectedStockLocation = this.record;
    this.antero.openModal(Modals.PART_QUANTITY_DELETE);
  }

  public openPartsUsage(): void {
    this.partStore.selectedStockLocation = this.record;
    this.antero.openModal(Modals.TOOL_PARTS_USAGE);
  }

  public openTransferStock(): void {
    this.partStore.selectedStockLocation = this.record;
    this.antero.openModal(Modals.TOOL_TRANSFER_STOCK);
  }

  public updateMenu(): any[] {
    return [
      {
        text: 'Edit',
        icon: this.icons.editIcon,
        template: 'contextMenuItemTemplate',
        disabled: !this.record,
        danger: false,
        onItemClick: () => this.editHandler()
      },
      {
        text: 'Log Parts Usage',
        icon: this.icons.partsIcon,
        template: 'contextMenuItemTemplate',
        disabled: !this.record,
        beginGroup: true,
        danger: false,
        onItemClick: () => this.openPartsUsage()
      },
      {
        text: 'Transfer Stock',
        icon: this.icons.partsIcon,
        template: 'contextMenuItemTemplate',
        disabled: !this.record,
        danger: false,
        onItemClick: () => this.openTransferStock()
      },
      {
        text: 'Delete',
        icon: this.icons.deleteIcon,
        template: 'contextMenuItemTemplate',
        disabled: !this.record,
        beginGroup: true,
        danger: false,
        onItemClick: () => this.deleteHandler()
      },
    ];
  }

  public async getPOParts(): Promise<void> {
    if (this.record) {
      const poParts = await this.partsCtrl.getPOPartsByPartQuantity(this.record.id);
      console.log('poparts', poParts);
      poParts.forEach(async (x: PurchaseOrderPart) => {
        if (x.quantityOrdered > x.quantityReceived) {
          this.orderData.push({
            poNumber: x.purchaseOrder?.purchaseOrderNumber,
            unit: x.partQuantity?.part?.stockingUnit,
            qty: x.conversionFactor >= 1 ? x.quantityOrdered * x.conversionFactor : x.quantityOrdered,
            supplier: x.purchaseOrder?.supplier?.name
          })
        }
      })
    }
  }

  public async getWOAlloc(): Promise<void> {
    if (this.record) {
      this.workOrderData = await this.partsCtrl.getWOAllocationByPartQuantity(this.record.id);
    }
  }
}
