import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { DataSourceConfig, Nullable, TableData } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { Subscription } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { WorkOrderColumnDefinition, WorkTemplateColumnDefinition, WorkTemplateEquipmentColumnDefinition, WorkTemplateLaborColumnDefinition, WorkTemplateMiscColumnDefinition, WorkTemplatePartColumnDefinition, WorkTemplateSupplierColumnDefinitiion } from "@allmax-angular/antero-web/column-definitions";
import { ApiResponse } from "@allmax-angular/antero-web/types";
import { WorkTemplatePart } from "@allmax-angular/antero-web/entities";
import { generateQueryStringFromObject } from "@allmax-angular/shared/utils";

enum Endpoints {
  GET = '/worktemplate/all',
  GET_ONE = '/worktemplate/*',
  GET_PARTS = '/worktemplate/*/part/all',
  GET_WORK_ORDERS = '/worktemplate/*/workorders',
  GET_TOOLS = '/worktemplate/*/equipment/all',
  GET_LABOR = '/worktemplate/*/labor/all',
  GET_CONTRACTORS = '/worktemplate/*/supplier/all',
  GET_MISC = '/worktemplate/*/misc/all'
}

@Injectable({ providedIn: 'root' })
export class WorkTemplatesControllerService {
  private readonly key = 'id';
  private subs: Subscription[] = [];

  constructor(
    private fetch: FetchService,
    private datasources: DataSourceConfiguratorService,
    private errors: ErrorService,
    private layouts: LayoutService
  ) { }

  public initialize(): void { console.log('work template ctrl init'); }
  public finalize(): void { console.log('work template ctrl finalize'); }

  public async get(visibleCols: string[]): Promise<TableData> {
    const navProps = [
      'equipment',
      'task',
      'workType',
      'workPriority',
      'maintenanceGroup',
      'workScheduleType',
    ];
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET,
      getOneUrl: Endpoints.GET_ONE,
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

  public async getParts(id: number, visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_PARTS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all,partQuantity.part,partQuantity.warehouse,partQuantity.area' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }
    const data = this.datasources.create(config);
    const initialColDef = new WorkTemplatePartColumnDefinition(visibleCols);
    return { data, colDef: initialColDef };
  }

  public async getWorkOrders(id: number): Promise<any> {
    let res: Nullable<HttpResponse<any>>;
    const path = Endpoints.GET_WORK_ORDERS.replace('*', id.toString());
    const query = generateQueryStringFromObject({ includeData: 'workStatus' })

    try {
      res = await this.fetch.get<any>(`${ path }${ query }`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    return res?.body;
  }

  public getTools(id: number, visibleCols: string[]): TableData {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_TOOLS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all,equipment.department' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }
    const data = this.datasources.create(config);
    const initialColDef = new WorkTemplateEquipmentColumnDefinition(visibleCols);
    return { data, colDef: initialColDef };
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
    const initialColDef = new WorkTemplateLaborColumnDefinition(visibleCols);
    return { data, colDef: initialColDef };
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
    const initialColDef = new WorkTemplateSupplierColumnDefinitiion(visibleCols);
    return { data, colDef: initialColDef };
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
    const initialColDef = new WorkTemplateMiscColumnDefinition(visibleCols);
    return { data, colDef: initialColDef };
  }
}