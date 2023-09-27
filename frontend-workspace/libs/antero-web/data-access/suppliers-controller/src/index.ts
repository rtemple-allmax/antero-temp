import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { DataSourceConfig, ExcludeExpression, Nullable, TableData } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from "rxjs";
import { EquipmentColumnDefinition, SupplierColumnDefinition, SupplierContactColumnDefinition, SupplierPartColumnDefinition } from "@allmax-angular/antero-web/column-definitions";
import { SuppliersSectionStore } from "@allmax-angular/antero-web/state-management/suppliers-section-store";
import { Supplier } from "@allmax-angular/antero-web/entities";
import { ApiResponse } from "@allmax-angular/antero-web/types";
import { generateQueryStringFromObject } from "@allmax-angular/shared/utils";

enum Endpoints {
  GET = '/supplier/all',
  GET_ONE = '/supplier/*',
  GET_CONTACTS = '/supplier/*/contact/all',
  GET_PARTS = '/supplier/*/part/all',
  GET_EQUIPMENT = '/supplier/*/equipment/all'
}

@Injectable({ providedIn: 'root' })
export class SuppliersController {
  private readonly key = 'id';
  private subs: Subscription[] = [];

  constructor(
    private datasources: DataSourceConfiguratorService,
    private store: SuppliersSectionStore,
    private errors: ErrorService,
    private fetch: FetchService,
    private layouts: LayoutService,
  ) { }

  public initialize(): void { console.log('supplier controller init'); }
  public finalize(): void { console.log('supplier controller finalize'); }

  public async get(visibleCols: string[], exclude: ExcludeExpression | undefined = undefined): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET,
      getOneUrl: Endpoints.GET_ONE,
      includeData: { navigationProperties: [ 'all' ] },
      excludeData: exclude,
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new SupplierColumnDefinition(visibleCols);

    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<SupplierColumnDefinition>({ layout: TableLayouts.SUPPLIER_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }

  public async getRaw(exclude: ExcludeExpression | undefined): Promise<Supplier[]> {
    let res: Nullable<HttpResponse<ApiResponse<Supplier>>>;
    let query: Nullable<string>
    let route: Nullable<string>;
    const path = Endpoints.GET;

    if (exclude) {
      query = generateQueryStringFromObject({ excludeData: exclude });
    }

    if (query) {
      route = `${ path }${ query }`
    } else {
      route = path;
    }

    try  {
      res = await this.fetch.get<ApiResponse<Supplier>>(route);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getContacts(id: number, visibleCols: string[] = []): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_CONTACTS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const colDef = new SupplierContactColumnDefinition(visibleCols);

    return { data, colDef };
  }

  public async getParts(id: number, visibleCols: string[] = []): Promise<TableData> {
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
    const colDef = new SupplierPartColumnDefinition(visibleCols);

    return { data, colDef };
  }

  public async getEquipment(id: number, visibleCols: string[] = []): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_EQUIPMENT.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'all' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const colDef = new EquipmentColumnDefinition(visibleCols);

    return { data, colDef };
  }
} 