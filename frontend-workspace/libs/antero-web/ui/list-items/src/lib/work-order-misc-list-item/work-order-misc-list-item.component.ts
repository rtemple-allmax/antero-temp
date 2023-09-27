import { WorkOrderMisc } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';
import { WorkOrderListItemBaseComponent } from '../work-order-list-item.base';

@Component({
  selector: 'ant-work-order-misc-list-item',
  templateUrl: './work-order-misc-list-item.component.html',
  styleUrls: ['./work-order-misc-list-item.component.scss'],
})
export class WorkOrderMiscListItemComponent extends WorkOrderListItemBaseComponent {
  @Input() public record: Nullable<WorkOrderMisc>;
}
