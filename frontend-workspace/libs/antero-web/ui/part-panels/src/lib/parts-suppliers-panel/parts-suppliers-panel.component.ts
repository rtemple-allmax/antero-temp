import { Modals } from '@allmax-angular/antero-web/types';
import { Component, OnInit } from '@angular/core';
import { PartsPanelBaseComponent } from '../part-panel.base';

@Component({
  selector: 'ant-parts-suppliers-panel',
  templateUrl: './parts-suppliers-panel.component.html',
  styleUrls: ['./parts-suppliers-panel.component.scss'],
})
export class PartsSuppliersPanelComponent extends PartsPanelBaseComponent {
  public addHandler(): void {
    this.antero.openModal(Modals.SUPPLIER_PART_ADD);
  }
}
