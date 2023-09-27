// import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
// import { WorkOrderData } from '@allmax-angular/antero-web/types';
// import { Nullable } from '@allmax-angular/shared/types';
// import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
// import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-order-completion-info-modal',
  templateUrl: './work-order-completion-info-modal.component.html',
  styles: [],
})
export class WorkOrderCompletionInfoModalComponent  {
  // @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  // @Input() public height = 'auto';

  // @Output() public closed = new EventEmitter<undefined>();

  // private subs: Subscription[] = [];

  // public data: Nullable<WorkOrderData>;

  // public get heading(): string {
  //   return `Update Completion Info`;
  // }

  // constructor(private workStore: CurrentWorkStoreService) { }

  // public ngOnInit(): void {
  //   this.subs.push(this.workStore.woData$.subscribe(x => this.data = x));
  // }

  // public ngAfterViewInit(): void {
  //   this.modal?.open();
  // }

  // public ngOnDestroy(): void {
  //   unsubscribe(this.subs);
  // }

  // public closedHandler(): void {
  //   this.closed.emit();
  // }
}
