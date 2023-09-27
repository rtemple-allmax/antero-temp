import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { Part, PartQuantity } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-stock-locations',
  templateUrl: './stock-locations.component.html',
  styleUrls: ['./stock-locations.component.scss'],
})
export class StockLocationsComponent implements OnInit {
  private subs: Subscription[] = [];

  public selectedRecord: Nullable<Part>;
  public records: PartQuantity[] = [];

  public get heading(): string {
    return `Stock Locations: ${ this.selectedRecord?.name }`
  }

  constructor(
    private antero: AnteroService,
    private ctrl: PartsControllerService,
    private store: PartStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.store.selection$.subscribe(x => {
      this.selectedRecord = x;
      this.getStockLocations();
    }));
  }

  public async getStockLocations(): Promise<void> {
    if (this.selectedRecord) {
      // this.records = await this.ctrl.getStockLocations(this.selectedRecord, true) as PartQuantity[];
      console.log('stock locations', this.records);
    }
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public getUnit(record: PartQuantity): string {
    return (record.part?.orderInBulk ? record.part?.bulkUnit : record?.part?.stockingUnit) || 'Qty';
  }
}
