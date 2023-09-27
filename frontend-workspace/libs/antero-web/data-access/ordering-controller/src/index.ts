import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { DataSourceConfig, Nullable, TableData } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from "rxjs";
import { OrderingSectionStore } from "@allmax-angular/antero-web/state-management/ordering-section-store";
import { PurchaseOrderColumnDefinition, PurchaseOrderPartColumnDefinition, TransactionColumnDefintion } from "@allmax-angular/antero-web/column-definitions";
import { PurchaseOrder } from "@allmax-angular/antero-web/entities";
import { generateQueryStringFromObject } from "@allmax-angular/shared/utils";

enum Endpoints {
  GET = '/purchaseorder/all',
  GET_ONE = '/purchaseorder/*',
  GET_PARTS = '/purchaseorder/*/part/all',
  GET_TRANSACTIONS = '/transaction/bypurchaseorder/*'
}

@Injectable({ providedIn: 'root' })
export class OrderingController {
  private readonly key = 'id';
  private subs: Subscription[] = [];

  constructor(
    private datasources: DataSourceConfiguratorService,
    private store: OrderingSectionStore,
    private errors: ErrorService,
    private fetch: FetchService,
    private layouts: LayoutService,
  ) { }

  public initialize(): void { console.log('ordering controller init'); }
  public finalize(): void { console.log('ordering controller finalize'); }

  public async get(visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET,
      getOneUrl: Endpoints.GET_ONE,
      includeData: { navigationProperties: [ 'supplier' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new PurchaseOrderColumnDefinition(visibleCols);

    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<PurchaseOrderColumnDefinition>({ layout: TableLayouts.ORDERING_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }

  public async getPurchaseOrderByID(id: number): Promise<Nullable<PurchaseOrder>> {
    let res: Nullable<HttpResponse<PurchaseOrder>>;
    const path = Endpoints.GET_ONE.replace('*', id.toString());
    const query = generateQueryStringFromObject({ includeData: 'all' })

    try {
      res = await this.fetch.get<PurchaseOrder>(`${ path }${ query }`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body;
  }

  public async getParts(id: number, visibleCols: string[] = []): Promise<TableData> {
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
    const initialColDef = new PurchaseOrderPartColumnDefinition(visibleCols);
  
    return { data, colDef: initialColDef };  
  }

  public async getTransactions(id: number, visibleCols: string[] = []): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_TRANSACTIONS.replace('*', id.toString()),
      includeData: { navigationProperties: [ 'user' ] },
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new TransactionColumnDefintion(visibleCols);
  
    return { data, colDef: initialColDef }; 
  }
}