import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { UserController } from '@allmax-angular/antero-web/data-access/user-controller';
import { MaintenanceGroup, User, WorkPriority, WorkType } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { UserPreferences, WorkOrderData } from '@allmax-angular/antero-web/types';
import { DropdownItem, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { first, Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-order-admin-info-modal',
  templateUrl: './work-order-admin-info-modal.component.html',
  styles: [],
})
export class WorkOrderAdminInfoModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public height = 'auto';

  @Output() public closed = new EventEmitter<undefined>();

  private subs: Subscription[] = [];

  public data: Nullable<WorkOrderData>;

  public dateScheduledBinding = new ObservableBinding<Date>();
  public daysToCompleteBinding = new ObservableBinding<number>();
  public workTypeBinding = new ObservableBinding<Nullable<DropdownItem>>();
  public workPriorityBinding = new ObservableBinding<Nullable<DropdownItem>>();

  public types: DropdownItem[] = [];
  public priorities: DropdownItem[] = [];

  public icons = { ...miscIcons };

  public get heading(): string { return 'Update Administrative Info'; }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private workCtrl: CurrentWorkController,
    private workStore: CurrentWorkStoreService
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.getLists();
    this.subs.push(this.workStore.woData$.pipe(first()).subscribe(x => {
      this.data = x;
      
      if (this.data) {
        const { wo } = this.data;
        if (wo) {
          this.dateScheduledBinding.set(wo.dateScheduled);
          this.daysToCompleteBinding.set(wo.daysToComplete);
          this.workTypeBinding.set({ displayName: wo.workType?.name || '', value: wo.workType, active: true });
          this.workPriorityBinding.set({ displayName: wo.workPriority?.name || '', value: wo.workPriority, active: true });
        }
      }
    }));
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

  public async getLists(): Promise<void> {
    const typeData = await this.workCtrl.getAllWorkTypes();
    if (typeData) {
      this.types = typeData.map((x: any) => ({ displayName: x.name || '', value: x, active: false })) || [];
    }
    const priorityData = await this.workCtrl.getAllWorkPriorities();
    if (priorityData) {
      this.priorities = priorityData.map((x: any) => ({ displayName: x.name || '', value: x, active: false })) || [];
    }
  }
  
  public async submit(): Promise<void> {
    if (this.data?.wo) {
      const record = { ...this.data.wo };
      record.equipment = null;
      record.maintenanceGroup = null;
      record.task = null;
      record.workPriority = null;
      record.workStatus = null;
      record.workType = null;
      record.dateScheduled = this.dateScheduledBinding.value;
      record.daysToComplete = this.daysToCompleteBinding.value;
      record.workTypeID = this.workTypeBinding.value?.value?.id;
      record.workPriorityID = this.workPriorityBinding.value?.value?.id;
      const result = await this.workCtrl.updateWorkOrder(record);
      
      if (result) {
        this.appStore.refresh = true;
        this.workStore.refreshViewer = true;
        this.antero.closeModal();
      }
    }
  }
}
