import { bindableProvider, FormfieldBaseComponent, Nullable, TableData } from '@allmax-angular/shared/types';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DxDropDownBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'amx-table-drop-down',
  templateUrl: './table-drop-down.component.html',
  providers: [ bindableProvider(TableDropDownComponent) ]
})
export class TableDropDownComponent extends FormfieldBaseComponent<any> {
  @ViewChild(DxDropDownBoxComponent) public dropdown: Nullable<DxDropDownBoxComponent>;
  @Input() public height = '300px';
  @Input() public showColumnHeaders = true;
  @Input() public allowColumnResizing = false;
  @Input() public allowSummary = false;
  @Input() public allowSearch = false;
  @Input() public cellTemplate: Nullable<TemplateRef<any>>;
  @Input() public displayExpr = 'name';
  @Input() public columnAutoWidth = false;
  @Input() public dropdownOptions: any;
  @Input() public tableData: Nullable<TableData>;

  @Output() public opened: EventEmitter<any> = new EventEmitter<any>();
  
  public selectedRowKeys: any[] = [];
  public isOpen = false;
  
  public openHandler(): void {
    this.opened.emit();
  }
  
  public gridSelectionHandler(val: any) {
    this.value = val;
    this.isOpen = false;
  }
}
