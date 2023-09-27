import { Component, OnInit } from '@angular/core';
import { TaskModalBaseComponent } from '../task-modal.base';

@Component({
  selector: 'ant-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.scss'],
})
export class TaskDeleteComponent extends TaskModalBaseComponent implements OnInit {
  public ngOnInit(): void {
    this.subs.push(this.eqStore.selectedTask$.subscribe(x => {
      this.source = x;
    }))
  }
}
