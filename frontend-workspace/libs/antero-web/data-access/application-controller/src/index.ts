import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { ApplicationInfo } from "@allmax-angular/antero-web/types";
import { FetchService } from "@allmax-angular/shared/services";
import { Nullable } from "@allmax-angular/shared/types";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

enum Endpoints {
  INFO = '/application/information/all'
}


@Injectable({ providedIn: 'root' }) 
export class ApplicationController {
  constructor(private fetch: FetchService, private errors: ErrorService) { }

  public async getInfo(): Promise<Nullable<ApplicationInfo>> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.get<any>(Endpoints.INFO)
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    
    return res?.body;
  }
}