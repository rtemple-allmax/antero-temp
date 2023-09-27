import { Component, AfterViewInit } from '@angular/core';
import { PartQuantityFormBaseComponent } from '../part-quantity-form.base';

@Component({
  selector: 'ant-part-quantity-edit',
  templateUrl: './part-quantity-edit.component.html',
  styleUrls: ['./part-quantity-edit.component.scss'],
})
export class PartQuantityEditComponent extends PartQuantityFormBaseComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    this.subs.push(this.partsStore.selectedStockLocation$.subscribe(x => {
      this.source = x;
      this.populate();
      this.cdr.detectChanges();
    }))
  }
}
