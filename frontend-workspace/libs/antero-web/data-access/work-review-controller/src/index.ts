import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { TableData, DataSourceConfig } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';
import { WorkOrderColumnDefinition } from "@allmax-angular/antero-web/column-definitions";

enum Endpoints {
  GET = '/workreview/all',
  GET_ONE = '/workmanagement/*'
}

@Injectable({ providedIn: 'root' })
export class WorkReviewControllerService {
  private readonly key = 'id';
  private subs: Subscription[] = [];

  constructor(
    private datasources: DataSourceConfiguratorService,
    private errors: ErrorService,
    private fetch: FetchService,
    private layouts: LayoutService
  ) { }
  
  public initialize(): void { console.log('work review controller init'); }
  public finalize(): void { console.log('work review controller finalize'); }

  public async get(visibleCols: string[]): Promise<TableData> {
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET,
      getOneUrl: Endpoints.GET_ONE,
      // includeData: { navigationProperties: [ 'all' ] },
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
}