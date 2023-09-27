import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { Part } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ant-stock-locations',
  templateUrl: './stock-locations.component.html',
  styles: [],
})
export class StockLocationsComponent implements OnInit {
  @Input() public record: Nullable<Part>;

  public data: Nullable<TableData>;
  
  constructor(
    private antero: AnteroService,
    private ctrl: PartsControllerService
  ) {}

  public async ngOnInit(): Promise<void> {
    if (this.record) {
      // this.data = await this.ctrl.getStockLocations(this.record)
    }
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}
