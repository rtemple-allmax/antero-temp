import { Nullable, TableData } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { Component, Input, ViewChild, TemplateRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ColumnSortOrder } from 'devexpress-reporting/scopes/reporting-viewer-internal';

@Component({
  selector: 'amx-data-table-dropdown',
  templateUrl: './data-table-dropdown.component.html',
  styles: [],
})
export class DataTableDropdownComponent {
  @ViewChild('table') public table: Nullable<DataTableComponent>;

  @Input() datasource: any;
  @Input() columns: any[] = [];
  // @Input() public gridData: Nullable<TableData>;
  @Input() public displayExpr = 'name';
  // @Input() public shouldDisable: boolean = false;
  @Input() public label: Nullable<string>;
  @Input() public placeholder = '';
  @Input() public showClearButton = false;
  @Input() public height = 'auto';
  @Input() public showColumnHeaders = false;
  @Input() public allowColumnResizing = false;
  @Input() public allowSearch = true;
  @Input() public allowSummary = false;
  @Input() public cellTemplate: Nullable<TemplateRef<any>> = null;

  @Output() public opened: EventEmitter<any> = new EventEmitter<any>();
  @Output() public changed: EventEmitter<any> = new EventEmitter<any>();
  @Output() public log: EventEmitter<string> = new EventEmitter<any>();

  public isOpen = false;

  public value: any = null;
  public selectedRowKeys: any = [];

  private changeCount = 0;

  constructor(private changeDetctorRef: ChangeDetectorRef) { }

  public onOpenedHandler(e: any): void {
    this.opened.emit();
  }

  public dataTableSelectionChangedHandler(record: any): void {
    this.setValue(record);
  }

  public valueChangedHandler(e: any) {
    if ('value' in e && this.changeCount > 0) {
      if (e.value !== e.previousValue) {
        this.changed.emit(e.value);
        this.isOpen = false;
      }
    }
    this.changeCount++;
  }

  public setValue(data: any): void {
    this.value = data;
    this.isOpen = false;
    this.changeDetctorRef.detectChanges();
  }

  public open(): void {
    this.isOpen = true;
  }

  public async clearValue(): Promise<void> {
    this.setValue(null);
    this.selectedRowKeys = [];
  }
}
