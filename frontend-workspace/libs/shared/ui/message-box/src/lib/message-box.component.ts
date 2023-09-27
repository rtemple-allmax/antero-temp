import { Nullable } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'amx-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent implements AfterViewInit {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public heading = '';

  @Output() public closed = new EventEmitter<undefined>();

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public closedHandler(): void {
    this.closed.emit();
  }
}
