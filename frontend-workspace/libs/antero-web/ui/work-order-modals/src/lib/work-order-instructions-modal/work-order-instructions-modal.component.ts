import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { WorkOrderData } from '@allmax-angular/antero-web/types';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, Input, ViewChild, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription, first } from 'rxjs';

@Component({
  selector: 'ant-work-order-instructions-modal',
  templateUrl: './work-order-instructions-modal.component.html',
  styles: [],
})
export class WorkOrderInstructionsModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public height = 'auto';

  @Output() public closed = new EventEmitter<undefined>();

  private subs: Subscription[] = [];
  public data: Nullable<WorkOrderData>;
  public textBinding = new ObservableBinding<string>();

  public icons = { ...miscIcons };

  public get heading(): string {
    return `Update Instructions`;
  }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private workCtrl: CurrentWorkController,
    private workStore: CurrentWorkStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.workStore.woData$.pipe(first()).subscribe(x => {
      this.data = x;
      if (this.data) {
        this.textBinding.set(this.data.instructions);
      } else {
        this.textBinding.reset();
      }
    }))
  }

  public ngAfterViewInit(): void {
    this.modal?.open();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler(): void {
    this.closed.emit();
  }

  public async submit(): Promise<void> {
    if (this.data?.wo && this.textBinding.value) {
      const result = await this.workCtrl.updateWorkOrderInstuctions(this.data.wo.id, this.textBinding.value);
      if (result) {
        this.appStore.refresh = true;
        this.workStore.refreshViewer = true;
        this.antero.closeModal();
      }
    }
  }
}
