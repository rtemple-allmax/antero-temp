import { ObservableBinding } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ant-add-checklist-item',
  templateUrl: './add-checklist-item.component.html',
  styles: [],
})
export class AddChecklistItemComponent {
  @Output() public add = new EventEmitter<string>();
  @Output() public closed = new EventEmitter<undefined>();

  public labelBinding = new ObservableBinding<string>();

  public icons = { ...miscIcons };

  public get ready(): boolean {
    return !isNullOrEmpty(this.labelBinding.value);
  }

  public closedHandler(): void {
    this.closed.emit();
  }

  public addItem(): void {
    if (this.ready) {
      this.add.emit(this.labelBinding.value || '');
    } 
  }
}