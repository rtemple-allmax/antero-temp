import { ObservableBinding, ObservableProperty } from "@allmax-angular/shared/types";
import { unsubscribe } from "@allmax-angular/shared/utils";
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, forwardRef } from "@angular/core";
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Subscription } from "rxjs";

export const editableProvider = <T>(component: new () => T) => {
  return { provide: EditableDataPointBaseComponent, useExisting: forwardRef(() => component)};
};

export enum EditableDataPointTypes {
  VALUE,
  ID
}

export interface EditableDataPointArgs {
  name: string;
  value: any;
  type: EditableDataPointTypes;
}

@Component({ template: '' })
export class EditableDataPointBaseComponent implements OnInit, OnDestroy {
  @Input() public label = '';
  @Input() public name = '';
  @Input() public type = EditableDataPointTypes.VALUE; 
  @Input() public data: any;

  @Output() public submitted = new EventEmitter<EditableDataPointArgs>();
  
  private subs: Subscription[] = [];

  public icons = { ...allIcons };
  public showEdit = false;
  public editing = new ObservableProperty<boolean>(false);

  public binding = new ObservableBinding<any>();

  public ngOnInit(): void {
    this.subs.push(this.editing.value$.subscribe(x => {
      this.showEdit = x as boolean;
      if (this.showEdit && this.data) {
        this.binding.set(this.data);
      }
    }));

    this.subs.push(this.binding.value$.subscribe(x => this.submit(x)))
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }
  
  public setEditMode(state: boolean): void {
    this.editing.value = state;
  }

  public close(): void {
    this.setEditMode(false);
  }

  public submit(value: any): void {
    if (!value) { return; }
    this.submitted.emit({
      name: this.name,
      type: this.type,
      value: this.type === EditableDataPointTypes.VALUE ? value : value.id 
    });
  }
}