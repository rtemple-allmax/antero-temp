import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { WorkOrderInstrument, WorkOrderLabor, WorkOrderPart, WorkOrderSupplier, WorkStatus } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { ChecklistItem, Modals, PredefinedColors, predefinedColorsToColorsMap, WorkOrderData } from '@allmax-angular/antero-web/types';
import { AddWorkOrderLaborEventArgs, AddWorkOrderPartEventArgs } from '@allmax-angular/antero-web/ui/work-order-modals';
import { DataSourceConfiguratorService } from '@allmax-angular/shared/services';
import { CrudFunctions, DeviceTypes, Nullable, SecurityLevels } from '@allmax-angular/shared/types';
import { AccordionContainerComponent } from '@allmax-angular/shared/ui/accordion';
import { eqSectionIcons, miscIcons, toolbarIcons, workOrderIcons } from '@allmax-angular/shared/ui/icons';
import { TabsComponent } from '@allmax-angular/shared/ui/tabs';
import { getDateString, propHasValue, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DxScrollViewComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-order-viewer',
  templateUrl: './work-order-viewer.component.html',
  styles: [],
})
export class WorkOrderViewerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(TabsComponent) public tabs: Nullable<TabsComponent>;
  @ViewChild(AccordionContainerComponent) public accordion: Nullable<AccordionContainerComponent>;
  @ViewChild('mobileScroll') public scroller: Nullable<DxScrollViewComponent>;

  private subs: Subscription[] = [];

  public panelIndex = 0;
  public icons = { ...workOrderIcons, ...toolbarIcons, ...eqSectionIcons, ...miscIcons };
  public data: Nullable<WorkOrderData>;

  public modals: typeof Modals = Modals;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;

  public deviceTypes: typeof DeviceTypes = DeviceTypes;

  public height = '800px'
  public width = '60vw'

  public filteredStatuses: any[] = [];
  public statusFilterDataSource: Nullable<DataSource>;

  public selectedInstrument: Nullable<WorkOrderInstrument>;
  public selectedPart: Nullable<WorkOrderPart>;
  public selectedLabor: Nullable<WorkOrderLabor>;
  public selectedContractor: Nullable<WorkOrderSupplier>;

  public deviceType = DeviceTypes.DESKTOP;

  public statuses: WorkStatus[] = [];

  public get tabHeight(): string {
    return `calc(${ this.height } - 40px)`
  }

  public get panelHeight(): string {
    return `calc(${ this.tabHeight } - 65px)`
  }

  public get mobileInnerHeight(): string {
    return `calc(${ this.height } - var(--space-lg))`
  }

  public get partsLabel(): string {
    return `Parts (${ this.data?.parts?.length || 0 })`;
  }

  public get laborLabel(): string {
    return `Labor (${ this.data?.labor?.length || 0 })`;
  }

  public get contractorsLabel(): string {
    return `Contractors (${ this.data?.suppliers?.length || 0})`;
  }

  public get toolsLabel(): string {
    return `Tools (${ this.data?.equipment?.length || 0})`;
  }

  public get miscLabel(): string {
    return `Misc (${ this.data?.misc?.length || 0 })`;
  }

  public security: SecurityLevels = SecurityLevels.NoAccess;
  
  constructor(
    private antero: AnteroService,
    private anteroStore: AnteroStoreService,
    private cdr: ChangeDetectorRef,
    private ctrl: CurrentWorkController,
    private workStore: CurrentWorkStoreService,
    private datasources: DataSourceConfiguratorService
  ) { }

  public async ngOnInit(): Promise<void> {
    this.subs.push(this.workStore.woData$.subscribe(x => this.data = x));
    this.subs.push(this.anteroStore.permissions$.subscribe(x => this.security = x?.roles[0]?.workManager));
    this.subs.push(this.anteroStore.deviceType$.subscribe(x => {
      this.deviceType = x;
      if (this.deviceType === DeviceTypes.DESKTOP) {
        this.height = '788px';
        this.width = '60vw'
      } else {
        this.height = '90vh'
        this.width = '95vw';
      }
    }));
    this.subs.push(this.workStore.refreshViewer$.subscribe(async (x) => {
      if (x && this.data?.wo) {
        await this.getWorkOrderDataByID(this.data.wo?.id);
        this.workStore.refreshViewer = false;
      }
    }))
    this.populateStatusFilter();
    this.statuses = await this.ctrl.getAllStatuses();

  }

  public ngAfterViewInit(): void {
    if (this.tabs ) {
      this.subs.push(this.tabs.currentIndex$.subscribe(x => {
        // console.log('panel index', this.panelIndex)
        this.panelIndex = x;
        this.cdr.detectChanges();
      }));
    }

    // if (this.accordion) {
    //   this.subs.push(this.accordion.currentIndex$.subscribe(x => {
    //     this.panelIndex = x;
    //     if (this.scroller) {
    //       this.scroller.instance.scrollTo(x * 37);
    //     }
    //     this.cdr.detectChanges();
    //   }));
    // }
  }
  
  public ngOnDestroy(): void {
    unsubscribe(this.subs);
    this.cdr.detach();
  }

  public async getWorkOrderDataByID(id: number): Promise<void> {
    await this.ctrl.getWorkOrderData(id);
  }

  public propHasValue(parent: any, name: string): boolean {
    return propHasValue(parent, name);
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public getDateString(val: any): string {
    return getDateString(val);
  }

  public openModal(modal: Modals, crud: CrudFunctions = CrudFunctions.READ): void {
    this.antero.openModal(modal, crud);
  }

  // public closeModals(): void {
  //   this.anteroStore.crud = CrudFunctions.READ;
  //   this.workStore.workOrderModal = WorkOrderModals.NONE;
  // }

  

  public readingUpdatedHandler(record: WorkOrderInstrument): void {
    if (this.data?.instruments) {
      const index = this.data.instruments.lastIndexOf(record);
      if (index >= 0) {
        this.data.instruments[index] = record;
      }
      this.antero.closeModal();
    }
  }

  public selectPart(record: WorkOrderPart): void {
    this.selectedPart = record;
    this.antero.openModal(Modals.WORK_ORDER_ADD_EDIT_PART, CrudFunctions.UPDATE);
  }

  public addPartRequestHandler(args: AddWorkOrderPartEventArgs): void {
    this.antero.closeModal();
  }

  public editPartRequestHandler(record: WorkOrderPart): void {
    this.antero.closeModal();
  }

  public deletePartRequestHandler(record: WorkOrderPart): void {
    this.antero.closeModal();
  }

  public selectLabor(record: WorkOrderLabor): void {
    this.selectedLabor = record;
    this.antero.openModal(Modals.WORK_ORDER_ADD_EDIT_LABOR, CrudFunctions.UPDATE);
  }

  public addLaborRequestHandler(args: AddWorkOrderLaborEventArgs): void {
    this.antero.closeModal();
  }

  public editLaborRequestHandler(record: WorkOrderLabor): void {
    this.antero.closeModal();
  }

  public deleteLaborRequestHandler(record: WorkOrderLabor): void {
    this.antero.closeModal();
  }

  public selectContractor(record: WorkOrderSupplier): void {
    this.selectedContractor = record;
    this.antero.openModal(Modals.WORK_ORDER_ADD_EDIT_SUPPLIER, CrudFunctions.UPDATE);
  }

  public checklistUpdatedHandler(list: ChecklistItem[]): void {
    if (this.data?.wo?.task) {
      this.data.wo.task.checklist = list;
    }
  }

  public async populateStatusFilter(): Promise<void> {
    const statuses = await this.ctrl.getAllStatuses();
    if (statuses) {
      this.statusFilterDataSource = this.datasources.createFromArray(statuses, 'id');
    }
  }

  public statusFilterSelectionChanged(selected: WorkStatus[]): void {
    this.filteredStatuses = selected;
    // this.simpleFilter();
  }

  public getStatusColor(color: PredefinedColors): string {
    return predefinedColorsToColorsMap.get(color) || '';
  }

  public clear(): void {
    this.filteredStatuses = [];
  }
}
