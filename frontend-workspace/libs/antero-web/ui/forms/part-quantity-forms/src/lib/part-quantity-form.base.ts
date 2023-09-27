import { Area, Part, PartQuantity, Warehouse } from "@allmax-angular/antero-web/entities";
import { Nullable, ObservableBinding } from "@allmax-angular/shared/types";
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs";
import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { unsubscribe } from "@allmax-angular/shared/utils";
import { AnteroService } from "@allmax-angular/antero-web/services/antero-service";
import { allIcons } from "@allmax-angular/shared/ui/icons";
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { AnteroStoreService } from "@allmax-angular/antero-web/state-management/antero-store";

@Component({ template: '' })
export class PartQuantityFormBaseComponent implements OnInit, OnDestroy {
  protected subs: Subscription[] = [];

  public record: Nullable<Part>;
  public source: Nullable<PartQuantity>;
  public icons = { ...allIcons };

  public warehouses: Warehouse[] = [];
  public areas: Area[] = [];

  public warehouseBinding = new ObservableBinding<Warehouse>(null);
  public areaBinding = new ObservableBinding<Area>(null);
  public unitCostBinding = new ObservableBinding<number>();
  public qtyBinding = new ObservableBinding<number>();
  public minBinding = new ObservableBinding<number>();
  public maxBinding = new ObservableBinding<number>();

  public areasEnabled = false;

  constructor(
    protected antero: AnteroService,
    protected cdr: ChangeDetectorRef, 
    private partCtrl: PartsControllerService,
    protected partsStore: PartStoreService,
    private appStore: AnteroStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.warehouseBinding.value$.subscribe((x) => {
      if (x) {
        this.getAreas(x);
        this.areasEnabled = true;
      } else {
        this.areas = [];
        this.areasEnabled = false;
        this.areaBinding.reset();
      }
    }))
    this.subs.push(this.partsStore.selection$.subscribe(x => this.record = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
    this.cdr.detach();
  }

  public populate(): void {
    if (!this.source) { return; }
    this.warehouseBinding.set(this.source.warehouse);
    this.areaBinding.set(this.source.area);
    this.unitCostBinding.set(this.source.unitCost);
    this.qtyBinding.set(this.source.currentQuantity);
    this.minBinding.set(this.source.minimumQuantity);
    this.maxBinding.set(this.source.maximumQuantity);
  }

  public buildRecord(): Nullable<PartQuantity> {
    if (this.record && this.warehouseBinding.value && this.qtyBinding.value) {
      return {
        id: 0,
        warehouseID: this.warehouseBinding.value.id,
        warehouse: null,
        areaID: this.areaBinding.value?.id,
        area: null,
        currentQuantity: this.qtyBinding.value,
        partID: this.record.id,
        part: null,
        unitCost: this.unitCostBinding.value, 
        minimumQuantity: this.minBinding.value,
        maximumQuantity: this.maxBinding.value,
        totalOnOrder: 0,
        totalOnWorkOrder: 0
      }
    }
    return null;
  }

  public async getWarehouses(): Promise<void> {
    this.warehouses = await this.partCtrl.getWarehouses();
  }

  public async getAreas(record: Nullable<Warehouse>): Promise<void> {
    if (record) {
      this.areas = await this.partCtrl.getAreasByWarehouse(record.id);
    }
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public async submit(): Promise<void> {
    const q = this.buildRecord();
    if (q) {
      const result = await this.partCtrl.addStockLocation(q)
      if (result) {
        this.appStore.refresh = true;
        this.antero.closeModal();
      }
    } 
  }
}