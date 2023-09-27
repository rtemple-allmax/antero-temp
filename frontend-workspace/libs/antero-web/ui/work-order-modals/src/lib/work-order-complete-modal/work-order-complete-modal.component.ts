import { WorkOrderEquipment, WorkOrderInstrument, WorkOrderLabor, WorkOrderPart } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { ChecklistItem, WorkOrderData } from '@allmax-angular/antero-web/types';
import { DeviceTypes, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-order-complete-modal',
  templateUrl: './work-order-complete-modal.component.html',
  styles: [],
})
export class WorkOrderCompleteModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public height = 'auto';

  @Output() public closed = new EventEmitter<undefined>();

  private subs: Subscription[] = [];

  public data: Nullable<WorkOrderData>;

  public deviceType = DeviceTypes.UNSET;
  public deviceTypes: typeof DeviceTypes = DeviceTypes;

  public instruments: WorkOrderInstrument[] = [];
  public instrumentBindings: ObservableBinding<number>[] = [];

  public parts: WorkOrderPart[] = [];
  public partBindings: ObservableBinding<number>[] = [];

  public labor: WorkOrderLabor[] = [];
  public laborBindings: ObservableBinding<number>[] = [];

  public tools: WorkOrderEquipment[] = [];
  public toolBindings: ObservableBinding<number>[] = [];

  public checklist: ChecklistItem[] = [];
  public checklistBindings: ObservableBinding<boolean>[] = [];

  public get heading(): string {
    return `Complete Work Order`;
  }

  constructor(
    private appStore: AnteroStoreService,
    private workStore: CurrentWorkStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.workStore.woData$.subscribe(x => {
      this.data = x;
      this.instruments = this.data?.instruments || [];
      this.instrumentBindings = this.instruments.map(() => new ObservableBinding<number>());

      this.parts = this.data?.parts || [];
      this.partBindings = this.parts.map(() => new ObservableBinding<number>());

      this.labor = this.data?.labor || [];
      this.laborBindings = this.labor.map(() => new ObservableBinding<number>());

      this.tools = this.data?.equipment || [];
      this.toolBindings = this.tools.map(() => new ObservableBinding<number>());

      this.checklist = this.data?.wo?.checklist || [];
      this.checklistBindings = this.checklist.map(() => new ObservableBinding<boolean>());
    }));
    
    this.subs.push(this.appStore.deviceType$.subscribe(x => this.deviceType = x));
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
}
