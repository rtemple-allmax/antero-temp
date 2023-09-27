import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { WorkManagementControllerService } from '@allmax-angular/antero-web/data-access/work-management-controller'
import { DeviceTypes, Nullable, TableData } from '@allmax-angular/shared/types';
import { allIcons, eqSectionIcons, miscIcons, thickIcons, toolbarIcons, workOrderIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailComponent, MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MaintenanceGroup, Procedure, ProcedureStep, ProcedureStepEquipment, ProcedureStepInstrument, User, WorkOrder, WorkPriority, WorkStatus } from '@allmax-angular/antero-web/entities';
import { getDateString, unsubscribe } from '@allmax-angular/shared/utils';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { TabsComponent } from '@allmax-angular/shared/ui/tabs';
import { Modals, PredefinedColors, predefinedColorsToColorMap, predefinedColorsToColorsMap, ProcedureData, WorkOrderData } from '@allmax-angular/antero-web/types';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { NotificationsService } from '@allmax-angular/shared/ui/notifications';
import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import DataSource from 'devextreme/data/data_source';
import { UserController } from '@allmax-angular/antero-web/data-access/user-controller';
import { DataSourceConfiguratorService, DateService } from '@allmax-angular/shared/services';
import { MocksService } from '@allmax-angular/antero-web/services/mocks';
import { UIStoreService } from '@allmax-angular/antero-web/state-management/ui-store'

enum SwitchValues {
  WORK_ORDERS = 'Work Orders',
  PROCEDURES = 'Procedures'
}

enum DueDateOptions {
  DELINQUENT,
  NO_DATE,
  HAS_DATE,
  TODAY,
  TOMORROW,
  WEEK,
  NEXT_7,
  MONTH,
  NEXT_30,
  NEXT_60,
  NEXT_90,
  NEXT_365
}

enum FiltersByName {
  ASSIGNED_TO,
  DUE_DATE,
  PRIORITY,
  STATUS
}

