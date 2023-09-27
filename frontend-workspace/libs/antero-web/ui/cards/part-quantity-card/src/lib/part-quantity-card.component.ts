import { PartQuantity } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';
import { numberToCurrencyFormatter } from '@allmax-angular/shared/utils';
import { CardBaseComponent } from '@allmax-angular/antero-web/types';

@Component({
  selector: 'ant-part-quantity-card',
  templateUrl: './part-quantity-card.component.html',
  styleUrls: ['./part-quantity-card.component.scss'],
})
export class PartQuantityCardComponent extends CardBaseComponent {
  @Input() public source: Nullable<PartQuantity>;

  public get title(): string {
    if (this.source) {
      return `${ this.source.warehouse?.name } ${ this.source.area?.name }`
    }

    return '';
  }

  public formatCurrency(val: Nullable<number>): string {
    if (val) {
      return numberToCurrencyFormatter(val);
    }
    return '';
  }
}
