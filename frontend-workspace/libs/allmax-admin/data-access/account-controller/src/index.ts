import { AddAccountParams } from "@allmax-angular/allmax-admin/types";
import { FetchService } from "@allmax-angular/shared/services";
import { Nullable } from "@allmax-angular/shared/types";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

enum Endpoints {
  ACCOUNT_ADD = '/account/add',
}

@Injectable({ providedIn: 'root' })
export class AccountController {
  constructor( private fetch: FetchService) { }

  public async addAccount(params: AddAccountParams): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.post<AddAccountParams, any>(Endpoints.ACCOUNT_ADD, params);
    } catch (err) {
      console.error(err);
    }

    if (res?.body) {
      return true;
    } 

    return false;
  }
}