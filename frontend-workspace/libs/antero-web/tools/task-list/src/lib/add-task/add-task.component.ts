import { Task } from '@allmax-angular/antero-web/entities';
import { AddTaskEventArgs, ChecklistItem } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { miscIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';



@Component({
  selector: 'ant-add-task',
  templateUrl: './add-task.component.html',
  styles: [`
    .drag-wrapper {
      padding: 4px 0;
    }

    .drag-wrapper div {
      border: 1px solid transparent;
    }

    .drag-wrapper.dragging div {
      /* border-color: rgba(1, 174, 239, 1.0); */
    }
  `],
})
export class AddTaskComponent implements OnInit {
  @Input() public task : Nullable<Task>;
  @Input() public crud: CrudFunctions = CrudFunctions.CREATE;

  @Output() public closed = new EventEmitter<undefined>();
  @Output() public add = new EventEmitter<AddTaskEventArgs>();
  @Output() public edit = new EventEmitter<AddTaskEventArgs>();

  public checklist: ChecklistItem[] = [];
  // public text: Nullable<string>;

  public nameBinding = new ObservableBinding<string>();
  public manualBinding = new ObservableBinding<boolean>();
  public textBinding = new ObservableBinding<string>();

  public icons = { ...toolbarIcons, ...miscIcons };

  public showAddChecklistItem = false;

  public draggingIndex: Nullable<number>;

  public get ready(): boolean {
    return !isNullOrEmpty(this.textBinding.value) && !isNullOrEmpty(this.nameBinding.value);
  }

  public ngOnInit(): void {
    if (this.task && this.crud === CrudFunctions.UPDATE) {
      // this.checklist = this.task.checklist;
      this.nameBinding.set(this.task.name);
      this.manualBinding.set(this.task.manualOnly);
    }
  }

  public editorInitializedHandler(): void {
    if (this.task && this.crud === CrudFunctions.UPDATE) {
      this.textBinding.set(this.task.instructions);
    }
  }
  
  public openAddChecklistItem(): void {
    this.showAddChecklistItem = true;
  }

  public closeAddChecklistItem(): void {
    this.showAddChecklistItem = false;
  }

  public closedHandler(): void {
    this.closed.emit();
  }

  // public editorChangedHandler(value: any): void {
  //   this.text = value.html;
  // }

  public addChecklistItem(label: string): void {
    // this.checklist.push({ label, state: false });
    this.closeAddChecklistItem();
  }

  public removeChecklistItem(index: number): void {
    if (this.checklist.length > index) {
      this.checklist.splice(index, 1);
    }
  }

  public addHandler(): void {
    const args: AddTaskEventArgs = {
      id: 0,
      name: this.nameBinding.value as string,
      instructions: this.textBinding.value as string,
      manual: this.manualBinding.value as boolean,
      checklist: this.checklist,
      templateCount: 0
    };
    if (this.crud === CrudFunctions.CREATE) {
      this.add.emit(args);
    } else {
      args.id = this.task?.id || 0;
      this.edit.emit(args);
    }
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
}