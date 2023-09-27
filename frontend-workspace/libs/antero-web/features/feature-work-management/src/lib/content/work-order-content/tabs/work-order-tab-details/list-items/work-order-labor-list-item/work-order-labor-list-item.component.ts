import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkOrderLabor } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-order-labor-list-item',
  templateUrl: './work-order-labor-list-item.component.html',
  styleUrls: ['./work-order-labor-list-item.component.scss'],
})
export class WorkOrderLaborListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkOrderLabor>;
}
