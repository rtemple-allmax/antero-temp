import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { LayoutService, TableLayouts } from "@allmax-angular/antero-web/services/layout";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { DataSourceConfig, Nullable, TableData } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { Subscription } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { WorkTemplateColumnDefinition } from "@allmax-angular/antero-web/column-definitions";
import { WorkTemplatePart } from "@allmax-angular/antero-web/entities";
import { ApiResponse } from "@allmax-angular/antero-web/types";
import { generateQueryStringFromObject } from "@allmax-angular/shared/utils";

enum Endpoints {
  GET = '/worktemplate/all',
  GET_ONE = '/worktemplate/*',
  GET_WORK_TEMPLATE_PARTS = '/worktemplate/*/part/all'
}

@Injectable({ providedIn: 'root' })
export class WorkSetupControllerService {
  private readonly key = 'id';
  private subs: Subscription[] = [];

  constructor(
    private datasources: DataSourceConfiguratorService,
    private errors: ErrorService,
    private fetch: FetchService,
    private layouts: LayoutService
  ) { }

  public initialize(): void { console.log('work template ctrl init'); }
  public finalize(): void { console.log('work template ctrl finalize'); }

  public async getWorkTemplates(visibleCols: string[]): Promise<TableData> {
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

  public async getWorkTemplateParts(workTemplateID: number): Promise<WorkTemplatePart[]> {
    let res: Nullable<HttpResponse<ApiResponse<WorkTemplatePart>>>;

    const path = Endpoints.GET_WORK_TEMPLATE_PARTS.replace('*', workTemplateID.toString());
    const query = generateQueryStringFromObject({ includeData: 'all,partQuantity.part'})

    try {
      res = await this.fetch.get<ApiResponse<WorkTemplatePart>>(`${ path }${ query }`);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    // console.log('wtParts res', res);

    return res?.body?.data || [];
  }
}