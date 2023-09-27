import { WorkOrderSupplier } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-order-contractor-modal',
  templateUrl: './work-order-contractor-modal.component.html',
  styles: [],
})
export class WorkOrderContractorModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public height = 'auto';
  
  @Output() public closed = new EventEmitter<undefined>();

  private subs: Subscription[] = [];

  public record: Nullable<WorkOrderSupplier>;

  public crud: CrudFunctions = CrudFunctions.READ;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;

  public get heading(): string {
    return `Contractors`;
  }

  constructor(
    private appStore: AnteroStoreService,
    private workStore: CurrentWorkStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.appStore.crud$.subscribe(x => this.crud = x));
    this.subs.push(this.workStore.selectedContractor$.subscribe(x => this.record = x));
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
