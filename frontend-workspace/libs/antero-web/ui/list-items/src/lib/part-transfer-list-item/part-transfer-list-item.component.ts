import { PartTransfer } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, Input } from '@angular/core';
import { ListItemBaseComponent } from '../list-item.base';

@Component({
  selector: 'ant-part-transfer-list-item',
  templateUrl: './part-transfer-list-item.component.html',
  styleUrls: ['./part-transfer-list-item.component.scss'],
})
export class PartTransferListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<PartTransfer>;
}
