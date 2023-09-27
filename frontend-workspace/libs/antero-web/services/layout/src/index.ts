import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { FetchService } from "@allmax-angular/shared/services";
import { BaseColumnDefinition, Nullable } from "@allmax-angular/shared/types";
import { pascalize } from "@allmax-angular/shared/utils";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

export enum TableLayouts {
  EQUIPMENT_GRID,
  PART_GRID,
  MY_WORK_GRID,
  WORK_TEMPLATES_GRID,
  WORK_REQUESTS_GRID,
  WORK_REVIEW_GRID,
  WORK_MANAGEMENT_GRID,
  WORK_HISTORY_GRID,
  SUPPLIER_GRID,
  ORDERING_GRID,
  PROCEDURES_GRID,
  MY_WORK_GRID_PROCEDURES,
  PROCEDURE_SETUP_GRID,
  PROCEDURE_HISTORY_GRID,
  TRANSACTION_GRID
}

export interface GetLayoutParams {
  layout: TableLayouts;
  forceLayout: boolean;
}
export interface GetDefaultLayoutParams {
  gridLayout: TableLayouts;
  offset: number;
  pixelMultiplier: number; 
}

export interface SaveLayoutParams {
  gridLayout: TableLayouts;
  gridColumns: any[];
  groupPanelShown: boolean;
}

enum Endpoints {
  DEFAULTS = '/user/layoutview/default',
  GET = '/user/layoutview',
  SAVE = '/user/layoutview/save'
}

@Injectable({ providedIn: 'root' })
export class LayoutService {
  constructor(private errors: ErrorService, private fetch: FetchService) { }

  public async applyLayoutTo<T extends BaseColumnDefinition>(params: GetLayoutParams, colDef: T): Promise<T> {
    let res: Nullable<HttpResponse<any>>;

    const args = {
      gridLayout: params.layout,
      pixelMultiplier: 8,
      offset: 0
    } 

    try {
      res = await this.fetch.post<any, any>(Endpoints.GET, args);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    if (res?.body?.gridColumns) {
      for (const col of res.body.gridColumns) {
        for (const colInDef of colDef.columns) {
          if (col.dataField.toLowerCase().trim() === colInDef.dataField.toLowerCase().trim()) {
            colInDef.updateOptions({
              visibleIndex: col.visibleIndex,
              visible: col.visible,
              width: col.width,
              groupIndex: col.groupIndex
            });
          }
        }
      }
    }
    return colDef;
  }

  public async saveLayout(params: SaveLayoutParams): Promise<boolean> {
    params.gridColumns.forEach(x => {
      const df = x.dataField;
      if (df) { x.dataField = pascalize(df); }
      if ('groupIndex' in x === false ) {
        x.groupIndex = -1;
      }
    });

    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.post<SaveLayoutParams, any>(Endpoints.SAVE, params);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    return !!res;
  }
}