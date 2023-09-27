import { bindableProvider, FormfieldBaseComponent } from '@allmax-angular/shared/types';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'amx-select-box',
  templateUrl: './select-box.component.html',
  providers: [ bindableProvider(SelectBoxComponent) ]
})
export class SelectBoxComponent extends FormfieldBaseComponent<any> {
  @Input() public dataSource: DataSource | any[] = [];
  @Input() public displayExpr = '';
  @Input() public valueExpr = '';
  // @Input() public inline = false;
  @Input() public allowSearch = false;

  @Output() public opened: EventEmitter<undefined> = new EventEmitter<undefined>();

  public openHandler(): void {
    this.opened.emit();
  }
}
