import { AnteroService } from "@allmax-angular/antero-web/services/antero-service";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
import { AnteroStoreService } from "@allmax-angular/antero-web/state-management/antero-store";
import { UIStoreService } from "@allmax-angular/antero-web/state-management/ui-store";
import { DataStores, UIStorePropNames } from "@allmax-angular/antero-web/types";
import { CrudFunctions, DeviceTypes, Nullable, TableData } from "@allmax-angular/shared/types";
import { AccordionContainerComponent } from "@allmax-angular/shared/ui/accordion";
import { DataTableComponent } from "@allmax-angular/shared/ui/data-table";
import { allIcons } from "@allmax-angular/shared/ui/icons";
import { MasterDetailComponent, MasterDetailViewTypes } from "@allmax-angular/shared/ui/master-detail";
import { NotificationsService } from "@allmax-angular/shared/ui/notifications";
import { SearchBoxComponent } from "@allmax-angular/shared/ui/search-box";
import { TabsComponent } from "@allmax-angular/shared/ui/tabs";
import { getDateString } from "@allmax-angular/shared/utils";
import { AfterViewInit, ChangeDetectorRef, Component, inject, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { AnteroAppFrameComponent } from "@allmax-angular/antero-web/ui/antero-app-frame";
import { WidgetBaseComponent } from "./widget.base";

@Component({ template: '' })
export class SectionBaseComponent extends WidgetBaseComponent implements OnInit, AfterViewInit, OnDestroy  {
  @ViewChild(AnteroAppFrameComponent) protected frame: Nullable<AnteroAppFrameComponent>;
  @ViewChild(MasterDetailComponent) protected view: MasterDetailComponent | undefined;
  @ViewChild(SearchBoxComponent) protected searchbox: Nullable<SearchBoxComponent>;
  @ViewChildren(TabsComponent) protected tabsQuery: Nullable<QueryList<TabsComponent>>;
  @ViewChildren(AccordionContainerComponent) protected accordionQuery: Nullable<QueryList<AccordionContainerComponent>>;

  protected viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
  protected viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  protected crudFunctions: typeof CrudFunctions = CrudFunctions;
  protected crud: CrudFunctions = CrudFunctions.READ;

  protected deviceType: DeviceTypes = DeviceTypes.UNSET;
  protected deviceTypes: typeof DeviceTypes = DeviceTypes;

  public layoutTypes: typeof TableLayouts = TableLayouts;

  protected savingLayout = false;
  protected updatingData = false;

  protected groupedProp = '';
  
  protected sectionContextMenuItems: any[] = [];
  protected itemContextMenuItems: any[] = [];
  public rowContextMenuItems: any[] = [];

  protected data: Nullable<TableData>;

  protected icons = { ...allIcons };

  protected masterTable: Nullable<DataTableComponent>;
  protected tabs: Nullable<TabsComponent>;
  protected accordion: Nullable<AccordionContainerComponent>;

  protected currentTabIndex = 0;
  protected hoveredID = 0;

  protected antero = inject(AnteroService);
  protected layouts = inject(LayoutService);
  protected appStore = inject(AnteroStoreService);
  protected notifications = inject(NotificationsService);
  protected uiStore = inject(UIStoreService);
  protected cdr = inject(ChangeDetectorRef);

  public get tabHeight(): string {
    return 'calc(100vh - 200px)';
  }

  public get detailButtonRotation(): string {
    return this.view?.drawer?.isOpen ? '180deg': '0deg';
  }

  public ngOnInit(): void {
    this.handleDevices();
  }
  
  public ngAfterViewInit(): void {
    this.handleMasterDetail();
    this.handleTabs();
    this.handleAccordion();
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.cdr.detach();
  }

  public handleDevices(): void {
    this.subs.push(this.appStore.deviceType$.subscribe(x => this.deviceType = x));
  }

  public handleMasterDetail(): void {
    if (this.view) {
      this.subs.push(this.view.table$.subscribe(x => {
        this.masterTable = x;
      }));
    }
  }

  public handleTabs(): void {
    if (this.tabsQuery) {
      this.tabs = this.tabsQuery.first;
      this.tabsQuery.changes.subscribe(x => {
        this.tabs = x.first;
        if (this.tabs) { this.subs.push(this.tabs.currentIndex$.subscribe(i => this.currentTabIndex = i)); }
      })
      if (this.tabs) { this.subs.push(this.tabs.currentIndex$.subscribe(i => this.currentTabIndex = i)); }
    }
  }

  public handleAccordion(): void {
    if (this.accordionQuery) {
      this.accordion = this.accordionQuery.first;
      this.accordionQuery.changes.subscribe(x => {
        this.accordion = x.first;
        if (this.accordion) { this.subs.push(this.accordion.currentIndex$.subscribe(i => this.currentTabIndex = i)); }
      });
      if (this.accordion) { this.subs.push(this.accordion.currentIndex$.subscribe(i => this.currentTabIndex = i)); }
    }
  }

  public async toggleView(type: MasterDetailViewTypes): Promise<void> {
    this.state.getStore(DataStores.UI)?.setValue(UIStorePropNames.VIEW_TYPE, type);
  }

  public closeModal(): void {
    this.antero.closeModal();
  }

  public layoutDirtyHandler(layout: TableLayouts): void {
    setTimeout(() => this.saveLayout(layout), 200);
  }

  public async saveLayout(layout: TableLayouts): Promise<void> {
    if (this.savingLayout) { return; }
    this.savingLayout = true;
    const cols = this.masterTable?.getColumns();
    const adjusted = cols?.map(x => ({ ...x, sortOrder: 0 }))
    const result = await this.layouts.saveLayout({
      gridLayout: layout,
      gridColumns: adjusted || [],
      groupPanelShown: true
    })
    if (result) {
      this.savingLayout = false;
    } 
  }

  public showColumnChooser(): void {
    this.masterTable?.showColumnChooser();
  }

  public clearFilters(): void {
    this.masterTable?.clearAllFilters();
  }

  public toggleDetail(): void {
    this.view?.toggleDetails()
  }

  public mouseenterHandler(id: number): void {
    if (id > 0) {
      this.hoveredID = id;
    }
  }

  public mouseleaveHandler(id: number): void {
    if (id === this.hoveredID) {
      this.hoveredID = 0;
    }
  }

  public searchHandler(term: string): void {
    this.masterTable?.searchTermChangedHandler(term);
  }

  public searchDownArrowHandler(): void {
    this.masterTable?.selectByIndexes([0]);
    this.masterTable?.focusIndex(0)
  }

  public clearGrouping(): void {
    this.masterTable?.clearGrouping();
  }

  public expandAllGroups(): void {
    this.masterTable?.expandAllGroups();
  }

  public collapseAllGroups(): void {
    this.masterTable?.collapseAllGroups();
  }

  public selectByID(id: number): void {
    this.masterTable?.navigateToRow(id);
    this.masterTable?.selectByIDs([ id ]);
  }

  public selectByIndex(index: number): void {
    this.masterTable?.selectByIndexes([ index ]);
  }

  public groupBy(prop: string): void {
    if (!prop) { return; }
    if (prop !== this.groupedProp) {
      console.log('group by', prop)
      this.groupedProp = prop;
      this.masterTable?.clearGrouping()
      this.masterTable?.updateColumn(prop, 'groupIndex', 0);
    }    
  }

  public getDateString(val: Nullable<Date>): string {
    if (val) {
      return getDateString(val);
    }
    return '';
  }

  public tableReadyHandler(e: any): void {
    if (this.deviceType !== DeviceTypes.MOBILE) {
      const selectedKeys: number[] = e.component.getSelectedRowKeys();
      if (selectedKeys.length < 1) {
        // e.component.selectRowsByIndexes([0]);
        // e.component.getScrollable().scrollTo(0);
      } 
    }
  }
}