import { Task } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ant-delete-task',
  templateUrl: './delete-task.component.html'
})
export class DeleteTaskComponent {
  @Input() public task: Nullable<Task>;
  
  @Output() public confirm = new EventEmitter<undefined>();
  @Output() public cancel = new EventEmitter<undefined>();
  
  public confirmHandler(): void {
    this.confirm.emit();
  }

  public cancelHandler(): void {
    this.cancel.emit();
  }
}