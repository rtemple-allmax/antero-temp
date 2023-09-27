import { Nullable } from '@allmax-angular/shared/types';
import { confirmIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'amx-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements AfterViewInit {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public heading = 'Delete Confirmation';
  @Input() public confirmLabel = 'Confirm';
  @Input() public cancelLabel = 'Cancel';
  @Input() public headerBGColor = 'var(--app-color)';
  @Input() public maxWidth = '400px';

  @Input() public dangerous = false;
  
  @Output() public confirmed = new EventEmitter<undefined>();
  @Output() public canceled = new EventEmitter<undefined>();
  @Output() public closed = new EventEmitter<undefined>();

  public icons = { ...confirmIcons };

  public ngAfterViewInit(): void {
    this.open();
  }

  public open(): void {
    this.modal?.open();
  }

  public close(): void {
    this.modal?.close();
  }

  public confirmHandler(): void {
    this.confirmed.emit();
  }

  public cancelHandler(): void {
    this.canceled.emit();
  }

  public closedHandler(): void {
    this.closed.emit();
  }
}
