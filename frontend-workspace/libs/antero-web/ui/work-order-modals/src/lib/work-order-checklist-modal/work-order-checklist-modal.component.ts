import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { ChecklistItem, WorkOrderData } from '@allmax-angular/antero-web/types';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { miscIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, ViewChild, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-order-checklist-modal',
  templateUrl: './work-order-checklist-modal.component.html',
  styles: [],
})
export class WorkOrderChecklistModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public height = 'auto';

  @Output() public closed = new EventEmitter<undefined>();
  @Output() public checklistUpdated = new EventEmitter<ChecklistItem[]>();

  private subs: Subscription[] = [];
  
  public data: Nullable<WorkOrderData>;
  
  public labelBinding = new ObservableBinding<string>();

  public checklist: ChecklistItem[] = [];
  public draggingIndex: Nullable<number>;
  public showAddChecklistItem = false;

  public icons = { ...toolbarIcons, ...miscIcons };

  public get heading(): string {
    return `Update Checklist`;
  }

  public get ready(): boolean {
    return !isNullOrEmpty(this.labelBinding.value);
  }

  constructor(
    private workStore: CurrentWorkStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.workStore.woData$.subscribe(x => this.data = x));
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

  public onDragStart(index: number): void {
    this.draggingIndex = index;
  }

  public onDragOver(index: number): void {
    if (this.draggingIndex !== null && this.draggingIndex !== undefined && this.draggingIndex !== index) {
      this.reorderItem(this.draggingIndex, index);
    }
  }

  public onDragEnd(): void {
    this.draggingIndex = undefined;
  }

  private reorderItem(fromIndex: number, toIndex: number): void {
    const itemToBeReordered = this.checklist.splice(fromIndex, 1)[0];
    this.checklist.splice(toIndex, 0, itemToBeReordered);
    this.draggingIndex = toIndex;
  }

  public openAddChecklistItem(): void {
    this.showAddChecklistItem = true;
  }

  public openEditChecklistItem(index: number): void {
    this.labelBinding.set(this.checklist[index].label);
    this.showAddChecklistItem = true;
  }

  public closeAddChecklistItem(): void {
    this.showAddChecklistItem = false;
  }

  public addChecklistItem(): void {
    if (this.ready) {
      // this.checklist.push({ label: this.labelBinding.value || '', state: false });
      this.closeAddChecklistItem();
      this.labelBinding.reset();
    }
  }

  public editCheckListItem(index: number): void {
    if (this.checklist.length > index) {
      // this.checklist[i].label
    }
  }

  public removeChecklistItem(index: number): void {
    if (this.checklist.length > index) {
      this.checklist.splice(index, 1);
    }
  }

  public save(): void {
    this.checklistUpdated.emit(this.checklist);
    this.modal?.close();
  }
}
