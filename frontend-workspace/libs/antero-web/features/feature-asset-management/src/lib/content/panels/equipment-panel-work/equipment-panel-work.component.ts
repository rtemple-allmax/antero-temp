import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { Equipment, WorkOrder } from '@allmax-angular/antero-web/entities';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { Component, OnInit, ViewChild, Input, inject } from '@angular/core';
import { combineLatest } from 'rxjs';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { ViewersService } from '@allmax-angular/antero-web/services/viewers-service';
import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { getDateString } from '@allmax-angular/shared/utils';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';

@Component({
  selector: 'ant-equipment-panel-work',
  templateUrl: './equipment-panel-work.component.html',
  styleUrls: ['./equipment-panel-work.component.scss'],
})
export class EquipmentPanelWorkComponent extends PanelBaseComponent implements OnInit {
  @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>;
  @Input() public height = '100%';

  public record: Nullable<Equipment>;
  public selection: Nullable<WorkOrder>;

  public viewers = inject(ViewersService);
  public eqCtrl = inject(EquipmentControllerService);
  public workCtrl = inject(CurrentWorkController);

  public workOrders: WorkOrder[] = [
    {
      id: 0,
      equipmentID: 0,
      taskID: 0,
      equipment: null,
      task: null,
      instructions: '',
      workOrderNumber: 137,
      maintenanceGroupID: 0,
      maintenanceGroup: null,
      assignedUserID: 0,
      assignedUser: null,
      workTemplateID: 0,
      workTemplate: null,
      workPriorityID: 0,
      workPriority: null,
      workTypeID: 0,
      workType: null,
      dateScheduled: new Date(),
      dateCreated: new Date(),
      dateCompleted: null,
      daysToComplete: 0,
      completedByID: 0,
      completedBy: null,
      createReason: '',
      createdByID: 0,
      createdBy: null,
      workOrderState: 0,
      workStatusID: 0,
      workStatus: null,
      needsAttention: false,
      needsAttentionText: '',
      downtimeStart: null,
      downtimeEnd: null,
      completedNotes: '',
      dueDate: null,
      isDue: false,
      isComplete: false,
      dateLastCompleted: null,
      estimatedHours: 0,
      remainingRequiredInstrumentsCount: 0,
      checklist: []
    }
  ]

  // public data: Nullable<TableData>;

  // public deviceType = DeviceTypes.UNSET;
  // public deviceTypes: typeof DeviceTypes = DeviceTypes;

  // public viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
  // public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  // public icons = { ...allIcons };

  // private subs: Subscription[] = [];

  // public state = inject(StateManagementService);
  
  public get innerHeight(): string {
    return `calc(${ this.height } - 58px)`
  }

  // constructor(
  //   private antero: AnteroService,
  //   private appStore: AnteroStoreService,
  //   private store: EquipmentSectionStore,
  //   private workCtrl: CurrentWorkController,
  //   private ctrl: EquipmentControllerService,
  //   private currentWorkStore: CurrentWorkStoreService,
  //   private uiStore: UIStoreService
  // ) { }

  public override ngOnInit(): void {
    super.ngOnInit();
    const eqStore = this.state.getStore(DataStores.EQUIPMENT);
    const uiStore = this.state.getStore(DataStores.UI);
    if (eqStore && uiStore) {
      const sub = combineLatest([
        eqStore.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        record,
        viewType
      ]) => {
        this.record = record;
        this.viewType = viewType;
        this.getData();
      });
      if (sub) {this.subs.push(sub); }
    }
    // this.subs.push(this.store.selection$.subscribe(x => {
    //   this.record = x;
    //   this.getData();
    // }));
    // this.subs.push(this.appStore.deviceType$.subscribe(x => {
    //   this.deviceType = x;
    //   this.getData();
    // }));
    // const sub = this.state.getStore(DataStores.UI)?.observe(UIStorePropNames.VIEW_TYPE).subscribe(x => {
    //   this.viewType = x;
    //   this.getData();
    // });
    // if (sub) {
    //   this.subs.push(sub);
    // }
  }

  // public ngOnDestroy(): void {
  //   unsubscribe(this.subs);
  // }

  public async workOrderSelectionChangeHandler(record: WorkOrder): Promise<void> {
    this.selection = record;
    if (this.selection) {
      await this.workCtrl.getWorkOrderData(this.selection.id)
      this.viewers.openWorkViewer(this.selection);
      // this.antero.openModal(Modals.WORK_ORDER_VIEWER);
    }
  }
  
  public convertDate(date: Nullable<Date | string>): string  {
    if (date) {
      return getDateString(date);
    }
    return '';
  }

  public showWorkViewer(record: WorkOrder): void {
    // this.currentWorkStore.selectedWorkOrderIDs = [ record.id ];
    this.viewers.openWorkViewer(record);
    // this.antero.openModal(Modals.WORK_ORDER_VIEWER);
  }

  public async getData(): Promise<void> {
    if (!this.record) { return; }
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.eqCtrl.getActiveWorkOrders(this.record.id, ['workOrderNumber']) as TableData;
    } else {
      this.data = await this.eqCtrl.getActiveWorkOrders(this.record.id, [
        'isDue',
        'needsAttention',
        'workOrderNumber',
        'task.name',
        'workType.name',
        'dateScheduled',
        'workStatus.name'
      ]) as TableData;
    }
    this.data?.colDef?.findByDataField('workOrderNumber')?.updateOptions({ cellTemplate: 'cellTemplate' });
   
  }

  public getShortDateString(date: Date): string {
    return getDateString(date)
  }

  public searchHandler(term: string): void {
    this.table?.searchTermChangedHandler(term);
  }
}
