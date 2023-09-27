import { Component, OnInit } from '@angular/core';
import { TaskModalBaseComponent } from '../task-modal.base';

@Component({
  selector: 'ant-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent extends TaskModalBaseComponent implements OnInit {
  public ngOnInit(): void {
    this.subs.push(this.eqStore.selectedTask$.subscribe(x => {
      this.source = x;
      this.populate();
    }))
  }
  
}
