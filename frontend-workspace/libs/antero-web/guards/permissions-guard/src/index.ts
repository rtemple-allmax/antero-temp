import { Injectable } from "@angular/core";
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { FetchService } from '@allmax-angular/shared/services';
import { Nullable } from "@allmax-angular/shared/types";
import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { AnteroStoreService } from "@allmax-angular/antero-web/state-management/antero-store";

@Injectable({ providedIn: 'root' })
export class PermissionsGuard implements CanActivate {
  constructor(
    private store: AnteroStoreService,
    private errors: ErrorService,
    private fetch: FetchService
  ) { }

  public async canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    let res: Nullable<HttpResponse<any>>;

    try {
      res = await this.fetch.get<any>('/user/permissions');
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }

    this.store.location = state.url;

    if (res) {
      this.store.permissions = res.body;
    }
    return true;
  }
}