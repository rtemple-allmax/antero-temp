import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { Audit } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-order-activity-list-item',
  templateUrl: './work-order-activity-list-item.component.html',
  styleUrls: ['./work-order-activity-list-item.component.scss'],
})
export class WorkOrderActivityListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<Audit>;
}
