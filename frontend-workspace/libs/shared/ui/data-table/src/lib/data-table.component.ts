import { Nullable } from '@allmax-angular/shared/types';
import { allIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import dxDataGrid from 'devextreme/ui/data_grid';
import { Subscription } from 'rxjs';

@Component({
  selector: 'amx-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, OnDestroy {
  @ViewChild(DxDataGridComponent) public table: Nullable<DxDataGridComponent>;

  @Input() public height = '100%';
  @Input() public width = '100%'; 
  @Input() public showColumnHeaders = true;
  @Input() public columns: any[] = [];
  @Input() public data: Nullable<DataSource>;
  @Input() public selectionMode = 'single';
  @Input() public rowAlternationEnabled = false;
  @Input() public selectFirstRowOnLoad = true;
  @Input() public remoteOperations = false;
  @Input() public rowContextMenuItems: any[] = [];
  @Input() public cellTemplate: Nullable<TemplateRef<any>>;
  @Input() public expandedTemplate: Nullable<TemplateRef<any>>;
  @Input() public buttonsTemplate: Nullable<TemplateRef<any>>;
  @Input() public popoverButtonTemplate: Nullable<TemplateRef<any>>;
  @Input() public alternatePopoverButtonTemplate: Nullable<TemplateRef<any>>;
  @Input() public contextMenuItemTemplate: Nullable<TemplateRef<any>>;
  @Input() public showBorders = true;
  @Input() public allowFixing = false;
  @Input() public allowResizing = true;
  @Input() public showRowLines = false;
  @Input() public showColumnLines = true;
  @Input() public defaultColumnWidth: string | number | undefined = undefined;
  @Input() public noDataText = 'no data';
  @Input() public selectedRowKeys: number[] = [];
  @Input() public allowSearch = true;
  @Input() public allowGrouping = true;
  @Input() public allowReordering = true;
  @Input() public allowFiltering = false;
  @Input() public showSummary = false;
  @Input() public allowWrapping = false;
  @Input() public columnResizingMode = 'widget';
  @Input() public backgroundColor = 'transparent';
  @Input() public hoverStateEnabled = true;
  @Input() public name = 'table';
  @Input() public showFilterRow = false;
  @Input() public allowExport = true;
  @Input() public expandable = false;

  @Input() public dropdownTemplate: TemplateRef<any> | null = null;
  
  @Output() public selectionChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() public contentReady: EventEmitter<any> = new EventEmitter<any>();
  @Output() public contextMenuPreparing: EventEmitter<any> = new EventEmitter<any>();
  @Output() public rowClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() public rowDblClicked: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() public addRequested: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() public headerPanelContextMenuPreparing: EventEmitter<any> = new EventEmitter<any>();
  @Output() public layoutDirty = new EventEmitter<any>();

  private subs: Subscription[] = [];
  public searchTerm = '';
  public focusedRowKey = -1;
  public count = 0;
  public icons = { ...allIcons,  };
  private initialSelection = false;

  public focusedRowData: any;

  private groupingApplied = false; 

  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  public get innerHeight(): string {
    if (this.showSummary) {
      return 'calc(100% - (30px)';
    } else{
      return '100%';
    }
  }

  constructor(private cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
   this.isGrouped();
  }
  
  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }
  
  public selectionChangedHandler(e: any, rows?: Nullable<any[]>): void {
    if (!e) {
      if (rows) {
        if (this.selectionMode === 'single') {
          this.selectionChanged.emit(rows[0]);
        } else {
          this.selectionChanged.emit(rows);
        }
      }
    } else {
      if (this.selectionMode === 'single') {
        this.selectionChanged.emit(e.selectedRowsData[0]);
      } else {
        this.selectionChanged.emit(e.selectedRowsData);
      }
    }
  }

  public rowClickHandler(e: any): void {
    if ('data' in e) {
      this.rowClicked.emit(e);
    }
  }

  public async contentReadyHandler(e: any): Promise<void> {
    setTimeout(() => {
      this.count = this.table?.instance?.totalCount() || 0;
    }, 0);
    
    if (this.selectFirstRowOnLoad && !this.initialSelection && this.selectedRowKeys.length < 1 && this.selectionMode !== 'none') {
      this.selectByIndexes([0]);
      this.initialSelection = true;
    } 
    
    const columnChooserView = e.component.getView("columnChooserView");  
    if (!columnChooserView._popupContainer) {  
      columnChooserView._initializePopupContainer();  
      columnChooserView.render();  
      columnChooserView._popupContainer.option("position", {
        of: e.element,
        my: "left top",
        at: "left top",
        offset: `100 100`
      });  
    }

    e.component.columnOption("command:select", "width", 30);  
    e.component.updateDimensions(); 
    
    this.contentReady.emit(e);
  }

  public wrapperKeyDownHandler(e: any): void {
    if (this.table) {
      const keyPressed = e.key;
      switch(keyPressed) {
        case 'ArrowUp':
        case 'ArrowDown':
          this.handleUpDownArrows(keyPressed, this.table.instance);
          break;
      }
    }    
  }

  public keyDownHandler(e: any): void {
    const keyPressed = e.event.originalEvent.key;
    switch(keyPressed) {
      case 'ArrowUp':
      case 'ArrowDown':
        e.event.originalEvent.stopPropagation();
        this.handleUpDownArrows(keyPressed, e.component);
        break;
    }
  }

  public async handleUpDownArrows(keyPressed: string, instance: dxDataGrid): Promise<void> {
    const selectedKeys = instance.getSelectedRowKeys();
    const pageSize = instance.pageSize();
    if  (selectedKeys.length > 0 && pageSize > 0) {
      const currentIndex = instance.getRowIndexByKey(selectedKeys[selectedKeys.length - 1]);
      const nextIndex = keyPressed === 'ArrowUp' ? currentIndex - 1 : currentIndex + 1;
      if (nextIndex >= 0) {
        const rows: any[] = await instance.selectRowsByIndexes([nextIndex]);
        if (rows.length === 0) {
          instance.selectRowsByIndexes([nextIndex - 1]);
          this.scrollToRow(nextIndex - 1);
        }
      }
    }
  }
  
  public contextMenuHandler(e: any): void {
    this.isGrouped();
    if (e?.target === 'headerPanel' && e.rowIndex === -1) {
      // group panel right click
      e.items = [
        {
          text: 'Expand All Groups',
          icon: this.icons.swneIcon,
          template: 'contextMenuItemTemplate',
          disabled: false,
          danger: false,
          onItemClick: () => this.expandAllGroups()
        },
        {
          text: 'Collapse All Groups',
          icon: this.icons.swneCenterIcon,
          template: 'contextMenuItemTemplate',
          disabled: false,
          danger: false,
          onItemClick: () => this.collapseAllGroups()
        },
        {
          text: 'Clear Grouping',
          icon: this.icons.ungroupIcon,
          template: 'contextMenuItemTemplate',
          disabled: false,
          danger: false,
          onItemClick: () => this.clearGrouping()
        },
      ]
    }
    else if (e?.row?.rowType === 'data') {
      this.contextMenuPreparing.emit(e);
    } else {
      e.items = [];
    }
    document.dispatchEvent(new Event('click', { 'bubbles': false }))
  }
  
  public rowDblClickHandler(): void {
    this.rowDblClicked.emit();
  }

  public addRequestedHandler(): void {
    this.addRequested.emit();
  }

  public toolbarPreparingHandler(e: any): void {
    const toolbarItems = e.toolbarOptions.items;
    toolbarItems.forEach((x: any) => {
      switch(x.name) {
        case 'searchPanel':
          x.location = "before";  
          break;
        case 'groupPanel':
          x.location = 'after';
          break;
      }
    });
  }

  public searchTermChangedHandler(term: string): void {
    this.table?.instance?.searchByText(term);
  }
  
  public async selectByIDs(ids: number[], preserve: boolean = false): Promise<void> {
    await this.table?.instance?.selectRows(ids, preserve);
  }

  public async selectByIndexes(indexes: number[]): Promise<void> {
    await this.table?.instance?.selectRowsByIndexes(indexes);
  }

  public scrollToTop(): void {
    this.table?.instance?.getScrollable()?.scrollTo(0);
  }

  public scrollToRow(index: number): void {
    const el = this.table?.instance?.getRowElement(index);
    if (el && el.length > 0) {
      this.table?.instance?.getScrollable()?.scrollToElement(el[0]);
    }
  }

  public navigateToRow(key: number): void {
    if (!this.table || !this.table.instance) { return; }
    this.table.instance.navigateToRow(key);
  }

  public async insert(val: any): Promise<any> {
    if (!this.table || !this.table.instance) { return; }
    const ds = this.table.instance.getDataSource();
    if (ds) {
      const store = ds.store() as CustomStore;
      if (store) {
        const record = await store.insert(val);
        if (record) {
          await ds.reload();
          await this.table.instance.selectRows([ record.id ], false);
          this.focusedRowKey = record.id;
          await this.table.instance.navigateToRow(record.id);
          return record;
        }
      }
    }
  }

  public async update(val: any): Promise<any> {
    if (!this.table || !this.table.instance) { return; }
    const ds = this.table.instance.getDataSource();
    if (ds) {
      const store = ds.store() as CustomStore;
      if (store) {
        const record = await store.update(val.id, val);
        if (record) {
          await ds.reload();
          await this.table.instance.selectRows([ record.id ], false);
          this.focusedRowKey = record.id;
          await this.table.instance.navigateToRow(record.id);
          return record;
        }
      }
    }
  }

  public async delete(val: any): Promise<any> {
    if (!this.table || !this.table.instance) { return; }
    const ds = this.table.instance.getDataSource();
    if (ds) {
      const store = ds.store() as CustomStore;
      if (store) {
        await store.remove(val.id);
        await ds.reload();
        return true;
      }
    }
  }

  public refresh(): void {
    this.table?.instance?.refresh();
  }

  public clearAllFilters(): void {
    this.table?.instance?.clearFilter();
  }

  public showColumnChooser(): void {
    this.table?.instance?.showColumnChooser();
  }

  public getColumns(): any[] {
    if (this.table?.instance) {
      const state = this.table.instance.state();
      if (state) {
        return state.columns;
      }
    }
    return [];
  }

  public filter(expr: any[]): void {
    if (this.table?.instance) {
      this.table.instance.filter(expr);
    }
  }

  public deselectAll(): void {
    if (this.table?.instance) {
      this.table.instance.deselectAll();
    }
  }

  public updateColumn(dataField: string, name: string, value: any): void {
    this.table?.instance?.columnOption(dataField, name, value);
  }

  public focusIndex(index: number): void {
    this.table?.instance.focus();
    this.table?.instance.option('focusedRowKey', index);
  }

  public optionChangedHandler(e: any): void {
    // console.log('option changed', e);
    if (e.name === 'columns') {
      if (e.fullName.includes('grouIndex')) {
        this.isGrouped();
      }
      if (e.fullName.includes('width') || e.fullName.includes('visible')) {
        this.layoutDirty.emit();
      }
    }
  }

  public isGrouped(): void {
    let count = 0;
    const cols: any[] = this.table?.instance.option("columns") || [];
    for(let i = 0; i < cols.length; i++) {
      if(cols[i].groupIndex != undefined && cols[i].groupIndex >= 0) {
        count++;
      }
    }
    this.groupingApplied = count > 0;
  }

  public clearGrouping(): void {
    this.table?.instance?.clearGrouping();
  }

  public collapseAllGroups(): void {
    this.table?.instance?.collapseAll();
  }

  public expandAllGroups(): void {
    this.table?.instance?.expandAll();
  }
}
