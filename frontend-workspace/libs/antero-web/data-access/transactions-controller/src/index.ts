import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { DataSourceConfig, TableData, TimeFrameParams } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from "rxjs";
import { TransactionsSectionStore } from "@allmax-angular/antero-web/state-management/transactions-section-store";
import { TransactionColumnDefintion } from "@allmax-angular/antero-web/column-definitions";

enum Endpoints {
  GET = '/transaction/all',
  GET_ONE = '/transaction/*'
}

@Injectable({ providedIn: 'root' })
export class TransactionsController {
  private readonly key = 'id';
  private subs: Subscription[] = [];

  constructor(
    private datasources: DataSourceConfiguratorService,
    private store: TransactionsSectionStore,
    private errors: ErrorService,
    private fetch: FetchService,
    private layouts: LayoutService,
  ) { }

  public initialize(): void { console.log('transaction controller init'); }
  public finalize(): void { console.log('transaction controller finalize'); }

  public async get(visibleCols: string[], timeParams: TimeFrameParams): Promise<TableData> {
    const { timeFrameType, historyTimeFrame, dateStart, dateEnd } = timeParams;
    const config: DataSourceConfig = {
      key: this.key,
      getUrl: Endpoints.GET,
      getOneUrl: Endpoints.GET_ONE,
      includeData: { navigationProperties: [ 'supplier' ] },
      timeFrame: timeFrameType,
      historyTimeFrame: historyTimeFrame ? historyTimeFrame : undefined,
      dateStart: dateStart ? dateStart : undefined,
      dateEnd: dateEnd ? dateEnd : undefined,
      errorHandler: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }
    }

    const data = this.datasources.create(config);
    const initialColDef = new TransactionColumnDefintion(visibleCols);

    if (visibleCols.length < 1) {
      const colDef = await this.layouts.applyLayoutTo<TransactionColumnDefintion>({ layout: TableLayouts.TRANSACTION_GRID, forceLayout: false }, initialColDef);
      return { data, colDef };
    } else {
      visibleCols.forEach(x => initialColDef.findByDataField(x)?.updateOptions({ visible: true }));
      return { data, colDef: initialColDef };
    }
  }
} 