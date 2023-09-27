import { PurchaseOrderPart } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, Input } from '@angular/core';
import { ListItemBaseComponent } from '../list-item.base';

@Component({
  selector: 'ant-purchase-order-part-list-item',
  templateUrl: './purchase-order-part-list-item.component.html',
  styleUrls: ['./purchase-order-part-list-item.component.scss'],
})
export class PurchaseOrderPartListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<PurchaseOrderPart>;
  @Input() public typeToDisplay: 'part' | 'purchaseOrder' = 'purchaseOrder';
}
