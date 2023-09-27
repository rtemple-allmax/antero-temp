import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { ChecklistItem } from '@allmax-angular/antero-web/types';
import { ThemingService } from '@allmax-angular/shared/features/theming';
import { CrudFunctions, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { miscIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, Output, EventEmitter, ViewChild, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-checklist-editor',
  templateUrl: './checklist-editor.component.html',
  styleUrls: [ './checklist-editor.component.scss' ]
})
export class ChecklistEditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('editor') public modal: Nullable<ModalWindowComponent>; 

  public checklist: ChecklistItem[] = []; 

  @Output() public changed = new EventEmitter<ChecklistItem[]>;
  @Output() public closed = new EventEmitter<undefined>();

  private subs: Subscription[] = [];
  private selectedIDs: number[] = [];

  public showItemEditor = false;
  public itemLabelBinding = new ObservableBinding<string>();
  public draggingIndex: Nullable<number>;

  private crud = CrudFunctions.CREATE;

  public icons = { ...toolbarIcons, ...miscIcons };

  public selectedItem: Nullable<ChecklistItem>;

  public get itemReady(): boolean {
    return !isNullOrEmpty(this.itemLabelBinding.value);
  }

  constructor(
    private theming: ThemingService,
    private workStore: CurrentWorkStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.workStore.checklistToEdit$.subscribe(x => {
      this.checklist = [ ...x ] ;
      // this.sync
    }));
    this.subs.push(this.workStore.selectedWorkOrderIDs$.subscribe(x => this.selectedIDs = x));
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

  public openItemEditor(item?: ChecklistItem): void {
    if (item) {
      this.crud = CrudFunctions.UPDATE;
      this.selectedItem = item;
      this.itemLabelBinding.set(this.selectedItem.label);
    } else {
      this.crud = CrudFunctions.CREATE;
    }
    this.showItemEditor = true;
  }

  public closedItemEditorHandler(): void {
    this.showItemEditor = false;
    this.itemLabelBinding.reset();
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

  public addItem(): void {
    if (this.selectedIDs.length > 0) {
      this.checklist.push({
        id: 0,
        label: this.itemLabelBinding.value as string,
        state: false,
        order: this.checklist.length,
        workOrderID: this.selectedIDs[0],
        workOrder: null
      });
      this.closedItemEditorHandler();
    }
    
  }

  public editItem(): void {
    if (!this.selectedItem) { return; }
    const index = this.checklist.lastIndexOf(this.selectedItem);
    if (index >= 0) {
      this.checklist[index] = { ...this.selectedItem, label: this.itemLabelBinding.value as string}
    }
    this.closedItemEditorHandler();
  }

  public removeItem(index: number): void {
    if (this.checklist.length > index) {
      this.checklist.splice(index, 1);
    }
  }

  public changeHandler(): void {
    this.checklist.forEach((x, i) => {
      x.order = i;
      x.workOrder = null;
    });
    this.changed.emit(this.checklist);
  }

  public submitItem(): void {
    if (this.crud === CrudFunctions.CREATE) {
      this.addItem();
    } else {
      this.editItem();
    }
  }
}
