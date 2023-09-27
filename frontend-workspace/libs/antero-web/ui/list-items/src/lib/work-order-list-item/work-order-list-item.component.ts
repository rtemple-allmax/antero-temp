import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { Modals } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItemBaseComponent } from '../list-item.base';

@Component({
  selector: 'ant-work-order-list-item',
  templateUrl: './work-order-list-item.component.html',
  styleUrls: ['./work-order-list-item.component.scss'],
})
export class WorkOrderListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkOrder>;

  @Output() public selected = new EventEmitter<WorkOrder>();

  public get workOrderNumberLabel(): string {
    return `#${ this.record?.workOrderNumber }`;
  }

  public selectWorkOrder(): void {
    if (this.record) {
      this.selected.emit(this.record);
    }
  }
}
