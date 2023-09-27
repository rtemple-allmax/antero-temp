import { Modals } from '@allmax-angular/antero-web/types';
import { Component } from '@angular/core';
import { PartsPanelBaseComponent } from '../part-panel.base';

@Component({
  selector: 'ant-part-stock-panel',
  templateUrl: './part-stock-panel.component.html',
  styleUrls: ['./part-stock-panel.component.scss'],
})
export class PartStockPanelComponent extends PartsPanelBaseComponent {
  public addHandler(): void {
    this.antero.openModal(Modals.PART_QUANTITY_ADD);
  }
}
