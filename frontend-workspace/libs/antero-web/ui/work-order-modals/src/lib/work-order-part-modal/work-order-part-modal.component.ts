import { Part, WorkOrderPart } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { CrudFunctions, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { confirmIcons, miscIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, Input, ViewChild, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export interface AddWorkOrderPartEventArgs {
  part: Part;
  estimatedQuantity: number;
  actualQuantity: number;
}

@Component({
  selector: 'ant-work-order-part-modal',
  templateUrl: './work-order-part-modal.component.html',
  styles: [],
})
export class WorkOrderPartModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public height = 'auto';
  

  @Output() public closed = new EventEmitter<undefined>();
  @Output() public addRequested = new EventEmitter<AddWorkOrderPartEventArgs>();
  @Output() public editRequested = new EventEmitter<WorkOrderPart>();
  @Output() public deleteRequested = new EventEmitter<WorkOrderPart>();

  private subs: Subscription[] = [];

  public record: Nullable<WorkOrderPart>;

  public crud: CrudFunctions = CrudFunctions.READ;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;

  public partBinding = new ObservableBinding<Part>();
  public estimateBinding = new ObservableBinding<number>();
  public actualBinding = new ObservableBinding<number>();

  public icons = { ...miscIcons, ...confirmIcons };
  
  public get heading(): string {
    switch(this.crud) {
      case CrudFunctions.CREATE:
        return 'Add Part';
      case CrudFunctions.UPDATE:
        return this.record ? `Edit ${ this.record?.partQuantity?.part?.name }` : 'Edit Part';
      case CrudFunctions.DELETE:
        return 'Remove Part';
    }
    return '';
  }

  public get addReady(): boolean {
    return !isNullOrEmpty(this.partBinding.value);
  }

  constructor(
    private appStore: AnteroStoreService,
    private workStore: CurrentWorkStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.appStore.crud$.subscribe(x => this.crud = x));
    this.subs.push(this.workStore.selectedPart$.subscribe(x => this.record = x));
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
    this.appStore.crud = CrudFunctions.DELETE;
  }

  public cancelDelete(): void {
    this.appStore.crud = CrudFunctions.UPDATE;
  }

  public addRequestedHandler(): void {
    if (this.partBinding.value) {
      const model: AddWorkOrderPartEventArgs = {
        part: this.partBinding.value,
        estimatedQuantity: this.estimateBinding.value as number,
        actualQuantity: this.actualBinding.value as number
      }
      this.addRequested.emit(model);
    }
  }

  public editRequestedHandler(): void {
    if (this.record) {
      const model: WorkOrderPart = { ...this.record };
      model.estimatedQuantity = this.estimateBinding.value as number;
      model.actualQuantity = this.actualBinding.value as number;
      this.editRequested.emit(model);
    }
  }

  public deleteRequestedHandler(): void {
    if (this.record) {
      this.deleteRequested.emit(this.record);
    }
  }
}
