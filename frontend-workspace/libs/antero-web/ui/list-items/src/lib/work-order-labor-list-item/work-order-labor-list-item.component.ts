import { WorkOrderLabor } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';
import { WorkOrderListItemBaseComponent } from '../work-order-list-item.base';

@Component({
  selector: 'ant-work-order-labor-list-item',
  templateUrl: './work-order-labor-list-item.component.html',
  styleUrls: ['./work-order-labor-list-item.component.scss'],
})
export class WorkOrderLaborListItemComponent extends WorkOrderListItemBaseComponent {
  @Input() public record: Nullable<WorkOrderLabor>;
}
