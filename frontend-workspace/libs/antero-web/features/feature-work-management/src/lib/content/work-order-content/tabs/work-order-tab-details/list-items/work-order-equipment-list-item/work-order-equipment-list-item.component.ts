import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkOrderEquipment } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-order-equipment-list-item',
  templateUrl: './work-order-equipment-list-item.component.html',
  styleUrls: ['./work-order-equipment-list-item.component.scss'],
})
export class WorkOrderEquipmentListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkOrderEquipment>;
}
