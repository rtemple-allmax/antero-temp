import { SupplierContact } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';
import { ListItemBaseComponent } from '../list-item.base';

@Component({
  selector: 'ant-supplier-contact-list-item',
  templateUrl: './supplier-contact-list-item.component.html',
  styleUrls: ['./supplier-contact-list-item.component.scss'],
})
export class SupplierContactListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<SupplierContact>;
}
