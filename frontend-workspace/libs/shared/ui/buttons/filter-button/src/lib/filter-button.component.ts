import { ButtonBaseComponent, Nullable } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'amx-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: [ './filter-button.component.scss' ],
})
export class FilterButtonComponent extends ButtonBaseComponent implements OnInit {
  @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>;

  @Input() iconColor = 'var(--icon-color)';
  @Input() public activeIconColor = 'var(--selected-color)';
  @Input() public textColor = 'var(--fg-color)'
  @Input() public selection: any[] = [];
  @Input() displayExpr = 'name';
  @Input() data: Nullable<DataSource>;
  @Input() public selectionMode = 'multiple';
  @Input() public cellTemplate: Nullable<TemplateRef<any>>;
  @Input() allowSearch = false;
  @Input() public origin: 'left' | 'right' = 'left'

  @Output() public opened = new EventEmitter<undefined>();
  @Output() public selectionChanged = new EventEmitter<any>();
  @Output() public cleared = new EventEmitter<undefined>();

  public cols: any[] = [];
  public open = false;

  public get btnLabel(): string {
    if (this.selection.length === 1) {
      return this.selection[0][this.displayExpr];
    }
    return this.label;
  }

  public get showCount(): boolean {
    return this.selection.length > 1; 
  }
  
  public ngOnInit(): void {
    if (this.cellTemplate) {
      this.cols = [{ dataField: this.displayExpr, cellTemplate: 'cellTemplate' }]
    } else {
      this.cols = [{ dataField: this.displayExpr }]
    }
  }

  public toggle(): void {
    this.open = !this.open;
    if (this.open) {
      this.opened.emit();
    }
  }

  public clickOutsideHandler(): void {
    this.open = false;
  }

  public stopPropagation(e: Event): void {
    e.stopPropagation();
  }

  public selectionChangedHandler(e: any): void {
    this.selectionChanged.emit(e);
  }

  public clearedHandler(): void {
    if (this.table) {
      this.table.deselectAll();
    } else {
      // console.log('no table');
    }
    this.cleared.emit();
  }
}
