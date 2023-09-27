import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ListItem, Nullable, ObservableBinding } from '@allmax-angular/shared/types'
import { TrackingTypes, trackingTypesToLabelsMap } from "@allmax-angular/antero-web/types";
import { Area, EquipmentType, Part, ProductGroup, ProductType, Supplier, Warehouse } from "@allmax-angular/antero-web/entities";
import { AnteroService } from "@allmax-angular/antero-web/services/antero-service";
import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { Subscription } from "rxjs";
import { unsubscribe } from "@allmax-angular/shared/utils";
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { allIcons } from "@allmax-angular/shared/ui/icons";

@Component({ template: '' })
export class PartFormBaseComponent implements OnInit, OnDestroy {
  protected subs: Subscription[] = [];

  public source: Nullable<Part>;
  public icons = { ...allIcons };

  public typeData = [
    trackingTypesToLabelsMap.get(TrackingTypes.TRACKED),
    trackingTypesToLabelsMap.get(TrackingTypes.UNTRACKED),
    trackingTypesToLabelsMap.get(TrackingTypes.TOOL)
  ];

  public productGroups: ProductGroup[] = [];
  public productTypes: ProductType[] = [];
  public equipmentTypes: EquipmentType[] = [];
  public warehouses: Warehouse[] = [];
  public areas: Area[] = []; 

  public trackingTypeBinding = new ObservableBinding<string>();
  public nameBinding = new ObservableBinding<string>();
  public descriptionBinding = new ObservableBinding<string>();
  public warehouseBinding = new ObservableBinding<Warehouse>();
  public areaBinding = new ObservableBinding<Area>();
  public unitCostBinding = new ObservableBinding<number>();
  public quantityBinding = new ObservableBinding<number>();
  public stockingUnitBinding = new ObservableBinding<string>();
  public maxQuantityBinding = new ObservableBinding<number>();
  public minQuantityBinding = new ObservableBinding<number>();
  public supplierBinding = new ObservableBinding<Supplier>();
  public productGroupBinding = new ObservableBinding<ProductGroup>();
  public productTypeBinding = new ObservableBinding<ProductType>();
  public equipmentTypeBinding = new ObservableBinding<EquipmentType>();
  public notesBinding = new ObservableBinding<string>();
  public orderInBulkBinding = new ObservableBinding<boolean>(false);
  public bulkUnitBinding = new ObservableBinding<string>();
  public conversionRateBinding = new ObservableBinding<number>();
  public includeStockBinding = new ObservableBinding<boolean>(true);
  public includeSuppliersBinding = new ObservableBinding<boolean>(true);

  public bulkOrderingEnabled: Nullable<boolean> = false;
  public areasEnabled = false;
  public stockLocationsEnabled = false;

  constructor(
    protected antero: AnteroService,
    protected partsCtrl: PartsControllerService,
    protected partsStore: PartStoreService,
    protected cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.warehouseBinding.value$.subscribe(async (x) => {
      if (x && 'id' in x) {
        this.areasEnabled = true;
        this.areas = await this.partsCtrl.getAreasByWarehouse(x.id)
      } else {
        this.areas = [];
        this.areasEnabled = false;
        this.areaBinding.reset();
      }
    }))
    this.subs.push(this.orderInBulkBinding.value$.subscribe(x => this.bulkOrderingEnabled = x));
    this.subs.push(this.includeStockBinding.value$.subscribe(x => this.stockLocationsEnabled = !x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
    this.cdr.detach();
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public async getProductGroups(): Promise<void> {
    this.productGroups = await this.partsCtrl.getProductGroups();
  }

  public async getProductTypes(): Promise<void> {
    this.productTypes = await this.partsCtrl.getProductTypes();
  }

  public async getEquipmentTypes(): Promise<void> {
    this.productTypes = await this.partsCtrl.getEquipmentTypes();
  }

  public async getWarehouses(): Promise<void> {
    this.warehouses = await this.partsCtrl.getWarehouses();
  }

  public populate(retainName: boolean = true): void {
    if (!this.source) { return; }
    if (retainName) {
      this.nameBinding.set(this.source.name);
    }
    this.trackingTypeBinding.set(trackingTypesToLabelsMap.get(this.source.trackingType));
    this.descriptionBinding.set(this.source.description);
    this.stockingUnitBinding.set(this.source.stockingUnit);
    this.productGroupBinding.set(this.source.productGroup);
    this.productTypeBinding.set(this.source.productType);
    this.equipmentTypeBinding.set(this.source.equipmentType);
    this.notesBinding.set(this.source.notes);
    this.orderInBulkBinding.set(this.source.orderInBulk);
    this.bulkUnitBinding.set(this.source.bulkUnit);
    this.conversionRateBinding.set(this.source.conversionFactor);
    this.cdr.detectChanges();
  }

  public submit(): void {
    console.log()
  }
}