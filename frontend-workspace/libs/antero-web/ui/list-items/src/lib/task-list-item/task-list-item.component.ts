import { Task } from '@allmax-angular/antero-web/entities';
import { Modals } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';
import { EquipmentListItemBaseComponent } from '../equipment-list-item.base';
import { ListItemBaseComponent } from '../list-item.base';

@Component({
  selector: 'ant-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent extends EquipmentListItemBaseComponent {
    @Input() public record: Nullable<Task>;

    public editHandler(): void {
      this.eqStore.selectedTask = this.record;
      this.antero.openModal(Modals.TASK_EDIT);
    }

    public deleteHandler(): void {
      this.eqStore.selectedTask = this.record;
      this.antero.openModal(Modals.TASK_DELETE);
    }
}
