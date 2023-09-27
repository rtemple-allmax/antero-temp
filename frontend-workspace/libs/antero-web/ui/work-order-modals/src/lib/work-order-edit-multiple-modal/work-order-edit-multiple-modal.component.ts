import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { UserController } from '@allmax-angular/antero-web/data-access/user-controller';
import { User, WorkPriority, WorkStatus, WorkType } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { DropdownItem, ObservableBinding } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-order-edit-multiple-modal',
  templateUrl: './work-order-edit-multiple-modal.component.html',
  styleUrls: ['./work-order-edit-multiple-modal.component.scss'],
})
export class WorkOrderEditMultipleModalComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  public selectedIDs: number[] = [];

  public statuses: DropdownItem[] = [];
  public types: DropdownItem[] = [];
  public priorities: DropdownItem[] = [];
  public users: DropdownItem[] = [];

  public statusBinding: ObservableBinding<WorkStatus> = new ObservableBinding<WorkStatus>();
  public assignmentBinding: ObservableBinding<any> = new ObservableBinding<any>();
  public typeBinding: ObservableBinding<WorkType> = new ObservableBinding<WorkType>();
  public priorityBinding: ObservableBinding<WorkPriority> = new ObservableBinding<WorkPriority>();
  public dateScheduledBinding: ObservableBinding<Date> = new ObservableBinding<Date>();
  public daysToCompleteBinding: ObservableBinding<number> = new ObservableBinding<number>();
  public dateCompletedBinding: ObservableBinding<Date> = new ObservableBinding<Date>();
  public completedByBinding: ObservableBinding<User> = new ObservableBinding<User>();

  public icons = { ...allIcons }

  public get text(): string {
    return `Changes will applied to the ${ this.selectedIDs.length } selected work order${ this.selectedIDs.length > 1 ? 's' : '' }`
  }
  
  constructor(
    private antero: AnteroService,
    private workCtrl: CurrentWorkController,
    private workStore: CurrentWorkStoreService,
    private userCtrl: UserController
  ) { }

  public async ngOnInit(): Promise<void> {
    this.subs.push(this.workStore.selectedWorkOrderIDs$.subscribe(x => this.selectedIDs = x));
    this.getStatuses();
    this.getTypes();
    this.getPriorities();
    this.getUsers();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public async getStatuses(): Promise<void> {
    const results = await this.workCtrl.getAllStatuses();
    if (results) {
      this.statuses = results.map((x: any) => ({ displayName: x.name || '', value: x, active: false })) || [];
    }
  }

  public async getTypes(): Promise<void> {
    const results = await this.workCtrl.getAllWorkTypes();
    if (results) {
      this.types = results.map((x: any) => ({ displayName: x.name || '', value: x, active: false })) || [];
    }
  }

  public async getPriorities(): Promise<void> {
    const results = await this.workCtrl.getAllWorkPriorities();
    if (results) {
      this.priorities = results.map((x: any) => ({ displayName: x.name || '', value: x, active: false })) || [];
    }
  }

  public async getUsers(): Promise<void> {
    const results = await this.userCtrl.getAllUsers();
    if (results) {
      this.users = results.map((x: any) => ({ displayName: x.displayName || '', value: x, active: false })) || [];
    }
  }

  // public async submit(): void {
    
  // }
}
