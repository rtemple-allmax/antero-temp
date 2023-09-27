import { Component, OnInit } from '@angular/core';
import { SupplierPanelBaseComponent } from '../supplier-panel.base';

@Component({
  selector: 'ant-supplier-contacts-panel',
  templateUrl: './supplier-contacts-panel.component.html',
  styleUrls: ['./supplier-contacts-panel.component.scss'],
})
export class SupplierContactsPanelComponent extends SupplierPanelBaseComponent {
  public addHandler(): void {
    console.log()
  }
}
