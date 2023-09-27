import { Component, AfterViewInit } from '@angular/core';
import { PartQuantityFormBaseComponent } from '../part-quantity-form.base';

@Component({
  selector: 'ant-part-quantity-delete',
  templateUrl: './part-quantity-delete.component.html',
  styleUrls: ['./part-quantity-delete.component.scss'],
})
export class PartQuantityDeleteComponent extends PartQuantityFormBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    this.subs.push(this.partsStore.selectedStockLocation$.subscribe(x => this.source = x));
  }
}
