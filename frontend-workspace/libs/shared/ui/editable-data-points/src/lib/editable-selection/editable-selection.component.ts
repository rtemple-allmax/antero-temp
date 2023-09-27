import { Nullable } from '@allmax-angular/shared/types';
import { SearchableDropdownComponent } from '@allmax-angular/shared/ui/searchable-dropdown';
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { EditableDataPointBaseComponent } from '../editable-data-point.base';

@Component({
  selector: 'amx-editable-selection',
  templateUrl: './editable-selection.component.html',
  providers: [ { provide: EditableDataPointBaseComponent, useExisting: EditableSelectionComponent }],
  styleUrls: ['./editable-selection.component.scss'],
})
export class EditableSelectionComponent extends EditableDataPointBaseComponent {
  @ViewChild(SearchableDropdownComponent) public dropdown: Nullable<SearchableDropdownComponent>;

  @Input() public items: any[] = [];
  @Input() public displayExpr = 'name';

  @Output() public addRequested = new EventEmitter<any>();
  @Output() public opened = new EventEmitter<any>();

  public addHandler(val: any): void {
    this.addRequested.emit(val);
  }

  public openedHandler(): void {
    console.log('editable selection should open')
    this.opened.emit();
  }

  public override close(): void {
    super.close();
    this.dropdown?.close();
  }
}
