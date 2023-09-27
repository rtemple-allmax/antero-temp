import { SuppliersController } from '@allmax-angular/antero-web/data-access/suppliers-controller';
import { Supplier, SupplierPart } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { ExcludeExpression, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { allIcons } from '@allmax-angular/shared/ui/icons';

@Component({ template: '' })
export class SupplierPartFormBaseComponent implements OnDestroy {
  protected subs: Subscription[] = [];

  public source: Nullable<SupplierPart>;

  public suppliers: Supplier[] = [];

  public icons = { ...allIcons };
  
  public supplierBinding = new ObservableBinding<Supplier>();
  public itemNumberBinding = new ObservableBinding<string>();
  public itemDescriptionBinding = new ObservableBinding<string>();

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    protected partsStore: PartStoreService,
    private supplierCtrl: SuppliersController
  ) { }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public populate(): void {
    if (!this.source) { return; }
    this.supplierBinding.set(this.source.supplier);
    this.itemNumberBinding.set(this.source.itemNumber);
    this.itemDescriptionBinding.set(this.source.itemDescription);
  }

  public submit(): void {
    console.log();
  }

  public async getSuppliers(): Promise<void> {
    let exclude: ExcludeExpression | undefined;
    
    if (this.source) {
      exclude = { excludedType: 'supplierpart', excludedIDs: [ this.source.id ] }
    }

    this.suppliers = await this.supplierCtrl.getRaw(exclude);
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}