@Component({
  selector: 'ant-section-work-management',
  templateUrl: './section-work-management.component.html',
  styles: [`
    .dropdown-item {
      background-color: white;
      outline: 0;
      padding: var(--space-md);
      white-space: nowrap;
      border: 1px solid #bbb;
      cursor: pointer;
      position: relative; 
    }

    .dropdown-item:hover {
      background-color: var(--highlight-color);
    }

    .details {
      height: calc(100vh - 82px);
      padding: var(--space-md);
    }

    .statusIcon {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid #aaa;
    }

    .cell-more {
      opacity: 0;
    }

    .cell-more.hovered {
      opacity: 1
    }
  `]
})
export class SectionWorkManagementComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MasterDetailComponent) public view: Nullable<MasterDetailComponent>;
  @ViewChild(TabsComponent) public tabs: Nullable<TabsComponent>;

  private subs: Subscription[] = [];

  public selectedWOIDs: number[] = [];
  public selectedProcedureIDs: number[] = [];

  public data: Nullable<TableData>;

  public masterTable: Nullable<DataTableComponent>;

  public viewType = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;
  
  public icons = { ...allIcons};

  public deviceType = DeviceTypes.UNSET;
  public deviceTypes: typeof DeviceTypes = DeviceTypes;

  public selectedTabIndex = 0;
  public hoveredID = -1;

  public selectedSwitchValue = SwitchValues.WORK_ORDERS;
  public switchValues: typeof SwitchValues = SwitchValues;

  public workOrderData: Nullable<WorkOrderData>;
  public procedureData: Nullable<ProcedureData>;

  public pSteps: ProcedureStep[] = [];
  
  public selectedStep: Nullable<ProcedureStep>;
  public selectedStepInstruments: ProcedureStepInstrument[] = [];
  public selectedStepEquipment: ProcedureStepEquipment[] = [];
  
  public modal = Modals.NONE;
  public modals: typeof Modals = Modals;

  public draggingIndex: Nullable<number>;

  public filteredUsers: User[] = [];
  public userFilterDataSource: Nullable<DataSource>;

  public filteredMaintenaceGroup: MaintenanceGroup[] = [];
  public maintenanceGroupFilterDataSource: Nullable<DataSource>;

  public filteredDueDates: any[] = [];
  public dueDateFilterDataSource: Nullable<DataSource>;

  public filteredPriorities: any[] = [];
  public priorityFilterDataSource: Nullable<DataSource>;

  public filteredStatuses: any[] = [];
  public statusFilterDataSource: Nullable<DataSource>;

  public filters: typeof FiltersByName = FiltersByName;

  public ds: Nullable<DataSource>;
  public columns: any[] = [];

  public dueDates: any[] = [
    { name: 'Delinquent', id: DueDateOptions.DELINQUENT },
    { name: 'No Date Set', id: DueDateOptions.NO_DATE },
    { name: 'Has Date Set', id: DueDateOptions.HAS_DATE },
    { name: 'Today', id: DueDateOptions.TODAY },
    { name: 'Tomorrow', id: DueDateOptions.TOMORROW },
    { name: 'This Week', id: DueDateOptions.WEEK },
    { name: 'Next 7 Days', id: DueDateOptions.NEXT_7 },
    { name: 'This Month', id: DueDateOptions.MONTH },
    { name: 'Next 30 Days', id: DueDateOptions.NEXT_30 },
    { name: 'Next 60 Days', id: DueDateOptions.NEXT_60 },
    { name: 'Next 90 Days', id: DueDateOptions.NEXT_90 },
    { name: 'Next 365 Days', id: DueDateOptions.NEXT_365 },
  ];
  
  public get uiSwitchValues(): [ string, string ] {
    return [
      SwitchValues.WORK_ORDERS,
      SwitchValues.PROCEDURES
    ]
  }

  public get detailButtonTransform(): string {
    return this.view?.drawer?.isOpen ? 'rotate(180deg)': 'rotate(0)';
  }

  public get requiredInstrumentsLabel(): string {
    if (!this.workOrderData?.wo?.remainingRequiredInstrumentsCount ||
      this.workOrderData?.wo?.remainingRequiredInstrumentsCount < 1) { return ''; }

    return `${ this.workOrderData?.wo?.remainingRequiredInstrumentsCount } required Instruments need values.`
  }

  public get laborLabel(): string {
    return `Labor (${ this.workOrderData?.labor?.length || 0})`;
  }

  public get partsLabel(): string {
    return `Parts (${ this.workOrderData?.parts?.length || 0})`;
  }

  public get contractorsLabel(): string {
    return `Contractors (${ this.workOrderData?.suppliers?.length || 0})`;
  }

  public get toolsLabel(): string {
    return `Tools (${ this.workOrderData?.equipment?.length || 0})`;
  }

  public get miscLabel(): string {
    return `Misc (${ this.workOrderData?.misc?.length || 0})`;
  }

  public get tabHeight(): string {
    return 'calc(100vh - 193px)'
  }

  public get detailButtonRotation(): string {
    return this.view?.drawer?.isOpen ? '180deg': '0deg';
  }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private currentWorkController: CurrentWorkController,
    private currentWorkStore: CurrentWorkStoreService,
    private notifications: NotificationsService,
    private userCtrl: UserController,
    private datasources: DataSourceConfiguratorService,
    private dates: DateService,
    public mocks: MocksService,
    private uiStore: UIStoreService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.selectedSwitchValue = SwitchValues.WORK_ORDERS;
    this.subs.push(this.currentWorkStore.selectedWorkOrderIDs$.subscribe(x => { this.selectedWOIDs = x; }));
    this.subs.push(this.appStore.deviceType$.subscribe(x => this.deviceType = x));
    this.subs.push(this.appStore.modal$.subscribe(x => this.modal = x));
    this.subs.push(this.currentWorkStore.woData$.subscribe(x => this.workOrderData = x));
    this.subs.push(this.appStore.refresh$.subscribe(async (x) => {
      if (x) {
        await this.getData();
        if (this.selectedWOIDs.length > 0) {
          await this.currentWorkController.getWorkOrderData(this.selectedWOIDs[0])
        }
        this.appStore.refresh = false;
      }
    }))
  }

  public ngAfterViewInit(): void {
    if (this.view) {
      this.subs.push(this.view.table$.subscribe(x => this.masterTable = x));
    }

    this.subs.push(this.uiStore.masterDetailViewType$.subscribe(x => {
      this.viewType = x;
      this.getData();
    }));

    if (this.tabs) {
      this.subs.push(this.tabs.currentIndex$.subscribe(x => this.selectedTabIndex = x));
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public openEditMultiWOs(): void {
    this.antero.openModal(Modals.WORK_ORDER_EDIT_MULTIPLE)
  }

  public async toggleView(type: MasterDetailViewTypes): Promise<void> {
    this.viewType = type;
    if (this.view) {
      this.view.viewType = type;
      this.getData()
    }
  }

  public toggleDetail(): void {
    this.view?.toggleDetails()
  }

  // public async toggleView(type: MasterDetailViewTypes): Promise<void> {
  //   if (this.view) {
  //     this.view.viewType = type;
  //     if (this.viewType === MasterDetailViewTypes.LIST) {
  //       this.view.viewType = MasterDetailViewTypes.TABLE;
  //       this.getData();
  //     } else {
  //       this.view.viewType = MasterDetailViewTypes.LIST;
  //       this.getData();
  //     }
  //   }
  // }

  public openDetail(): void {
    this.view?.openDetail()
  }

  public notify(): void {
    this.notifications.notify('Test');
  }

  public showColumnChooser(): void {
    this.masterTable?.showColumnChooser();
  }

  public async selectionHandler(selection: any[] = []): Promise<void> {
    if (this.selectedSwitchValue === SwitchValues.WORK_ORDERS) {
      this.currentWorkStore.selectedWorkOrderIDs = selection.map(x => x.id);
      if (selection.length === 1) {
        await this.currentWorkController.getWorkOrderData(selection[0].id)
      }
      if (this.viewType === MasterDetailViewTypes.LIST) {
        // this.currentWorkStore.selectedWorkOrderIDs = [ (selection as WorkOrder).id ];
        // await this.currentWorkController.getWorkOrderData((selection as WorkOrder).id)
      } else {
        this.currentWorkStore.selectedWorkOrderIDs = (selection as WorkOrder[]).map(x => x.id);
        if ((selection as WorkOrder[]).length > 0) {
          await this.currentWorkController.getWorkOrderData((selection as WorkOrder[])[0].id)
        }
      }
      // if (this.deviceType === DeviceTypes.MOBILE) {
      //   this.antero.openModal(Modals.WORK_ORDER_VIEWER)
      // }
    } else {
      this.selectedProcedureIDs = selection.map(x => x.id);
      if (selection.length === 1) {
        this.pSteps = await this.currentWorkController.getProcedureSteps(selection[0].id);
      }
    }
  }
  
  public selectStep(step: any): void {
    this.selectedStep = step;
  }

  public toggleChange(value: Nullable<string>): void {
    if (value) {
      this.selectedSwitchValue = value === SwitchValues.PROCEDURES ? SwitchValues.PROCEDURES : SwitchValues.WORK_ORDERS;
      this.getData();
    }
  }

  public async getData(): Promise<void> {
    if (this.selectedSwitchValue === SwitchValues.WORK_ORDERS) {
      if (this.view?.viewType === MasterDetailViewTypes.LIST) {
        this.data = await this.currentWorkController.get(['workOrderNumber']);
        this.data.colDef?.findByDataField('workOrderNumber')?.updateOptions({
          cellTemplate: 'cellTemplate',
          caption: 'Work Order'
        });
      } else {
        this.data = await this.currentWorkController.get([]);
      }
    } else {
      if (this.view?.viewType === MasterDetailViewTypes.LIST) {
        this.data = await this.currentWorkController.getProcedures(['procedureNumber']);
        this.data.colDef?.findByDataField('procedureNumber')?.updateOptions({
          cellTemplate: 'cellTemplate',
          caption: 'Procedure'
        });
      } else {
        this.data = await this.currentWorkController.getProcedures([]);
      }
    }
  }

  public searchHandler(term: string): void {
    this.masterTable?.searchTermChangedHandler(term);
  }

  public searchDownArrowHandler(): void {
    // console.log('master table', this.masterTable)
    this.masterTable?.selectByIndexes([0]);
    this.masterTable?.focusIndex(0)
  }

  public getDateString(val: any): string {
    return getDateString(val);
  }

  public showInViewer(): void {
    if (this.selectedSwitchValue === SwitchValues.WORK_ORDERS) {
      this.antero.openModal(Modals.WORK_ORDER_VIEWER);
    } else {
      this.antero.openModal(Modals.PROCEDURE_VIEWER);
    }
  }

  public openCompleteForm(): void {
    this.antero.openModal(Modals.WORK_ORDER_COMPLETE)
  }

  public openWorkLists(): void {
    this.antero.openModal(Modals.WORK_LISTS)
  }

  public onDragStart(index: number): void {
    this.draggingIndex = index;
  }

  public onDragOver(index: number): void {
    if (this.draggingIndex !== null && this.draggingIndex !== undefined && this.draggingIndex !== index) {
      this.reorderItem(this.draggingIndex, index);
    }
  }

  public onDragEnd(): void {
    this.draggingIndex = undefined;
  }

  private reorderItem(fromIndex: number, toIndex: number): void {
    const itemToBeReordered = this.pSteps.splice(fromIndex, 1)[0];
    this.pSteps.splice(toIndex, 0, itemToBeReordered);
    this.draggingIndex = toIndex;
  }

  public async populateUserFilter(): Promise<void> {
    const users = await this.userCtrl.getAllUsers();
    if (users) {
      this.userFilterDataSource = this.datasources.createFromArray(users, 'id');
    }
    const groups = await this.currentWorkController.getAllMaintenaceGroups();
    if (groups) {
      this.maintenanceGroupFilterDataSource = this.datasources.createFromArray(groups, 'id');
    } 
  }

  public userFilterSelectionChanged(selected: User[]): void {
    this.filteredUsers = selected;
    this.simpleFilter();
  }

  public populateDueDateFilter(): void {
    this.dueDateFilterDataSource = this.datasources.createFromArray(this.dueDates, 'id' )
  }

  public dueDateSelectionChanged(selected: any): void {
    this.filteredDueDates = [ selected ];
    this.simpleFilter();
  }

  public async populatePriorityFilter(): Promise<void> {
    const priorities = await this.currentWorkController.getAllWorkPriorities();
    if (priorities) {
      this.priorityFilterDataSource = this.datasources.createFromArray(priorities, 'id');
    }
  }

  public priorityFilterSelectionChanged(selection: WorkPriority[]): void {
    this.filteredPriorities = selection;
    this.simpleFilter();
  }

  public async populateStatusFilter(): Promise<void> {
    const statuses = await this.currentWorkController.getAllStatuses();
    if (statuses) {
      this.statusFilterDataSource = this.datasources.createFromArray(statuses, 'id');
    }
  }

  public statusFilterSelectionChanged(selected: WorkStatus[]): void {
    this.filteredStatuses = selected;
    this.simpleFilter();
  }

  public getStatusColor(color: PredefinedColors): string {
    return predefinedColorsToColorsMap.get(color) || '';
  }

  public simpleFilter(): void {
    if (!this.masterTable) { return; }
    const filter: any[] = []
    this.filteredPriorities.forEach((x, i) => {
      filter.push([ 'workPriority.name', '=', x.name ]);
      if (i !== this.filteredPriorities.length - 1) {
        filter.push('or');
      }
    });
    this.filteredStatuses.forEach((x, i) => {
      filter.push([ 'workStatus.name', '=', x.name ]);
      if (i !== this.filteredStatuses.length - 1) {
        filter.push('or');
      }
    });

    if (this.filteredDueDates.length === 1) {
      const f = this.handleDueDateFilter();
      if (f.length > 0) {
        filter.push(f)
      }
    }
    this.masterTable.filter(filter);
  }

  public handleDueDateFilter(): any[] {
    const today = this.dates.today();
    const choice = this.filteredDueDates[0];
    if (choice) {
      switch (choice.id) {
        case DueDateOptions.DELINQUENT:
          return [ 'isDelinquent', '=', true ];
        case DueDateOptions.HAS_DATE:
          return [ '!', [ 'dateDelinquent', '=', null ] ];
        case DueDateOptions.MONTH: {
          const start = this.dates.startOfMonth();
          const end = this.dates.endOfMonth();
          return [ [ 'dateDelinquent', '>=', start ], [ 'dateDelinquent', '<=', end ] ];
        }
        case DueDateOptions.NEXT_30: {
          const days30 = this.dates.afterToday(30) 
          return [ [ 'dateDelinquent', '>=', today ], [ 'dateDelinquent', '<=', days30 ] ];
        }
        case DueDateOptions.NEXT_365: {
          const days365 = this.dates.afterToday(365) 
          return [ [ 'dateDelinquent', '>=', today ], [ 'dateDelinquent', '<=', days365 ] ];
        }
        case DueDateOptions.NEXT_60: { 
          const days60 = this.dates.afterToday(60) 
          return [ [ 'dateDelinquent', '>=', today ], [ 'dateDelinquent', '<=', days60 ] ];
        }
        case DueDateOptions.NEXT_7: {
          const days7 = this.dates.afterToday(7) 
          return [ [ 'dateDelinquent', '>=', today ], [ 'dateDelinquent', '<=', days7 ] ];
        }
        case DueDateOptions.NEXT_90: {
          const days90 = this.dates.afterToday(90) 
          return [ [ 'dateDelinquent', '>=', today ], [ 'dateDelinquent', '<=', days90 ] ];
        }
        case DueDateOptions.NO_DATE:
          return [ 'dateDelinquent', '=', null ];
        case DueDateOptions.TODAY:
          return [ 'dateDelinquent', '=', today ];
        case DueDateOptions.TOMORROW: {
          return [ 'dateDelinquent', '=', this.dates.afterToday(1) ];
        }
        case DueDateOptions.WEEK: {
          const start = this.dates.startOfWeek();
          const end = this.dates.endOfWeek();
          return [ [ 'dateDelinquent', '>=', start ], [ 'dateDelinquent', '<=', end ] ];
        }
      }
    }
    return [];
  }

  public clearSimpleFilter(): void {
    this.filteredDueDates = [];
    this.filteredMaintenaceGroup = [];
    this.filteredPriorities = [];
    this.filteredStatuses = [];
    this.filteredUsers = [];
    this.simpleFilter();
  }

  public clearFilterByName(name: FiltersByName): void {
    switch(name) {
      case FiltersByName.ASSIGNED_TO:
        this.filteredMaintenaceGroup = [];
        this.filteredUsers = [];
        break;
      case FiltersByName.DUE_DATE:
        this.filteredDueDates = [];
        break;
      case FiltersByName.PRIORITY:
        this.filteredPriorities = [];
        break;
      case FiltersByName.STATUS:
        this.filteredStatuses = [];
        break;
    }
    this.simpleFilter();
  }

  public logTemplate(data: any): void {
    console.log('template', data)
  }

  public getRandowColor(): string {
    const r = Math.floor(Math.random() * (255 - 0) + 0);
    const g = Math.floor(Math.random() * (255 - 0) + 0);
    const b = Math.floor(Math.random() * (255 - 0) + 0);
    return `rgb(${ r }, ${ g }, ${ b })`
  }

  public getWorkStatusBGColor(colorID: PredefinedColors): string {
    return predefinedColorsToColorMap.get(colorID)?.hex || 'transparent';
  }

  public mouseenterHandler(id: number) {
    if (id > 0) {
      this.hoveredID = id;
    }
  }

  public mouseleaveHandler(id: number) {
    if (id === this.hoveredID) {
      this.hoveredID = -1;
    }
  }
}
