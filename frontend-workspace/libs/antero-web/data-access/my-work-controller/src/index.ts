import { WorkOrderColumnDefinition } from "@allmax-angular/antero-web/column-definitions";
import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
import { MyWorkSectionStore } from "@allmax-angular/antero-web/state-management/my-work-section-store";
import { WorkOrderFilter } from "@allmax-angular/antero-web/types";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { DataSourceConfig, TableData } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';

enum Endpoints {
  GET_WORK_ORDERS = '/mywork/workordersbyfilter',
  GET_ONE_WORK_ORDER = '/workmanagement/*',
  GET_PROCEDURES = '/mywork/proceduresbyfilter',
  GET_ONE_PROCEDURE = '/procedure/*'
}

@Injectable({ providedIn: 'root' })
export class MyWorkController {
  private readonly key = 'id';
  private subs: Subscription[] = [];

  constructor(
    private datasources: DataSourceConfiguratorService,
    private store: MyWorkSectionStore,
    private errors: ErrorService,
    private fetch: FetchService,
    private layouts: LayoutService,
  ) { }

  public initialize(): void { console.log('my work controller init'); }
  public finalize(): void { console.log('my work controller finalize'); }

  public async getWorkOrders(visibleCols: string[]): Promise<TableData> {
    const filter: WorkOrderFilter = { allWork: true, myMaintenanceGroups: true };
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET_WORK_ORDERS,
      getOneUrl: Endpoints.GET_ONE_WORK_ORDER,
      // includeData: { navigationProperties: [ 'all' ] },
      workFilter: filter,
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new WorkOrderColumnDefinition(visibleCols);

    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<WorkOrderColumnDefinition>({ layout: TableLayouts.MY_WORK_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }
}