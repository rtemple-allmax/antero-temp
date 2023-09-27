import { Component, inject, AfterViewInit } from "@angular/core";
import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { OrderingController } from '@allmax-angular/antero-web/data-access/ordering-controller';
import { OrderingSectionStore } from '@allmax-angular/antero-web/state-management/ordering-section-store';
import { Nullable, TableData } from "@allmax-angular/shared/types";
import { PurchaseOrder } from "@allmax-angular/antero-web/entities";
import { combineLatest } from 'rxjs';
import { MasterDetailViewTypes } from "@allmax-angular/shared/ui/master-detail";
import { DataStores, UIStorePropNames } from "@allmax-angular/antero-web/types";

@Component({ template: '' })
export class OrderingPanelBaseComponent extends PanelBaseComponent implements AfterViewInit {
  public ctrl = inject(OrderingController);
  public orderingStore = inject(OrderingSectionStore);

  public record: Nullable<PurchaseOrder>;

  public partsData: Nullable<TableData>;
  public transactionData: Nullable<TableData>;

  public ngAfterViewInit(): void {
    const store = this.state.getStore(DataStores.UI);
    if (store) {
      this.subs.push(combineLatest([
        this.appStore.deviceType$,
        store.observe(UIStorePropNames.VIEW_TYPE),
        this.orderingStore.selection$
      ]).subscribe(([device, view, order]) => {
        this.viewType = view;
        this.record = order;
        this.getParts();
        this.getTransactions();
      }))
    }
  }

  public async getParts(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];
      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = ['partQuantity.part.name'];
      } else {
        cols = [
          'partQuantity.part.name',
          'partQuantity.part.description',
          'partQuantity.warehouse.name',
          'partQuantity.area.name',
          'itemNumber',
          'orderUnit',
          'unitCost',
          'quantityOrdered',
          'quantityReceived'
        ];
      }
      this.partsData = await this.ctrl.getParts(this.record.id, cols);
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.partsData?.colDef?.findByDataField('partQuantity.part.name')?.updateOptions({ cellTemplate: 'cellTemplate' });
      }
    }
  }

  public async getTransactions(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];
      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = ['transaction.transactionDate'];
      } else {
        cols = [
          'transaction.transactionDate',
          'transaction.invoiceNumber',
          'transaction.user.fullName',
          'transaction.costOfGoods',
        ];
      }
      this.transactionData = await this.ctrl.getTransactions(this.record.id, cols);
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.transactionData?.colDef?.findByDataField('transaction.transactionDate')?.updateOptions({ cellTemplate: 'cellTemplate' });
      }
    }
  }
}