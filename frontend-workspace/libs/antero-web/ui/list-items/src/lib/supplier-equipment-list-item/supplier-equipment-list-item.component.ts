import { Equipment } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';
import { ListItemBaseComponent } from '../list-item.base';

@Component({
  selector: 'ant-supplier-equipment-list-item',
  templateUrl: './supplier-equipment-list-item.component.html',
  styleUrls: ['./supplier-equipment-list-item.component.scss'],
})
export class SupplierEquipmentListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<Equipment>;
}
