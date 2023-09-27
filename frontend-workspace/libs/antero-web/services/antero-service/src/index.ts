import { AccountControllerService } from "@allmax-angular/antero-web/data-access/account-controller";
import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { ModalsService } from "@allmax-angular/antero-web/services/modals-service";
import { AnteroStoreService } from "@allmax-angular/antero-web/state-management/antero-store";
import { FormsStore } from "@allmax-angular/antero-web/state-management/forms-store";
import { Modals } from "@allmax-angular/antero-web/types";
import { FetchService } from "@allmax-angular/shared/services";
import { CrudFunctions, DeviceTypes, Nullable, ValidationData } from "@allmax-angular/shared/types";
import { generateQueryStringFromObject, isNullOrEmpty } from "@allmax-angular/shared/utils";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({ providedIn: 'root' })
export class AnteroService {
  private heartbeatIntervalID: any;
  private heartbeatIntervalLength = 1000 * 60 * 2;

  public enterReadingsHasContext = false;
  
  constructor(
    private accts: AccountControllerService,
    private devices: DeviceDetectorService,
    private errors: ErrorService,
    private fetch: FetchService,
    private modals: ModalsService,
    private store: AnteroStoreService
  ) { }

  public openModal(modal: Modals, crud: CrudFunctions = CrudFunctions.READ): void {
    this.modals.openModal(modal, crud);
  }

  public closeModal(): void {
    this.modals.closeModal();
    document.dispatchEvent(new Event('click', { bubbles: false }))
  }
  
  public openEnterReadings(hasContext: boolean): void {
    this.enterReadingsHasContext = hasContext;
    this.openModal(Modals.TOOL_ENTER_READINGS);
  }
  
  public setDeviceType(): void {
    if (this.devices.isMobile()) {
      this.store.deviceType = DeviceTypes.MOBILE;
    } else if (this.devices.isTablet()) {
      this.store.deviceType = DeviceTypes.TABLET;
    } else {
      this.store.deviceType = DeviceTypes.DESKTOP;
    }
  }

  public overrideDeviceType(type: string): void {
    if (type === 'tablet') {
      this.store.deviceType = DeviceTypes.TABLET;
    } else if (type === 'mobile') {
      this.store.deviceType = DeviceTypes.MOBILE;
    } else {
      this.store.deviceType = DeviceTypes.DESKTOP;
    }
  }
  
  public heartbeatInterval(): void {
    this.handleHeartbeat();
    this.heartbeatIntervalID = setInterval(async () => {
      this.handleHeartbeat();
    }, this.heartbeatIntervalLength);
  }

  public async handleHeartbeat(): Promise<void> {
    const auth = await this.accts.heartbeat();

      if (!auth) {
        console.warn('heartbeat failed');
        clearInterval(this.heartbeatIntervalID)
        return;
      }
      this.store.updateAuth(auth);
  }

  public clearHeartbeat(): void {
    if (this.heartbeatIntervalID) {
      clearInterval(this.heartbeatIntervalID);
    }
  }

  public checkIfNameExists = async (data: ValidationData<string>): Promise<boolean> => {
    if (isNullOrEmpty(data.newValue) || (data.crud === CrudFunctions.UPDATE && data.newValue?.toLowerCase().trim() === data.original?.name.toLowerCase().trim())) { return true; } // is valid
    
    let res: Nullable<HttpResponse<boolean>>;
    
    const endpoint = '/database/exists';
    const query: string = generateQueryStringFromObject(data.query);
    const path = `${endpoint}${query}`;

    try {
      res = await this.fetch.post<string, boolean>(path, JSON.stringify(data.query));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    return res ? !(res.body) : true; // not valid : valid
  }

  public checkIfAssociationExists = async (data: ValidationData<string>): Promise<boolean> => {
    if (isNullOrEmpty(data.newValue) || (data.crud === CrudFunctions.UPDATE && data.newValue?.toLowerCase().trim() === data.original?.name.toLowerCase().trim())) { return true; } // is valid
    
    let res: Nullable<HttpResponse<boolean>>;
    
    const endpoint = '/database/exists';
    const query: string = generateQueryStringFromObject(data.query);
    const path = `${endpoint}${query}`;

    try {
      res = await this.fetch.post<string, boolean>(path, JSON.stringify(data.query));
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errors.handleError(err);
      }
    }
    return res ? !(res.body) : true; // not valid : valid
  }
}