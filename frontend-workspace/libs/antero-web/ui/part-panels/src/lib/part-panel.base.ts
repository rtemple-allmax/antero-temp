import { PartsControllerService } from "@allmax-angular/antero-web/data-access/parts-controller";
import { Part } from "@allmax-angular/antero-web/entities";
import { AnteroService } from "@allmax-angular/antero-web/services/antero-service";
import { PartStoreService } from "@allmax-angular/antero-web/state-management/part-store";
import { UIStoreService } from "@allmax-angular/antero-web/state-management/ui-store";
import { DataStores, UIStorePropNames, trackingTypesToLabelsMap } from "@allmax-angular/antero-web/types";
import { StateManagementService } from "@allmax-angular/shared/features/state-management";
import { Nullable, TableData } from "@allmax-angular/shared/types";
import { MasterDetailViewTypes } from "@allmax-angular/shared/ui/master-detail";
import { unsubscribe } from "@allmax-angular/shared/utils";
import { Component, OnDestroy, Input, HostBinding, OnInit, inject } from "@angular/core";
import { Subscription, combineLatest } from "rxjs";

@Component({ template: '' })
export class PartsPanelBaseComponent implements OnInit, OnDestroy {
  @Input() public title = '';

  @HostBinding('attr.data-id') public dataID = this.title;

  public record: Nullable<Part>;

  public stockData: Nullable<TableData>;
  public supplierData: Nullable<TableData>;
  public equipmentData: Nullable<TableData>
  public orderData: Nullable<TableData>;
  public transferData: Nullable<TableData>;
  public workHistoryData: Nullable<TableData>;
  public auditData: Nullable<TableData>;

  public viewType = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  public subs: Subscription[] = [];

  public state = inject(StateManagementService);

  public get trackingType(): string {
    if (this.record) {
      return trackingTypesToLabelsMap.get(this.record.trackingType) || '';
    } 
    return '';
  }

  constructor(
    protected antero: AnteroService,
    protected ctrl: PartsControllerService,
    protected partsStore: PartStoreService,
    protected uiStore: UIStoreService
  ) { }

  public ngOnInit(): void {
    const store = this.state.getStore(DataStores.UI);
    if (store) {
      this.subs.push(combineLatest([
        store.observe(UIStorePropNames.VIEW_TYPE),
        this.partsStore.selection$
      ]).subscribe(([viewType, record]) => {
        this.record = record;
        this.viewType = viewType;
        this.getStockLocations();
        this.getSuppliers();
        this.getEquipment();
        this.getOrderHistory();
        this.getTransferHistory();
        this.getWorkHistory();
        this.getAuditData();
      }))
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }
  
  public async getStockLocations(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];
      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = [ 'warehouse.name' ];
      } else {
        cols = [
          'warehouse.name',
          'area.name',
          'unitCost',
          'currentQuantity',
          'minimumQuantity',
          'maximumQuantity',
          'totalOnOrder',
          'totalOnWorkOrder'
        ];
      }
      const data = await this.ctrl.getStockLocationsByID(this.record, cols);
      if (data) {
        if (this.viewType === MasterDetailViewTypes.LIST) {
          data.colDef.findByDataField('warehouse.name')?.updateOptions({ cellTemplate: 'cellTemplate' });
        }
        this.stockData = data; 
      }
    }
  }

  public async getSuppliers(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];
      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = [ 'supplier.name' ];
      } else {
        cols = [
          'isPrimary',
          'supplier.name',
          'itemNumber',
          'itemDescription',
          'lastReceivedDate',
          'lastReceivedCost'
        ];
      }
      const data = await this.ctrl.getSupplierParts(this.record, cols);
      if (data) {
        if (this.viewType === MasterDetailViewTypes.LIST) {
          data.colDef.findByDataField('supplier.name')?.updateOptions({ cellTemplate: 'cellTemplate' });
        }
        this.supplierData = data; 
      }
    }
  }

  public async getEquipment(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];
      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = [ 'equipment.name' ];
      } else {
        cols = [
          'equipment.name',
          'equipment.description',
          'equipment.department.name',
          'equipment.location.name',
          'comment'
        ];
      }
      const data = await this.ctrl.getEquipmentParts(this.record, cols);
      if (data) {
        if (this.viewType === MasterDetailViewTypes.LIST) {
          data.colDef.findByDataField('equipment.name')?.updateOptions({ cellTemplate: 'cellTemplate' });
        }
        this.equipmentData = data; 
      }
    }
  }
  
  public async getOrderHistory(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];
      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = [ 'purchaseOrder.orderDate' ];
      } else {
        cols = [
          'purchaseOrder.orderDate',
          'purchaseOrder.purchaseOrderNumber',
          'purchaseOrder.requisitionNumber',
          'purchaseOrder.supplier.name'
        ];
      }
      const data = await this.ctrl.getOrderHistoryByID(this.record.id, cols);
      if (data) {
        if (this.viewType === MasterDetailViewTypes.LIST) {
          data.colDef.findByDataField('purchaseOrder.orderDate')?.updateOptions({ cellTemplate: 'cellTemplate' });
        }
        this.orderData = data; 
      }
    }
  }

  public async getTransferHistory(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];
      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = [ 'dateTransferred' ];
      } else {
        cols = [
          'dateTransferred',
          'quantity',
          'sourceWarehouse',
          'sourceArea',
          'destinationWarehouse',
          'destinationArea',
          'units',
          'unitCost',
          'userName',
          'comment'
        ];
      }
      const data = await this.ctrl.getTransferHistoryByID(this.record.id, cols);
      if (data) {
        if (this.viewType === MasterDetailViewTypes.LIST) {
          data.colDef.findByDataField('dateTransferred')?.updateOptions({ cellTemplate: 'cellTemplate' });
        }
        this.transferData = data; 
      }
    }
  }

  public async getWorkHistory(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];
      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = [ 'workHistory.workOrderNumber' ];
      } else {
        cols = [
          'workHistory.workOrderNumber',
          'workHistory.dateCompleted',
          'workHistory.equipment.name',
          'workHistory.task',
          'workHistory.worktype',
          'workHistory.workPriority'
        ];
      }
      const data = await this.ctrl.getWorkHistoryByID(this.record.id, cols);
      if (data) {
        if (this.viewType === MasterDetailViewTypes.LIST) {
          data.colDef.findByDataField('workHistory.workOrderNumber')?.updateOptions({ cellTemplate: 'cellTemplate' });
        }
        this.workHistoryData = data; 
      }
    }
  }

  public async getAuditData(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];
      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = [ 'dateTimeRecorded' ];
      } else {
        cols = [
          'dateTimeRecorded',
          'eventDateTime',
          'eventSource',
          'partName',
          'partDescription',
          'warehouseName',
          'areaName',
          'quantityChange',
          'userName',
          'description',
        ];
      }
      const data = await this.ctrl.getAudit(this.record.id, cols);
      if (data) {
        if (this.viewType === MasterDetailViewTypes.LIST) {
          data.colDef.findByDataField('dateTimeRecorded')?.updateOptions({ cellTemplate: 'cellTemplate' });
        }
        this.auditData = data; 
      }
    }
  }
}