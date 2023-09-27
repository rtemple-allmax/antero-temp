import { AnteroStoreService } from "@allmax-angular/antero-web/state-management/antero-store";
import { LocalStorageKeys, NextSteps, RoutePaths } from "@allmax-angular/antero-web/types";
import { NavigationService } from "@allmax-angular/shared/services";
import { HttpStatusCodes, Nullable } from "@allmax-angular/shared/types";
import { ErrorWindowComponent } from "@allmax-angular/shared/ui/error-window";
import { unsubscribe } from "@allmax-angular/shared/utils";
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ErrorService {
  private subs: Subscription[] = [];
  private errorWindow: Nullable<ErrorWindowComponent>;

  constructor(private store: AnteroStoreService, private nav: NavigationService) { }

  public initialize(): void {
    this.subs.push(this.store.errorWindow$.subscribe(x => this.errorWindow = x));
  }

  public finalize(): void {
    unsubscribe(this.subs);
  }

  public handleError(err: HttpErrorResponse, heading: string = 'Error'): void {
    console.log(`ErrorService::${heading}`, err);

    if (!err) { return; }

    if ('message' in err) {
      const chunkFailedMessage = /Loading chunk [\d]+ failed/;
      if (chunkFailedMessage.test(err.message)) {
        window.location.reload();
      }
    }
    this.processError(err);
  }

  private processError(err: any): void {
    if (err.status === HttpStatusCodes.UNAUTHORIZED) {
      this.nav.navigate([RoutePaths.LOGIN]);
    }

    if (!err.error || err.status === HttpStatusCodes.NOT_FOUND) { return; }


    if ('token' in err.error) {
      localStorage.setItem(LocalStorageKeys.TOKEN, err.error.token);
    }
    
    if (err.error.nextStep === NextSteps.DATABASE_SELECT) {
      this.nav.navigate([ RoutePaths.SELECT_DATABASE ]);
    }

    if ('userMessage' in err.error && this.errorWindow) {
      this.errorWindow.open(err.error.userMessage, 'Error')
    }
  }
}