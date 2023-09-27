import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { TableData, DataSourceConfig, Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { EquipmentDocumentColumnDefinition, WorkHistoryColumnDefinition, WorkOrderColumnDefinition, WorkOrderEquipmentColumnDefinition, WorkOrderLaborColumnDefinition, WorkOrderMiscColumnDefinition, WorkOrderPartColumnDefinition, WorkOrderSupplierColumnDefintition } from "@allmax-angular/antero-web/column-definitions";
import { ApiResponse, WorkOrderData, WorkOrderFilter, WorkOrderParams } from "@allmax-angular/antero-web/types";
import DataSource from "devextreme/data/data_source";
import { downloadDocument, HistoryTimeFrames, TimeFrameTypes } from "@allmax-angular/shared/utils";
import { Document, WorkStatus } from "@allmax-angular/antero-web/entities";

enum Endpoints {
  GET = '/workmanagement/all',
  GET_ONE = '/workmanagement/*',
  GET_WORK_ORDER_PARAMS = '/workorderviewer/*/data',
  INSTRUCTIONS = '/workorderviewer/*/instructions',
  LABOR_GET = '/workorderviewer/*/labor/all',
  LABOR_GET_ONE = '/workorderviewer/labor/*',
  EQ_WORK_HISTORY_GET = '/equipment/*/workhistory/recent',
  EQ_DOCUMENTS_GET = '/equipment/*/document/all',
  DOCUMENT_DOWNLOAD = '/document/*/data',
  PART_GET = '/workorderviewer/*/part/all',
  PART_GET_ONE = '/workorderviewer/part/*',
  CONTRACTORS_GET = '/workorderviewer/*/part/all',
  CONTRACTOR_GET_ONE = '/workorderviewer/part/*',
  TOOLS_GET = '/workorderviewer/*/equipment/all',
  TOOL_GET_ONE = '/workorderviewer/equipment/*',
  MISC_GET = '/workorderviewer/*/misc/all',
  MISC_GET_ONE = '/workorderviewer/misc/*',
}

@Injectable({ providedIn: 'root' })
export class WorkManagementControllerService {
  private readonly key = 'id';
  private subs: Subscription[] = [];

  constructor(
    private datasources: DataSourceConfiguratorService,
    private errors: ErrorService,
    private fetch: FetchService,
    private layouts: LayoutService
  ) { }
  
  public initialize(): void { console.log('work management controller init'); }
  public finalize(): void { console.log('work management controller finalize'); }

  public async get(visibleCols: string[]): Promise<TableData> {
    const filter: WorkOrderFilter = { allWork: true, myMaintenanceGroups: true };
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET,
      getOneUrl: Endpoints.GET_ONE,
      includeData: { navigationProperties: [
        'all',
        'equipment.equipmentType',
        'equipment.equipmentPriority',
        'equipment.location',
        'equipment.equipmentCondition'
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

  public async getWorkOrderParams(id: number): Promise<Nullable<WorkOrderParams>> {
    let res: Nullable<HttpResponse<WorkOrderParams>>;
    const path = Endpoints.GET_WORK_ORDER_PARAMS.replace('*', id.toString());

    try {
      res = await this.fetch.get<WorkOrderParams>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async getWorkOrderInstructions(id: number, data: Nullable<WorkOrderData>): Promise<string> {
    if (!data) {
      let res: Nullable<HttpResponse<string>>;
      const path = Endpoints.INSTRUCTIONS.replace('*', id.toString());
      try {
        res = await this.fetch.get<string>(path);
      } catch (err) {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
      return res?.body || '';
    } else {
      return data.instructions;
    }
  }

  public async getEquipmentHistory(id: number, data: Nullable<WorkOrderData>): Promise<TableData> {
    const colDef = new WorkHistoryColumnDefinition([
      'workOrderNumber',
      'task',
      'workType',
      'workPriority',
      'dateCompleted'
    ]);

    let ds: Nullable<DataSource>;

    if (!data) {
      const config: DataSourceConfig = {
        key: this.key,
        getUrl: Endpoints.EQ_WORK_HISTORY_GET.replace('*', id.toString()),
        includeData: { navigationProperties: [ 'all' ]},
        timeFrame: TimeFrameTypes.HISTORY,
        historyTimeFrame: HistoryTimeFrames.ALL,
        take: 10
      };
      ds = this.datasources.create(config);
    } else {
      ds = this.datasources.createFromArray(data.history);
    }
    return { data: ds, colDef };
  }

  public async getEqDocuments(id: number, data: Nullable<WorkOrderData>): Promise<TableData> {
    const colDef = new EquipmentDocumentColumnDefinition([
      'document.name',
      'document.extension',
      'document.fileType',
      'document.modifiedBy',
      'document.dateModified'
    ]);
    let ds: Nullable<DataSource>;

    if (!data) {
      const config: DataSourceConfig = {
        key: this.key,
        getUrl: Endpoints.EQ_DOCUMENTS_GET.replace('*', id.toString()),
        includeData: { navigationProperties: [ 'all' ] }
      }
      ds = this.datasources.create(config);
    } else {
      ds = this.datasources.createFromArray(data.eqDocuments, 'id');
    }

    return { data: ds, colDef };

  }

  public async downloadDocument(record: Document): Promise<void> {
    if (!record) { return; }
    const path = Endpoints.DOCUMENT_DOWNLOAD.replace('*', record?.id.toString());
    const blob = await this.fetch.getAsBlob(path);
    downloadDocument(record, blob);
  }

  public async getWorkOrderLabor(workOrderID: number, data: Nullable<WorkOrderData> = null): Promise<TableData> {
    const colDef = new WorkOrderLaborColumnDefinition([
      'laborClass.name',
      'laborAccount.name',
      'laborType.name',
      'estimatedHours',
      'actualHours'
    ]);

    let ds: Nullable<DataSource>;

    if (!data) {
      const config: DataSourceConfig = {
        key: 'id',
        getUrl: Endpoints.LABOR_GET.replace('*', workOrderID.toString()),
        getOneUrl: Endpoints.LABOR_GET_ONE,
        includeData: { navigationProperties: [ 'all' ]}
      }
      ds = this.datasources.create(config);
    } else {
      ds = this.datasources.createFromArray(data.labor);
    }
    return { data: ds, colDef };
  }

  public async getWorkOrderParts(id: number, data: Nullable<WorkOrderData>): Promise<TableData> {
    const colDef = new WorkOrderPartColumnDefinition([
      'partQuantity.part.name',
      'partQuantity.part.description',
      'partQuantity.warehouse.name',
      'partQuantity.area.name',
      'unit',
      'estimatedQuantity',
      'actualQuantity'
    ]);
    let ds: Nullable<DataSource>;

    if (!data) {
      const config: DataSourceConfig = {
        key: 'id',
        getUrl: Endpoints.PART_GET.replace('*', id.toString()),
        getOneUrl: Endpoints.PART_GET_ONE,
        includeData: { navigationProperties: [ 'all' ]}
      }
      ds = this.datasources.create(config);
    } else {
      ds = this.datasources.createFromArray(data.parts);
    }
    return { data: ds, colDef };
  }

  public async getContractors(id: number, data: Nullable<WorkOrderData>): Promise<TableData> {
    const colDef = new WorkOrderSupplierColumnDefintition([
      'supplier.name',
      'invoice',
      'partCost',
      'laborCost',
      'miscCost',
      'taxCost'
    ]);
    let ds: Nullable<DataSource>;

    if (!data) {
      const config: DataSourceConfig = {
        key: 'id',
        getUrl: Endpoints.CONTRACTORS_GET.replace('*', id.toString()),
        getOneUrl: Endpoints.CONTRACTOR_GET_ONE,
        includeData: { navigationProperties: [ 'all' ]}
      }
      ds = this.datasources.create(config);
    } else {
      ds = this.datasources.createFromArray(data.suppliers);
    }
    return { data: ds, colDef };
  }

  public async getTools(id: number, data: Nullable<WorkOrderData>): Promise<TableData> {
    const colDef = new WorkOrderEquipmentColumnDefinition([
      'equipment.name',
      'equipment.description',
      'workOrderUnit',
      'estimatedQuantity',
      'actualQuantity'
    ]);
    let ds: Nullable<DataSource>;

    if (!data) {
      const config: DataSourceConfig = {
        key: 'id',
        getUrl: Endpoints.TOOLS_GET.replace('*', id.toString()),
        getOneUrl: Endpoints.TOOL_GET_ONE,
        includeData: { navigationProperties: [ 'all' ]}
      }
      ds = this.datasources.create(config);
    } else {
      ds = this.datasources.createFromArray(data.equipment);
    }
    return { data: ds, colDef };
  }

  public async getMisc(id: number, data: Nullable<WorkOrderData>): Promise<TableData> {
    const colDef = new WorkOrderMiscColumnDefinition([
      'description',
      'cost'
    ]);
    let ds: Nullable<DataSource>;

    if (!data) {
      const config: DataSourceConfig = {
        key: 'id',
        getUrl: Endpoints.MISC_GET.replace('*', id.toString()),
        getOneUrl: Endpoints.MISC_GET_ONE,
        includeData: { navigationProperties: [ 'all' ]}
      }
      ds = this.datasources.create(config);
    } else {
      ds = this.datasources.createFromArray(data.equipment);
    }
    return { data: ds, colDef };
  }

  public async getAllStatuses(): Promise<WorkStatus[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkStatus>>>;

    try {
      res = await this.fetch.get<ApiResponse<WorkStatus>>('/workmanagement/status/all');
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err)
      }
    }

    return res?.body?.data || [];
  }
}