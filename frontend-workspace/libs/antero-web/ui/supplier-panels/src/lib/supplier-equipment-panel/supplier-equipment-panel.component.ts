import { Component, OnInit } from '@angular/core';
import { SupplierPanelBaseComponent } from '../supplier-panel.base';

@Component({
  selector: 'ant-supplier-equipment-panel',
  templateUrl: './supplier-equipment-panel.component.html',
  styleUrls: ['./supplier-equipment-panel.component.scss'],
})
export class SupplierEquipmentPanelComponent extends SupplierPanelBaseComponent {
  public addHandler(): void {
    console.log()
  }
}
