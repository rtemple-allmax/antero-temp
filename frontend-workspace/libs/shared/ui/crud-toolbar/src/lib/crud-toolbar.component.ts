import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amx-crud-toolbar',
  templateUrl: './crud-toolbar.component.html',
  styles: [],
})
export class CrudToolbarComponent {
  @Input() public allowAdd = true;
  @Input() public allowEdit = true;
  @Input() public allowDelete = true;
  @Input() public disabled = false;
  
  @Output() public add = new EventEmitter<undefined>();
  @Output() public edit = new EventEmitter<undefined>();
  @Output() public delete = new EventEmitter<undefined>();

  public icons = { ...toolbarIcons };

  public addHandler(): void {
    this.add.emit();
  }

  public editHandler(): void {
    this.edit.emit();
  }

  public deleteHandler(): void {
    this.delete.emit();
  }
}
