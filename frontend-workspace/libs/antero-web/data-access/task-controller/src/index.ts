import { TaskColumnDefiniton } from "@allmax-angular/antero-web/column-definitions";
import { Task } from "@allmax-angular/antero-web/entities";
import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { ApiResponse } from "@allmax-angular/antero-web/types";
import { DataSourceConfiguratorService, FetchService } from "@allmax-angular/shared/services";
import { DataSourceConfig, Nullable, TableData } from "@allmax-angular/shared/types";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

enum Endpoints {
  TASKS_ALL = '/task/all',
  TASKS_BY_EQUIPMENT = '/task/byequipment/*',
  TASK_BY_ID = '/task/*'
}

@Injectable({ providedIn: 'root' })
export class TaskControllerService {
  constructor(
    private datasources: DataSourceConfiguratorService,
    private errors: ErrorService,
    private fetch: FetchService
  ) { }

  public async getTasksByEquipmentID(id: number): Promise<Task[]> {
    let res: Nullable<HttpResponse<ApiResponse<Task>>>;
    const path = Endpoints.TASKS_BY_EQUIPMENT.replace('*', id.toString());
    try {
      res = await this.fetch.get<ApiResponse<Task>>(path);
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    return res?.body?.data || [];
  }

  public async getTasksByEquipmentID_(id: number, visibleCols: string[], raw: boolean = false): Promise<TableData | Task[]> {
    if (!raw) {
      const config: DataSourceConfig = {
        key: 'id',
        getUrl: Endpoints.TASKS_BY_EQUIPMENT.replace('*', id.toString()),
        getOneUrl: Endpoints.TASK_BY_ID
      }

      const data = this.datasources.create(config);
      const colDef = new TaskColumnDefiniton(visibleCols);

      return { data, colDef };
    } else {
      let res: Nullable<HttpResponse<ApiResponse<Task>>>;
      const path = Endpoints.TASKS_BY_EQUIPMENT.replace('*', id.toString());
      try {
        res = await this.fetch.get<ApiResponse<Task>>(path);
      } catch (err) {
        if (err instanceof HttpErrorResponse) {
          this.errors.handleError(err);
        }
      }

      return res?.body?.data || [];
    }
  }

  public async getByID(id: number): Promise<Nullable<Task>> {
    let res: Nullable<HttpResponse<Task>>;

    try {
      res = await this.fetch.get<Task>(Endpoints.TASK_BY_ID.replace('*', id.toString()))
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      } 
    }

    return res?.body;
  }
}