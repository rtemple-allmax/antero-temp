import { PartAudit } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, Input } from '@angular/core';
import { ListItemBaseComponent } from '../list-item.base';

@Component({
  selector: 'ant-part-audit-list-item',
  templateUrl: './part-audit-list-item.component.html',
  styleUrls: ['./part-audit-list-item.component.scss'],
})
export class PartAuditListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<PartAudit>;
}
