import { EquipmentPart, Part, PartQuantity, SupplierPart } from '@allmax-angular/antero-web/entities';
import { ImageData, StoreBase } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PartStoreService extends StoreBase {
  private readonly selectionSubject = new BehaviorSubject<Nullable<Part>>(null);
  public readonly selection$ = this.selectionSubject.asObservable();
  public set selection(payload: Nullable<Part>) { this.selectionSubject.next(payload); }

  private readonly selectedStockLocationSubject = new BehaviorSubject<Nullable<PartQuantity>>(null);
  public readonly selectedStockLocation$ = this.selectedStockLocationSubject.asObservable();
  public set selectedStockLocation(payload: Nullable<PartQuantity>) { this.selectedStockLocationSubject.next(payload); }

  private readonly selectedSupplierSubject = new BehaviorSubject<Nullable<SupplierPart>>(null);
  public readonly selectedSupplier$ = this.selectedSupplierSubject.asObservable();
  public set selectedSupplier(payload: Nullable<SupplierPart>) { this.selectedSupplierSubject.next(payload); }

  private readonly selectedEquipmentSubject = new BehaviorSubject<Nullable<EquipmentPart>>(null);
  public readonly selectedEquipment$ = this.selectedEquipmentSubject.asObservable();
  public set selecteEquipment(payload: Nullable<EquipmentPart>) { this.selectedEquipmentSubject.next(payload); }

  private readonly selectedImageSubject = new BehaviorSubject<Nullable<ImageData>>(null);
  public readonly selectedImage$ = this.selectedImageSubject.asObservable();
  public set selectedImage(payload: Nullable<ImageData>) { this.selectedImageSubject.next(payload); }

  public initialize(debug: boolean = false): void {
    this.prepare(debug, 'Part Store', 'purple');
    if (this.debug) {
      this.subs.push(this.selection$.subscribe(x => this.log('selection', x)));
      this.subs.push(this.selectedStockLocation$.subscribe(x => this.log('selectedStockLocation', x)));
      this.subs.push(this.selectedSupplier$.subscribe(x => this.log('selectedSupplier', x)));  
    }
  }
  
  public reset(): void {
    this.selection = null;
  }
}