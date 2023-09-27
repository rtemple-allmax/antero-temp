import { WorkSetupControllerService } from '@allmax-angular/antero-web/data-access/work-setup-controller';
import { WorkTemplate } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { WorkSetupSectionStore } from '@allmax-angular/antero-web/state-management/work-setup-store';
import { Modals } from '@allmax-angular/antero-web/types';
import { DeviceTypes, Nullable, TableData } from '@allmax-angular/shared/types';
import { eqSectionIcons, miscIcons, toolbarIcons, workOrderIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailComponent, MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { NotificationsService } from '@allmax-angular/shared/ui/notifications';
import { TabsComponent } from '@allmax-angular/shared/ui/tabs';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { UIStoreService } from '@allmax-angular/antero-web/state-management/ui-store'

enum SwitchValues {
  WORK_ORDERS = 'Work Orders',
  PROCEDURES = 'Procedures'
}

@Component({
  selector: 'ant-section-work-templates',
  templateUrl: './section-work-templates.component.html',
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

    .focused {
      background-color: var(--selected-color);
    }

    .truncate {
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 30ch;
      display: block;
      overflow: hidden;
    }

    .mobile-btn {
      background: transparent;
      color: white;
      border: 1px solid white;
      outline: 0;
      transition: all .2s ease-in-out;
      padding: var(--space-md) var(--space-lg);
    }

    .mobile-btn:hover {
      background: white;
      color: transparent;
    }
  `]
})
export class SectionWorkTemplatesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MasterDetailComponent) public view: Nullable<MasterDetailComponent>;
  @ViewChildren(TabsComponent) public tabsQuery: Nullable<QueryList<TabsComponent>>;

  private subs: Subscription[] = [];

  public selection: Nullable<WorkTemplate>;

  public data: Nullable<TableData>;
  public viewType = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;
  
  public deviceType = DeviceTypes.UNSET;
  public deviceTypes: typeof DeviceTypes = DeviceTypes;

  public icons = { ...toolbarIcons, ...miscIcons, ...eqSectionIcons, ...workOrderIcons };

  public selectedSwitchValue = SwitchValues.WORK_ORDERS;
  public switchValues: typeof SwitchValues = SwitchValues;

  public tabs: Nullable<TabsComponent>;
  public currentPanelIndex = 0;

  public get detailButtonTransform(): string {
    return this.view?.drawer?.isOpen ? 'rotate(180deg)': 'rotate(0)'
  }

  public get tabsHeight(): string {
    return this.viewType === MasterDetailViewTypes.LIST ? '100%' : 'calc(100vh - 100px)';
  } 

  public get initalColumns(): any[] {
    return this.viewType === this.viewTypes.LIST ? [ 'task.name' ] : [ ]
  }

  public get uiSwitchValues(): [ string, string ] {
    return [
      SwitchValues.WORK_ORDERS,
      SwitchValues.PROCEDURES
    ]
  }

  constructor(
    private antero: AnteroService,
    private ctrl: WorkSetupControllerService,
    private appStore: AnteroStoreService,
    private workSetupStore: WorkSetupSectionStore,
    private notifications: NotificationsService,
    private uiStore: UIStoreService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.appStore.deviceType$.subscribe(x => this.deviceType = x);
    this.subs.push(this.workSetupStore.selectedTemplate$.subscribe(x => this.selection = x));
    this.ctrl.initialize();
    this.data = await this.ctrl.getWorkTemplates(this.initalColumns);
    this.data.colDef?.findByDataField(this.initalColumns[0])?.updateOptions({ cellTemplate: 'cellTemplate', caption: 'Equipment & Task' });
  }

  public ngAfterViewInit(): void {
    if (this.view) {
      // this.subs.push(this.uiStore.masterDetailViewType$.subscribe(x => this.viewType = x));
    }

    if (this.tabsQuery) {
      this.tabs = this.tabsQuery.first;
      this.tabsQuery.changes.subscribe(x => {
        this.tabs = x.first;
        if (this.tabs) { this.subs.push(this.tabs.currentIndex$.subscribe(i => this.currentPanelIndex = i)); }
      })
      if (this.tabs) { this.subs.push(this.tabs.currentIndex$.subscribe(i => this.currentPanelIndex = i)); }
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
    this.ctrl.finalize();
  }

  public async toggleView(): Promise<void> {
    if (this.view) {
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.view.viewType = MasterDetailViewTypes.TABLE;
        this.data = await this.ctrl.getWorkTemplates(this.initalColumns);
        this.workSetupStore.selectedTemplate = null;
      } else {
        this.view.viewType = MasterDetailViewTypes.LIST;
        this.data = await this.ctrl.getWorkTemplates(this.initalColumns);
        this.data.colDef?.findByDataField(this.initalColumns[0])?.updateOptions({ cellTemplate: 'cellTemplate' });
        this.workSetupStore.selectedTemplate = null;
      }
    }
  }

  public toggleChange(state: boolean): void {
    if (state) {
      this.notifications.notify('The selected template WILL generate work orders.')
    } else {
      this.notifications.notify('The selected template WILL NOT generate work orders.')
    }
  }

  public openDetail(): void {
    this.view?.openDetail()
  }

  public selectionHandler(selection: WorkTemplate[]): void {
    if (selection.length === 1) {
      this.workSetupStore.selectedTemplate = selection[0];
    }
  }

  public openTaskList(): void {
    this.antero.openModal(Modals.TASKS_LIST);
  }
}
