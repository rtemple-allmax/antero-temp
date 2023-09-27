import { Component, OnInit } from '@angular/core';
import { SupplierPanelBaseComponent } from '../supplier-panel.base';

@Component({
  selector: 'ant-supplier-parts-panel',
  templateUrl: './supplier-parts-panel.component.html',
  styleUrls: ['./supplier-parts-panel.component.scss'],
})
export class SupplierPartsPanelComponent extends SupplierPanelBaseComponent {
  public addHandler(): void {
    console.log()
  }
}
