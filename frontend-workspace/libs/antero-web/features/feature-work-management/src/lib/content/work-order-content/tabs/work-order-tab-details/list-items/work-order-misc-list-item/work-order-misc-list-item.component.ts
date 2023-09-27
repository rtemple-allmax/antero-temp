import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkOrderMisc } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-order-misc-list-item',
  templateUrl: './work-order-misc-list-item.component.html',
  styleUrls: ['./work-order-misc-list-item.component.scss'],
})
export class WorkOrderMiscListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkOrderMisc>;
}
