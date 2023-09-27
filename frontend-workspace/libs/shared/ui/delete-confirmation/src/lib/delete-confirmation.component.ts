import { Nullable } from '@allmax-angular/shared/types';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'amx-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styles: [],
})
export class DeleteConfirmationComponent {
  @Input() public typeName: Nullable<string>;
  @Input() public recordName: Nullable<string>;
  @Input() public affectedTypes: string[] = [];
  
  @Output() public confirmed = new EventEmitter<undefined>();
  @Output() public canceled = new EventEmitter<undefined>();

  public confirmHandler(): void {
    this.confirmed.emit();
  }

  public cancelHandler(): void {
    this.canceled.emit();
  }
}
