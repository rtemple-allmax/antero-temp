import { Supplier } from "@allmax-angular/antero-web/entities";
import { Nullable, TableData } from "@allmax-angular/shared/types";
import { Component, HostBinding, Input, OnDestroy, OnInit, inject } from "@angular/core";
import { SuppliersSectionStore } from '@allmax-angular/antero-web/state-management/suppliers-section-store';
import { combineLatest, Subscription } from "rxjs";
import { unsubscribe } from "@allmax-angular/shared/utils";
import { UIStoreService } from '@allmax-angular/antero-web/state-management/ui-store';
import { MasterDetailViewTypes } from "@allmax-angular/shared/ui/master-detail";
import { SuppliersController } from '@allmax-angular/antero-web/data-access/suppliers-controller';
import { StateManagementService } from "@allmax-angular/shared/features/state-management";
import { DataStores, UIStorePropNames } from "@allmax-angular/antero-web/types";

@Component({ template: '' })
export class SupplierPanelBaseComponent implements OnInit, OnDestroy {
  @Input() public title = '';

  @HostBinding('attr.data-id') public dataID = this.title;

  private subs: Subscription[] = [];
  
  public record: Nullable<Supplier>;

  public contactsData: Nullable<TableData>;
  public partsData: Nullable<TableData>;
  public eqData: Nullable<TableData>;

  public viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  public state = inject(StateManagementService);

  constructor(
    private supplierCtrl: SuppliersController,
    private supplierStore: SuppliersSectionStore,
    private uiStore: UIStoreService
  ) { }

  public ngOnInit(): void {
    const store = this.state.getStore(DataStores.UI);
    if (store) {
      this.subs.push(combineLatest([
        store.observe(UIStorePropNames.VIEW_TYPE),
        this.supplierStore.selection$
      ]).subscribe(([
        viewType,
        selection
      ]) => {
        this.viewType = viewType;
        this.record = selection;
        this.getContacts();
        this.getParts();
        this.getEquipment();
      }));
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async getContacts(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];

      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = [ 'name' ];
      } else {
        cols = [
          'name',
          'isPrimary',
          'address',
          'city',
          'stateOrProvince',
          'postalCode',
          'country'
        ]
      }
      this.contactsData = await this.supplierCtrl.getContacts(this.record.id, cols);
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.contactsData.colDef.findByDataField('name')?.updateOptions({ cellTemplate: 'cellTemplate' })
      }
    }
  }

  public async getParts(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];

      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = [ 'part.name' ];
      } else {
        cols = [
          'part.name',
          'part.description',
          'itemNumber',
          'lastReceivedDate',
          'lastReceivedCost',
          'part.stockingUnit'
        ]
      }
      this.partsData = await this.supplierCtrl.getParts(this.record.id, cols);
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.partsData?.colDef.findByDataField('part.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
      }
    }
  }

  public async getEquipment(): Promise<void> {
    if (this.record) {
      let cols: string[] = [];

      if (this.viewType === MasterDetailViewTypes.LIST) {
        cols = [ 'name' ];
      } else {
        cols = [
          'department.name',
          'name',
          'description',
          'datePurchased',
          'purchasePrice',
        ]
      }
      this.eqData = await this.supplierCtrl.getEquipment(this.record.id, cols);
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.eqData?.colDef.findByDataField('name')?.updateOptions({ cellTemplate: 'cellTemplate' })
      }
    }
  }
}  