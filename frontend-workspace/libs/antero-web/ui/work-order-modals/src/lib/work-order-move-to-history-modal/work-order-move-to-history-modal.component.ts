import { WorkOrderData } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { Component, AfterViewInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ant-work-order-move-to-history-modal',
  templateUrl: './work-order-move-to-history-modal.component.html',
  styles: [],
})
export class WorkOrderMoveToHistoryModalComponent implements AfterViewInit {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public height = 'auto';
  @Input() public data: Nullable<WorkOrderData>;

  @Output() public closed = new EventEmitter<undefined>();

  public get heading(): string {
    return `Move To History`;
  }

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public closedHandler(): void {
    this.closed.emit();
  }
}
