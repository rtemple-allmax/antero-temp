import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { TableData, DataSourceConfig, TimeFrameParams, Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { WorkHistoryColumnDefinition, WorkHistoryEquipmentColumnDefinition, WorkHistoryInstrumentColumnDefinition, WorkHistoryLaborColumnDefinition, WorkHistoryPartColumnDefinition, WorkHistorySupplierColumnDefinition } from "@allmax-angular/antero-web/column-definitions";
import { WorkHistory, WorkHistoryDocument, WorkHistoryEquipment, WorkHistoryInstrument, WorkHistoryLabor, WorkHistoryMisc, WorkHistoryPart, WorkHistorySupplier } from "@allmax-angular/antero-web/entities";
import { generateQueryStringFromObject } from "@allmax-angular/shared/utils";
import { ApiResponse } from "@allmax-angular/antero-web/types";

enum Endpoints {
  GET = '/workhistory/all',
  GET_ONE = '/workhistory/*',
  GET_INSTRUMENTS = '/workhistory/*/instrument/all',
  GET_LABOR = '/workhistory/*/labor/all',
  GET_PARTS = '/workhistory/*/part/all',
  GET_CONTRACTORS = '/workhistory/*/supplier/all',
  GET_TOOLS = '/workhistory/*/equipment/all',
  GET_MISC = '/workhistory/*/misc/all',
  GET_DOCUMENTS = '/workhistory/*/document/all',
}

@Injectable({ providedIn: 'root' })
export class WorkHistoryControllerService {
  private readonly key = 'id';
  private subs: Subscription[] = [];

  constructor(
    private datasources: DataSourceConfiguratorService,
    private errors: ErrorService,
    private fetch: FetchService,
    private layouts: LayoutService
  ) { }
  
  public initialize(): void { console.log('work history controller init'); }
  public finalize(): void { console.log('work history controller finalize'); }

  public async get(visibleCols: string[], timeParams: Nullable<TimeFrameParams> = null): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET,
      getOneUrl: Endpoints.GET_ONE,
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

  public async getByID(id: number): Promise<Nullable<WorkHistory>> {
    let res: Nullable<HttpResponse<WorkHistory>>;
    const path = Endpoints.GET_ONE.replace('*', id.toString());
    const query = generateQueryStringFromObject({ includeData: 'all' });
    try {
      res = await this.fetch.get<WorkHistory>(`${ path }${ query }`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public getInstruments(id: number, visibleCols: string[]): TableData {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_INSTRUMENTS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkHistoryInstrumentColumnDefinition(visibleCols);

    visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
    return { data, colDef: initialColDef };
  }

  public async getInstrumentsByWorkHistoryID(id: number): Promise<WorkHistoryInstrument[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkHistoryInstrument>>>;
    const path = Endpoints.GET_INSTRUMENTS.replace('*', id.toString());

    try {
      res = await this.fetch.get<ApiResponse<WorkHistoryInstrument>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public getLabor(id: number, visibleCols: string[]): TableData {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_LABOR.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkHistoryLaborColumnDefinition(visibleCols);

    visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
    return { data, colDef: initialColDef };
  }

  public async getLaborByWorkHistoryID(id: number): Promise<WorkHistoryLabor[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkHistoryLabor>>>;
    const path = Endpoints.GET_LABOR.replace('*', id.toString());

    try {
      res = await this.fetch.get<ApiResponse<WorkHistoryLabor>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public getParts(id: number, visibleCols: string[]): TableData {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_PARTS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkHistoryPartColumnDefinition(visibleCols);

    visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
    return { data, colDef: initialColDef };
  }

  public async getPartsByWorkHistoryID(id: number): Promise<WorkHistoryPart[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkHistoryPart>>>;
    const path = Endpoints.GET_PARTS.replace('*', id.toString());

    try {
      res = await this.fetch.get<ApiResponse<WorkHistoryPart>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public getContractors(id: number, visibleCols: string[]): TableData {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_CONTRACTORS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkHistorySupplierColumnDefinition(visibleCols);

    visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
    return { data, colDef: initialColDef };
  }

  public async getContractorsByWorkHistoryID(id: number): Promise<WorkHistorySupplier[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkHistorySupplier>>>;
    const path = Endpoints.GET_CONTRACTORS.replace('*', id.toString());

    try {
      res = await this.fetch.get<ApiResponse<WorkHistorySupplier>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public getTools(id: number, visibleCols: string[]): TableData {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_TOOLS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkHistoryEquipmentColumnDefinition(visibleCols);

    visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
    return { data, colDef: initialColDef };
  }

  public async getToolsByWorkHistoryID(id: number): Promise<WorkHistoryEquipment[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkHistoryEquipment>>>;
    const path = Endpoints.GET_TOOLS.replace('*', id.toString());

    try {
      res = await this.fetch.get<ApiResponse<WorkHistoryEquipment>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public getMisc(id: number, visibleCols: string[]): TableData {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_MISC.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkHistoryEquipmentColumnDefinition(visibleCols);

    visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
    return { data, colDef: initialColDef };
  }

  public async getMiscByWorkHistoryID(id: number): Promise<WorkHistoryMisc[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkHistoryMisc>>>;
    const path = Endpoints.GET_MISC.replace('*', id.toString());

    try {
      res = await this.fetch.get<ApiResponse<WorkHistoryMisc>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getDocuments(id: number): Promise<WorkHistoryDocument[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkHistoryDocument>>>;
    const path = Endpoints.GET_DOCUMENTS.replace('*', id.toString());
    const query = generateQueryStringFromObject({ includeData: 'all' });
    try {
      res = await this.fetch.get<ApiResponse<WorkHistoryDocument>>(`${path}${query}`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    return res?.body?.data || [];
  }
}