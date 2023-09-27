import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
import { ApiResponse, ChecklistItem, WorkOrderData, WorkOrderFilter } from "@allmax-angular/antero-web/types";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { DataSourceConfig, Nullable, TableData, TimeFrameParams } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from "rxjs";
import { CurrentWorkStoreService } from "@allmax-angular/antero-web/state-management/current-work-store";
import { MaintenanceGroup, WorkOrder, WorkType, WorkStatus, WorkPriority, WorkOrderDocument, WorkOrderInstrument, WorkOrderPart, WorkOrderLabor, WorkOrderEquipment, WorkOrderSupplier } from "@allmax-angular/antero-web/entities";
import { EquipmentActivityColumnDefinition, EquipmentDocumentColumnDefinition, WorkHistoryColumnDefinition, WorkOrderColumnDefinition, WorkOrderEquipmentColumnDefinition, WorkOrderInstrumentColumnDefinition, WorkOrderLaborColumnDefinition, WorkOrderMiscColumnDefinition, WorkOrderPartColumnDefinition, WorkOrderSupplierColumnDefintition, WorkRequestColumnDefinition, WorkTemplateColumnDefinition } from "@allmax-angular/antero-web/column-definitions";
import { generateQueryStringFromObject } from "@allmax-angular/shared/utils";
import { nullValueText } from "devexpress-reporting/scopes/reporting-designer-controls-metadata";

enum Endpoints {
  GET_WORK_ORDERS = '/workmanagement/all',
  GET_WORK_HISTORY = '/workhistory/all',
  GET_MY_WORK = '/mywork/workordersbyfilter',
  GET_SAVED_WORK_ORDERS = '/worktemplate/all',
  GET_REVIEW_WORK_ORDERS = '/workreview/all',
  GET_REQUESTS = '/workrequest/all',
  GET_ONE_WORK_ORDER = '/workmanagement/*',
  GET_WORK_ORDER_DATA = '/workorderviewer/*/data',
  GET_ALL_MAINTENANCE_GROUPS = '/maintenance/all',
  GET_ALL_STATUSES = '/workmanagement/status/all',
  GET_ALL_PRIORITIES = '/workmanagement/priority/all',
  GET_PARTS = '/workorderviewer/*/part/all',
  GET_LABOR = '/workorderviewer/*/labor/all',
  GET_TOOLS = '/workorderviewer/*/equipment/all',
  GET_CONTRACTORS = '/workorderviewer/*/supplier/all',
  GET_MISC = '/workorderviewer/*/misc/all',
  ADD_PRIORITY = '/workmanagement/priority/add',
  ADD_STATUS = '/workmanagement/status/add',
  ADD_TYPE = '/workmanagement/type/add',
  UPDATE_PRIORITY = '/workmanagement/priority/update',
  UPDATE_STATUS = '/workmanagement/status/update',
  UPDATE_TYPE = '/workmanagement/type/update',
  DELETE_PRIORITY = '/workmanagement/priority/*/delete',
  DELETE_STATUS = '/workmanagement/status/*/delete',
  DELETE_TYPE = '/workmanagement/type/delete/*',
  GET_ALL_TYPES = '/workmanagement/type/all',
  UPDATE_INSTRUMENT = '/workorderviewer/instrument/update',
  UPDATE_WORK_ORDER = '/workorderviewer/update',
  UPDATE_WORK_ORDER_INSTRUCTIONS = '/workorderviewer/*/instructions/update',
  UPDATE_WORK_ORDER_CHECKLIST = '/workmanagement/*/checklist/update',
  WORK_ORDERS_GET_ACTIVITY = '/application/audit/all?AnteroSectionType=65&ModelID=*',
  GET_DOCUMENTS = '/workorderviewer/*/document/all',
  GET_INSTRUMENTS = '/workorderviewer/*/instrument/all',
  CREATE_WORK_ORDER = '/workmanagement/add',
  ADD_PART = '/workorderviewer/part/add',
  ADD_LABOR = '/workorderviewer/labor/add',
  ADD_CONTRACTOR = '/workorderviewer/supplier/add',
  ADD_TOOL = '/workorderviewer/equipment/add',
  ADD_MISC = '/workorderviewer/misc/add'
}

