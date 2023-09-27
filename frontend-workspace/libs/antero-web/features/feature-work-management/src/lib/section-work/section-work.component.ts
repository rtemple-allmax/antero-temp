import { SectionBaseComponent } from '@allmax-angular/antero-web/bases';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { WorkDataTypes } from '../types/work-data-types.enum';
import { WorkStatePropNames } from '../types/store.schema';
import { WorkHistory, WorkOrder, WorkRequest, WorkTemplate } from '@allmax-angular/antero-web/entities';
import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { MasterDetailComponent, MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { combineLatest } from 'rxjs';
import { Nullable } from '@allmax-angular/shared/types';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';

@Component({
  selector: 'ant-section-work',
  templateUrl: './section-work.component.html',
  styleUrls: ['./section-work.component.scss'],
})
export class SectionWorkComponent extends SectionBaseComponent implements OnInit {
  public dataType: WorkDataTypes = WorkDataTypes.CURRENT;
  public dataTypes: typeof WorkDataTypes = WorkDataTypes;

  public ctrl = inject(CurrentWorkController);

  public selectedWorkOrders: WorkOrder[] = [];
  public selectedWorkOrder: Nullable<WorkOrder>;
  public selectedWorkRequest: Nullable<WorkRequest>;
  public selectedWorkTemplate: Nullable<WorkTemplate>;
  public selectedWorkHistory: Nullable<WorkHistory>;

  public dataTypeItems = [
    {
      text: WorkDataTypes.REQUEST,
      template: 'contextMenuItemTemplate',
      onItemClick: () => this.switchDataTypes(WorkDataTypes.REQUEST)
    },
    {
      text: WorkDataTypes.CURRENT,
      template: 'contextMenuItemTemplate',
      onItemClick: () => this.switchDataTypes(WorkDataTypes.CURRENT)
    },
    {
      text: WorkDataTypes.MY_WORK,
      template: 'contextMenuItemTemplate',
      onItemClick: () => this.switchDataTypes(WorkDataTypes.MY_WORK)
    },
    {
      text: WorkDataTypes.REVIEW,
      template: 'contextMenuItemTemplate',
      onItemClick: () => this.switchDataTypes(WorkDataTypes.REVIEW)
    },
    {
      text: WorkDataTypes.HISTORY,
      template: 'contextMenuItemTemplate',
      onItemClick: () => this.switchDataTypes(WorkDataTypes.HISTORY)
    },
    {
      text: WorkDataTypes.SAVED,
      template: 'contextMenuItemTemplate',
      onItemClick: () => this.switchDataTypes(WorkDataTypes.SAVED)
    },
  ];

  public get sectionName(): string {
    return `Work Management (${ this.dataType })`;
  }
  
  public override ngOnInit(): void {
    super.ngOnInit();
    this.getData();
    const workStore = this.state.getStore(DataStores.WORK);
    const uiStore = this.state.getStore(DataStores.UI);
    if (workStore && uiStore) {
      combineLatest([
        workStore.observe(WorkStatePropNames.SELECTED_WORK_DATA_TYPE),
        workStore.observe(WorkStatePropNames.SELECTED_WORK_ORDERS),
        workStore.observe(WorkStatePropNames.SELECTED_WORK_REQUEST),
        workStore.observe(WorkStatePropNames.SELECTED_WORK_TEMPLATE),
        workStore.observe(WorkStatePropNames.SELECTED_WORK_HISTORY),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        type,
        workOrders,
        workRequest,
        workTemplate,
        workHistory,
        view
      ]) => {
        const prevType = this.dataType;
        const prevView = this.viewType;

        this.viewType = view;
        
        this.dataType = type || WorkDataTypes.CURRENT;
        this.dataType === WorkDataTypes.CURRENT ? this.selectedWorkOrders = workOrders || [] : [];
        
        (this.dataType === WorkDataTypes.CURRENT ||
          this.dataType === WorkDataTypes.MY_WORK ||
          this.dataType === WorkDataTypes.REVIEW)
        && workOrders ?
        this.selectedWorkOrder = (workOrders[0] as WorkOrder) :
        this.selectedWorkOrder = null;

        this.dataType === WorkDataTypes.REQUEST ? this.selectedWorkRequest = workRequest : this.selectedWorkRequest = null;
        this.dataType === WorkDataTypes.SAVED ? this.selectedWorkTemplate = workTemplate : this.selectedWorkTemplate = null;
        this.dataType === WorkDataTypes.HISTORY ? this.selectedWorkHistory = workHistory : this.selectedWorkHistory = null;
        if (this.dataType !== prevType || this.viewType !== prevView) {
          this.getData();
        }
      })
    }
    this.cdr.detectChanges();
  }
  
  public switchDataTypes(type: WorkDataTypes): void {
    this.state.getStore(DataStores.WORK)?.setValue(WorkStatePropNames.SELECTED_WORK_DATA_TYPE, type);
    this.view?.table?.deselectAll();
  }

  public async getData(): Promise<void> {
    switch(this.dataType) {
      case WorkDataTypes.CURRENT:
        this.getCurrentWorkData();
        break;
      case WorkDataTypes.HISTORY:
        this.getWorkHistoryData();
        break;
      case WorkDataTypes.MY_WORK:
        this.getMyWorkData();
        break;
      case WorkDataTypes.SAVED:
        this.getSavedWorkOrders();
        break;
      case WorkDataTypes.REQUEST:
        this.getRequests();
        break;
      case WorkDataTypes.REVIEW:
        this.getReviewWorkData();
        break;
    }
  }

  public async getCurrentWorkData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getWorkOrders(['workOrderNumber']);
      this.data?.colDef?.findByDataField('workOrderNumber')?.updateOptions({cellTemplate: 'cellTemplate', caption: 'Work Order'});
    } else {
      this.data = await this.ctrl.getWorkOrders([]);
    }
  }

  public async getMyWorkData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getMyWork(['workOrderNumber']);
      this.data?.colDef?.findByDataField('workOrderNumber')?.updateOptions({cellTemplate: 'cellTemplate', caption: 'Work Order'});
    } else {
      this.data = await this.ctrl.getMyWork([]);
    }
  }

  public async getReviewWorkData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getWorkOrders_Review(['workOrderNumber']);
      this.data?.colDef?.findByDataField('workOrderNumber')?.updateOptions({cellTemplate: 'cellTemplate', caption: 'Work Order'});
    } else {
      this.data = await this.ctrl.getWorkOrders_Review([]);
    }
  }

  public async getWorkHistoryData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getWorkHistory(['workOrderNumber']);
      this.data?.colDef?.findByDataField('workOrderNumber')?.updateOptions({cellTemplate: 'cellTemplate',caption: 'Work History' });
    } else {
      this.data = await this.ctrl.getWorkHistory([]);
    }
  }
  
  public async getSavedWorkOrders(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getSavedWorkOrders(['equipment.name']);
      this.data?.colDef?.findByDataField('equipment.name')?.updateOptions({cellTemplate: 'cellTemplate', caption: 'Saved Work Orders'});
    } else {
      this.data = await this.ctrl.getSavedWorkOrders([]);
    }
  }

  public async getRequests(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getWorkRequests([ 'dateSubmitted' ]);
      this.data?.colDef?.findByDataField('dateSubmitted')?.updateOptions({cellTemplate: 'cellTemplate', caption: 'Work Requests'});
    } else {
      this.data = await this.ctrl.getWorkRequests([]);
    }
  }

  public selectionChangedHandler(selection: WorkOrder[] | WorkOrder | WorkTemplate | WorkHistory | WorkRequest): void {
    switch(this.dataType) {
      case WorkDataTypes.REQUEST:
        this.selectWorkRequest(selection as WorkRequest);
        break;
      case WorkDataTypes.SAVED:
        this.selectWorkTemplate(selection as WorkTemplate);
        break;
      case WorkDataTypes.CURRENT:
        this.selectWorkOrders(selection as WorkOrder[]); 
        break;
      case WorkDataTypes.MY_WORK:
      case WorkDataTypes.REVIEW:
        this.selectWorkOrders([ selection as WorkOrder ]);
        break;
      case WorkDataTypes.HISTORY:
        this.selectWorkHistory(selection as WorkHistory);
        break;
    }
  }

  public selectWorkOrders(records: WorkOrder[]): void {
    this.state.getStore(DataStores.WORK)?.setValue(WorkStatePropNames.SELECTED_WORK_ORDERS, records);
  }

  public selectWorkHistory(record: WorkHistory): void {
    this.state.getStore(DataStores.WORK)?.setValue(WorkStatePropNames.SELECTED_WORK_HISTORY, record);
  }

  public selectWorkRequest(record: WorkRequest): void {
    this.state.getStore(DataStores.WORK)?.setValue(WorkStatePropNames.SELECTED_WORK_REQUEST, record);
  }

  public selectWorkTemplate(record: WorkTemplate): void {
    this.state.getStore(DataStores.WORK)?.setValue(WorkStatePropNames.SELECTED_WORK_TEMPLATE, record);
  }

  public openAdd(): void {
    console.log()
  }

  public contextMenuHandler(e: any): void {
    const record = e.row.data;
    e.items = [];
    this.selectionChangedHandler(record);
  }
}
