import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { EquipmentPart, PartQuantity } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-stock-locations',
  templateUrl: './stock-locations.component.html',
  styleUrls: ['./stock-locations.component.scss'],
})
export class StockLocationsComponent  {
  // private subs: Subscription[] = [];

  // public records: PartQuantity[] = [];

  // public icons = { ...allIcons };

  // public get heading(): string {
  //   return `Stock Locations: ${ this.selectedPart?.part?.name }`
  // }

  // constructor(
  //   private antero: AnteroService,
  //   private ctrl: EquipmentControllerService,
  //   private store: EquipmentSectionStore
  // ) {}

  // public ngOnInit(): void {
  //   this.subs.push(this.store.selectedPart$.subscribe(x => {
  //     this.selectedPart = x;
  //     this.getStockLocations();
  //   }));
  // }

  // public ngOnDestroy(): void {
  //   unsubscribe(this.subs);
  // }

  // public closeHandler(): void {
  //   this.antero.closeModal();
  // }

  // public async getStockLocations(): Promise<void> {
  //   if (this.selectedPart) {
  //     this.data = await this.ctrl.getStockLocations(this.selectedPart);
  //   }
  // }
}