@Injectable({ providedIn: 'root' })
export class CurrentWorkController {
  private readonly key = 'id';
  private subs: Subscription[] = [];

  constructor(
    private datasources: DataSourceConfiguratorService,
    private errors: ErrorService,
    private fetch: FetchService,
    private layouts: LayoutService,
    private store: CurrentWorkStoreService
  ) { }

  public async createWorkOrder(equipmentID: number, taskID: number): Promise<Nullable<WorkOrder>> {
    let res: Nullable<HttpResponse<WorkOrder>>;
    const path = Endpoints.CREATE_WORK_ORDER;

    const record: WorkOrder = {
      id: 0,
      equipmentID,
      taskID,
      equipment: null,
      task: null,
      instructions: '',
      workOrderNumber: 0,
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

    try {
      res = await this.fetch.post<WorkOrder, WorkOrder>(path, record)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async addPart(workOrderID: number, partQuantityID: number): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.ADD_PART;

    const record: WorkOrderPart = {
      id: 0,
      workOrderID,
      workOrder: null,
      partQuantityID,
      partQuantity: null,
      unit: 'each',
      estimatedQuantity: 1,
      actualQuantity: 0,
      cost: 0
    }
    
    try {
      res = await this.fetch.post<WorkOrderPart, any>(path, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      } 
    }

    return !!res;
  }
  
  public async getWorkOrders(visibleCols: string[]): Promise<TableData> {
    const filter: WorkOrderFilter = { allWork: true, myMaintenanceGroups: true };
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_WORK_ORDERS,
      getOneUrl: Endpoints.GET_ONE_WORK_ORDER,
      includeData: { navigationProperties: [
        'all',
        'remainingrequiredinstrumentscount',
        'equipment.equipmentPriority',
        'equipment.location'
      ]},
      workFilter: filter,
      errorHandler: (err: HttpErrorResponse) => {
        this.errors.handleError(err);
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkOrderColumnDefinition(visibleCols);

    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<WorkOrderColumnDefinition>({ layout: TableLayouts.WORK_MANAGEMENT_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }

  public async getWorkOrderData(workOrderID: number): Promise<void> {
    if (workOrderID < 1) { return; }
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.GET_WORK_ORDER_DATA.replace('*', workOrderID.toString());

    try {
      res = await this.fetch.get<any>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    this.store.woData = res?.body ? new WorkOrderData(res.body) : null;
  }

  public async getWorkHistory(visibleCols: string[], timeParams: Nullable<TimeFrameParams> = null): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_WORK_HISTORY,
      includeData: { navigationProperties: [ 'all' ] },
      timeFrame: timeParams?.timeFrameType,
      historyTimeFrame: timeParams?.historyTimeFrame ? timeParams.historyTimeFrame : undefined,
      dateStart: timeParams?.dateStart ? timeParams.dateStart : undefined,
      dateEnd: timeParams?.dateEnd ? timeParams.dateEnd : undefined,
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkHistoryColumnDefinition(visibleCols);

    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<WorkHistoryColumnDefinition>({ layout: TableLayouts.WORK_HISTORY_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }

  public async getMyWork(visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_MY_WORK,
      includeData: { navigationProperties: [ 'all' ] },
      workFilter: { allWork: false, myMaintenanceGroups: true }, 
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkOrderColumnDefinition(visibleCols);

    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<WorkOrderColumnDefinition>({ layout: TableLayouts.WORK_MANAGEMENT_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }

  public async getSavedWorkOrders(visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_SAVED_WORK_ORDERS,
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkTemplateColumnDefinition(visibleCols);

    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<WorkTemplateColumnDefinition>({ layout: TableLayouts.WORK_TEMPLATES_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }
  
  public async getWorkRequests(visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_REQUESTS,
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkRequestColumnDefinition(visibleCols);

    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<WorkRequestColumnDefinition>({ layout: TableLayouts.WORK_REQUESTS_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }

  public async getWorkOrders_Review(visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_REVIEW_WORK_ORDERS,
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkOrderColumnDefinition(visibleCols);

    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<WorkOrderColumnDefinition>({ layout: TableLayouts.WORK_REVIEW_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }

  public async getParts(id: number, visibleCols: string[] = []): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_PARTS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all,partQuantity.part,partQuantity.warehouse,partQuantity.area' ]},
      errorHandler: (err: HttpErrorResponse) => {
        this.errors.handleError(err);
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkOrderPartColumnDefinition(visibleCols);

    return { data, colDef: initialColDef };
  }

  public async getLabor(id: number, visibleCols: string[] = []): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_LABOR.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ]},
      errorHandler: (err: HttpErrorResponse) => {
        this.errors.handleError(err);
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkOrderLaborColumnDefinition(visibleCols);

    return { data, colDef: initialColDef };
  }

  public async addLabor(workOrderID: number, laborClassID: number): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.ADD_LABOR;

    const record: WorkOrderLabor = {
      id: 0,
      workOrderID,
      workOrder: null,
      laborClassID,
      laborClass: null,
      laborAccountID: 0,
      laborAccount: null,
      laborTypeID: 0,
      laborType: null,
      user: null,
      userID: 0,
      estimatedHours: 4,
      actualHours: 0
    };

    try {
      res = await this.fetch.post<WorkOrderLabor, any>(path, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }
  
  public async getContractors(id: number, visibleCols: string[] = []): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_CONTRACTORS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ]},
      errorHandler: (err: HttpErrorResponse) => {
        this.errors.handleError(err);
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkOrderSupplierColumnDefintition(visibleCols);

    return { data, colDef: initialColDef };
  }

  public async addContractor(workOrderID: number, supplierID: number): Promise<any> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.ADD_CONTRACTOR;

    const record: WorkOrderSupplier = {
      id: 0,
      workOrderID,
      supplierID,
      workOrder: null,
      supplier: null,
      invoice: '',
      partCost: 45,
      laborCost: 19,
      miscCost: 0,
      taxCost: 0
    };
    
    try {
      res = await this.fetch.post<WorkOrderSupplier, any>(path, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }

  public async getTools(id: number, visibleCols: string[] = []): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_TOOLS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ]},
      errorHandler: (err: HttpErrorResponse) => {
        this.errors.handleError(err);
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkOrderEquipmentColumnDefinition(visibleCols);

    return { data, colDef: initialColDef };
  }

  public async addTool(workOrderID: number, equipmentID: number): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.ADD_TOOL;

    const record: WorkOrderEquipment = {
      id: 0,
      workOrderID,
      equipmentID,
      workOrder: null,
      equipment: null,
      estimatedQuantity: 7,
      actualQuantity: 0,
      workOrderRate: 19,
      workOrderUnit: 'hours'
    }

    try {
      res = await this.fetch.post<WorkOrderEquipment, any>(path, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }

  public async getMisc(id: number, visibleCols: string[] = []): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_MISC.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ]},
      errorHandler: (err: HttpErrorResponse) => {
        this.errors.handleError(err);
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkOrderMiscColumnDefinition(visibleCols);

    return { data, colDef: initialColDef };
  }

  public async addMisc(workOrderID: number, description: string, cost: number): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.ADD_MISC;

    try {
      res = await this.fetch.post<{ workOrderID: number, description: string, cost: number}, any>(path, { workOrderID, description, cost });
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      } 
    }

    return !!res;
  }

  public async getAllStatuses(): Promise<WorkStatus[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkStatus>>>;

    try {
      res = await this.fetch.get<ApiResponse<WorkStatus>>(Endpoints.GET_ALL_STATUSES);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err)
      }
    }

    return res?.body?.data || [];
  }

  public async addWorkStatus(name: string, color: string): Promise<Nullable<WorkStatus>> {
    let res: Nullable<HttpResponse<WorkStatus>>;

    try {
      res = await this.fetch.post<WorkStatus, WorkStatus>(Endpoints.ADD_STATUS, { id: 0, name, color });
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async updateWorkStatus(record: WorkStatus): Promise<Nullable<WorkStatus>> {
    let res: Nullable<HttpResponse<WorkStatus>>;

    try {
      res = await this.fetch.put<WorkStatus, WorkStatus>(Endpoints.UPDATE_STATUS, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteWorkStatus(record: WorkStatus): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.DELETE_STATUS.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }

  public async getAllMaintenaceGroups(): Promise<MaintenanceGroup[]> {
    let res: Nullable<HttpResponse<ApiResponse<MaintenanceGroup>>>;

    try {
      res = await this.fetch.get<ApiResponse<MaintenanceGroup>>(Endpoints.GET_ALL_MAINTENANCE_GROUPS);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err)
      }
    }

    return res?.body?.data || [];
  }

  public async getAllWorkPriorities(): Promise<WorkPriority[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkPriority>>>;

    try {
      res = await this.fetch.get<ApiResponse<WorkPriority>>(Endpoints.GET_ALL_PRIORITIES);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err)
      }
    }

    return res?.body?.data || [];
  }

  public async addWorkPriority(name: string): Promise<Nullable<WorkPriority>> {
    let res: Nullable<HttpResponse<WorkPriority>>;

    try {
      res = await this.fetch.post<string, WorkPriority>(Endpoints.ADD_PRIORITY, JSON.stringify(name));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async updateWorkPriority(record: WorkPriority): Promise<Nullable<WorkPriority>> {
    let res: Nullable<HttpResponse<WorkPriority>>;

    try {
      res = await this.fetch.put<WorkPriority, WorkPriority>(Endpoints.UPDATE_PRIORITY, record)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteWorkPriority(record: WorkPriority): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.DELETE_PRIORITY.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }

  public async getAllWorkTypes(): Promise<WorkType[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkType>>>;

    try {
      res = await this.fetch.get<ApiResponse<WorkType>>(Endpoints.GET_ALL_TYPES);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err)
      }
    }

    return res?.body?.data || [];
  }

  public async addWorkType(name: string): Promise<Nullable<WorkType>> {
    let res: Nullable<HttpResponse<WorkType>>;

    try {
      res = await this.fetch.post<string, WorkType>(Endpoints.ADD_TYPE, JSON.stringify(name));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async updateWorkType(record: WorkType): Promise<Nullable<WorkType>> {
    let res: Nullable<HttpResponse<WorkType>>;

    try {
      res = await this.fetch.put<WorkType, WorkType>(Endpoints.UPDATE_TYPE, record)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async deleteWorkType(record: WorkType): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.DELETE_TYPE.replace('*', record.id.toString());

    try {
      res = await this.fetch.delete<any>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }

  public async updateWorkOrder(record: WorkOrder): Promise<boolean> {
    if (!record) { return false; }

    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.put<WorkOrder, any>(Endpoints.UPDATE_WORK_ORDER, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res?.body;
  }

  public async updateWorkOrderInstuctions(workOrderID: number, text: string): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.UPDATE_WORK_ORDER_INSTRUCTIONS.replace('*', workOrderID.toString());

    try {
      res = await this.fetch.put<string, any>(path, JSON.stringify(text));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res?.body;
  }

  public async updateWorkOrderChecklist(workOrderID: number, checklist: ChecklistItem[]) : Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.UPDATE_WORK_ORDER_CHECKLIST.replace('*', workOrderID.toString());

    try {
      res = await this.fetch.put<ChecklistItem[], any>(path, checklist);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res;
  }

  public async getActivity(id: number, visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.WORK_ORDERS_GET_ACTIVITY.replace('*', id.toString()),
      take: 10,
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    };

    const data = this.datasources.create(config);
    const initialColDef = new EquipmentActivityColumnDefinition();

    visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
    return { data, colDef: initialColDef };
  }

  public async getDocuments(equipmentID: number): Promise<WorkOrderDocument[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkOrderDocument>>>;
    const path = Endpoints.GET_DOCUMENTS.replace('*', equipmentID.toString());
    const query = generateQueryStringFromObject({ includeData: 'all' });
    try {
      res = await this.fetch.get<ApiResponse<WorkOrderDocument>>(`${path}${query}`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    return res?.body?.data || [];
  }

  public getInstruments(id: number, visibleCols: string[]): TableData {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_INSTRUMENTS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ]},
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    };

    const data = this.datasources.create(config);
    const initialColDef = new WorkOrderInstrumentColumnDefinition();

    visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
    return { data, colDef: initialColDef };
  }

  public async updateInstrument(record: WorkOrderInstrument): Promise<boolean> {
    let res: Nullable<HttpResponse<WorkOrderInstrument>>;
    const path = Endpoints.UPDATE_INSTRUMENT;

    try {
      res = await this.fetch.put<WorkOrderInstrument, WorkOrderInstrument>(path, record);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return !!res?.body;
  } 
}