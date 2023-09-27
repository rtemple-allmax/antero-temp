import { LaborAccount, LaborClass, LaborType, User, WorkOrderLabor } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { CrudFunctions, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { confirmIcons, miscIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, Input, ViewChild, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export interface AddWorkOrderLaborEventArgs {
  laborClass: LaborClass;
  laborAccount: Nullable<LaborAccount>;
  user: Nullable<User>;
  laborType: Nullable<LaborType>;
  estimatedHours: Nullable<number>;
  actualHours: Nullable<number>; 
} 

@Component({
  selector: 'ant-work-order-labor-modal',
  templateUrl: './work-order-labor-modal.component.html',
  styles: [],
})
export class WorkOrderLaborModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public height = 'auto';
  
  @Output() public closed = new EventEmitter<undefined>();
  @Output() public addRequested = new EventEmitter<AddWorkOrderLaborEventArgs>();
  @Output() public editRequested = new EventEmitter<WorkOrderLabor>();
  @Output() public deleteRequested = new EventEmitter<WorkOrderLabor>();

  private subs: Subscription[] = [];

  public record: Nullable<WorkOrderLabor>;

  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  public crud: CrudFunctions = CrudFunctions.READ;

  public classBinding = new ObservableBinding<LaborClass>();
  public accountBinding = new ObservableBinding<LaborAccount>();
  public userBinding = new ObservableBinding<User>();
  public typeBinding = new ObservableBinding<LaborType>();
  public estimateBinding = new ObservableBinding<number>();
  public actualBinding = new ObservableBinding<number>();

  public icons = { ...miscIcons, ...confirmIcons };

  public get heading(): string {
    switch(this.crud) {
      case CrudFunctions.CREATE:
        return 'Add Labor';
      case CrudFunctions.UPDATE:
        return this.record ? `Edit ${ this.record.laborClass?.name }` : 'Edit Labor';
        case CrudFunctions.DELETE:
        return 'Delete Labor';
    }
    return '';
  }

  public get isReady(): boolean {
    return !isNullOrEmpty(this.classBinding.value);
  }

  constructor(
    private appStore: AnteroStoreService,
    private workStore: CurrentWorkStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.appStore.crud$.subscribe(x => this.crud = x));
    this.subs.push(this.workStore.selectedLabor$.subscribe(x => this.record = x));
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

  public openDelete(): void {
    this.appStore.crud = CrudFunctions.DELETE
  }

  public cancelDelete(): void {
    this.appStore.crud = CrudFunctions.UPDATE;
  }

  public addRequestedHandler(): void {
    if (this.classBinding.value) {
      const model: AddWorkOrderLaborEventArgs = {
        laborClass: this.classBinding.value,
        laborAccount: this.accountBinding.value,
        user: this.userBinding.value,
        laborType: this.typeBinding.value,
        estimatedHours: this.estimateBinding.value,
        actualHours: this.actualBinding.value
      }
      this.addRequested.emit(model);
    }
  }

  public editRequestedHandler(): void {
    if (this.record) {
      const model = { ...this.record };
      model.laborClass = null;
      model.laborAccountID = this.accountBinding.value?.id as number;
      model.laborAccount = null;
      model.userID = this.userBinding.value?.id as number;
      model.user = null;
      model.laborTypeID = this.typeBinding.value?.id as number;
      model.laborType = null;
      model.estimatedHours = this.estimateBinding.value as number;
      model.actualHours = this.actualBinding.value as number;
      this.editRequested.emit(model);
    }
  }

  public deleteRequestedHandler(): void {
    if (this.record) {
      this.deleteRequested.emit(this.record);
    }
  }
}
