import { DeviceTypes, Nullable } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { DrawerComponent } from '@allmax-angular/shared/ui/drawer';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MasterDetailViewTypes } from './master-detail-view-types.enum';

@Component({
  selector: 'amx-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss'],
})
export class MasterDetailComponent implements AfterViewInit, OnDestroy {
  @ViewChild(DrawerComponent) public drawer: DrawerComponent | undefined;
  @ViewChildren('table') public tablesQuery: Nullable<QueryList<DataTableComponent>>;

  @Input() public deviceType: DeviceTypes = DeviceTypes.UNSET;
  @Input() public cellTemplate: Nullable<TemplateRef<any>>;
  @Input() public contextMenuItemTemplate: Nullable<TemplateRef<any>>;
  @Input() public columns: any[] = [];
  @Input() public masterWidth = 'calc(58ch + var(--space-lg))';
  @Input() public data: Nullable<DataSource>;
  @Input() public remoteOperations = true;
  @Input() public selectionMode = 'single';
  @Input() public rowContextMenuItems: any[] = [];
  @Input() public peek = '50px';
  @Input() public allowAdd = false;
  @Input() public addLabel = 'Add';
  @Input() public addIcon = 'iconAdd';
  @Input() public showOptions = false;
  @Input() public allowMultiSelect = false;
  @Input() public allowGrouping = true;
  @Input() public viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
  @Input() public dropdownTemplate: TemplateRef<any> | null = null;

  @Output() public tableReady = new EventEmitter<any>();
  @Output() public selectionChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() public viewTypeChanged: EventEmitter<MasterDetailViewTypes> = new EventEmitter<MasterDetailViewTypes>();
  @Output() public addRequested: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() public contextMenuPreparing: EventEmitter<any> = new EventEmitter<any>();
  @Output() public layoutDirty = new EventEmitter();

  public selectedRowKeys: number[] = [];

  private selection: any[] = [];

  private subs: Subscription[] = [];


  // private readonly viewTypeSubject = new BehaviorSubject<MasterDetailViewTypes>(MasterDetailViewTypes.LIST);
  // public readonly viewType$ = this.viewTypeSubject.asObservable();
  // public set viewType(payload: MasterDetailViewTypes) { this.viewTypeSubject.next(payload); }
  // public get viewType(): MasterDetailViewTypes { return this.viewTypeSubject.getValue(); }

  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;
  public deviceTypes: typeof DeviceTypes = DeviceTypes;
  
  private readonly tableSubject = new BehaviorSubject<Nullable<DataTableComponent>>(null);
  public readonly table$ = this.tableSubject.asObservable();
  public set table(payload: Nullable<DataTableComponent>) { this.tableSubject.next(payload); }
  
  public get masterDetailDemensions(): string {
    return `58ch 1fr`;
  }

  public get drawerWidth(): string {
    return this.deviceType === DeviceTypes.MOBILE ? '100%' : `calc(100% - (190px + 58ch))`;
  }

  public get tableWidth(): string {
    return `calc(100% - ${ this.peek })`;
  }
  
  public ngAfterViewInit(): void {
    this.handleTablesQuery(this.tablesQuery);
    if (this.tablesQuery) {
      this.subs.push(this.tablesQuery.changes.subscribe(q => this.handleTablesQuery(q)));
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);    
  }

  public handleTablesQuery(q: Nullable<QueryList<DataTableComponent>>): void {
    if (q) {
      const list = q.toArray();
      if (list?.length === 1) {
        this.table = list[0]
      }
    }
  }

  public selectionChangedHandler(selection: any): void {
    this.selectionChanged.emit(selection);
  }

  public rowClickHandler(e: any): void {
    if (!this.allowMultiSelect) { return ;}
    if ('data' in e) {
      const { data } = e
      if (e?.event?.ctrlKey) {
        if (this.selection.includes(data)) {
          const index = this.selection.indexOf(data);
          if (index > -1) {
            this.selection.splice(index, 1);
            this.selectionChanged.emit(this.selection);
          }
        } else {
          this.selection.push(data);
          this.selectionChanged.emit(this.selection)
        }
      } else {
        this.selection = [ data ]
        this.selectionChanged.emit(this.selection)
      }
    }
  }

  public tableReadyHandler(e: any): void {
    this.tableReady.emit(e);
  }

  public rowDblClickedHandler(): void {
    this.toggleDetails();
  }
  
  public toggleDetails(): void {
    this.drawer?.toggle();
  }

  public addRequestedHandler(): void {
    this.addRequested.emit();
  }

  public layoutDirtyHandler(): void {
    this.layoutDirty.emit();
  }

  public selectByIndexes(indexes: number[]): void {
    this.table?.selectByIndexes(indexes);
  }

  public async insert(val: any): Promise<void>{
    if (this.table) {
      return this.table.insert(val);
    }
  }

  public async update(val: any): Promise<void> {
    if (this.table) {
      return this.table.update(val);
    }
  }

  public async delete(val: any): Promise<void> {
    if (this.table) {
      return this.table.delete(val);
    }
  }

  public openDetail(): void {
    this.drawer?.toggle();
  }

  public headerPanelcontextMenuHandler(e: any): void {
    console.log('header panel right click', e)
  }

  public contextMenuHandler(e: any): void {
    this.contextMenuPreparing.emit(e);
  }
}
