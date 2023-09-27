import { Injectable } from "@angular/core";

import { BehaviorSubject, Subscription } from "rxjs";

import {
  AuthResponse,
  DatabaseOptions,
  ImageData,
  LicenseMembers,
  LocalStorageKeys,
  Modals,
  NextSteps,
  nextStepsToLabelsMap,
  Permissions,
  StoreBase,
  UserPreferences
} from "@allmax-angular/antero-web/types";

import { isNullOrEmpty, unsubscribe } from "@allmax-angular/shared/utils";
import { CrudFunctions, DeviceTypes, Nullable } from "@allmax-angular/shared/types";
import { User } from "@allmax-angular/antero-web/entities";
import { ErrorWindowComponent } from "@allmax-angular/shared/ui/error-window";

@Injectable({ providedIn: 'root' })
export class AnteroStoreService extends StoreBase {
  private readonly licenseSubject = new BehaviorSubject<Nullable<LicenseMembers>>(null);
  public readonly license$ = this.licenseSubject.asObservable();
  public set license(payload: Nullable<LicenseMembers>) { this.licenseSubject.next(payload); }

  private readonly permissionsSubject = new BehaviorSubject<Nullable<Permissions>>(null);
  public readonly permissions$ = this.permissionsSubject.asObservable();
  public set permissions(payload: Nullable<Permissions>) { this.permissionsSubject.next(payload); }

  private readonly userSubject = new BehaviorSubject<Nullable<User>>(null);
  public readonly user$ = this.userSubject.asObservable();
  public set user(payload: Nullable<User>) { this.userSubject.next(payload); }
  
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this.loadingSubject.asObservable();
  public set loading(payload: boolean) { this.loadingSubject.next(payload); }

  private readonly appHeadingSubject = new BehaviorSubject<Nullable<string>>(null);
  public readonly appHeading$ = this.appHeadingSubject.asObservable();
  public set appHeading(payload: Nullable<string>) { this.appHeadingSubject.next(payload); }

  private readonly colorModeSubject = new BehaviorSubject<number>(0);
  public readonly colorMode$ = this.colorModeSubject.asObservable();
  public set colorMode(payload: number) { this.colorModeSubject.next(payload); }

  private readonly locationSubject = new BehaviorSubject<Nullable<string>>(null);
  public readonly location$ = this.locationSubject.asObservable();
  public set location(payload: Nullable<string>) { this.locationSubject.next(payload); }

  private readonly dbOptionsSubject = new BehaviorSubject<Nullable<DatabaseOptions>>(null);
  public readonly dbOptions$ = this.dbOptionsSubject.asObservable();
  public set dbOptions(payload: Nullable<DatabaseOptions>) { this.dbOptionsSubject.next(payload); }

  private readonly userPreferencesSubject = new BehaviorSubject<Nullable<UserPreferences>>(null);
  public readonly userPreferences$ = this.userPreferencesSubject.asObservable();
  public set userPreferences(payload: Nullable<UserPreferences>) { this.userPreferencesSubject.next(payload); }

  private readonly modalSubject = new BehaviorSubject<Modals>(Modals.NONE);
  public readonly modal$ = this.modalSubject.asObservable();
  public set modal(payload: Modals) { this.modalSubject.next(payload); }
  
  private readonly crudSubject = new BehaviorSubject<CrudFunctions>(CrudFunctions.READ);
  public readonly crud$ = this.crudSubject.asObservable();
  public set crud(payload: CrudFunctions) { this.crudSubject.next(payload); }

  private readonly nextStepSubject = new BehaviorSubject<NextSteps>(NextSteps.NONE);
  public readonly nextStep$ = this.nextStepSubject.asObservable();
  public set nextStep(payload: NextSteps) { this.nextStepSubject.next(payload); }

  private readonly errorWindowSubject = new BehaviorSubject<Nullable<ErrorWindowComponent>>(null);
  public readonly errorWindow$ = this.errorWindowSubject.asObservable();
  public set errorWindow(payload: Nullable<ErrorWindowComponent>) { this.errorWindowSubject.next(payload); }

  private readonly deviceTypeSubject = new BehaviorSubject<DeviceTypes>(DeviceTypes.DESKTOP);
  public readonly deviceType$ = this.deviceTypeSubject.asObservable();
  public set deviceType(payload: DeviceTypes) { this.deviceTypeSubject.next(payload); }

  private readonly accountNumbersSubject = new BehaviorSubject<string[]>([]);
  public readonly accountNumbers$ = this.accountNumbersSubject.asObservable();
  public set accountNumbers(payload: string[]) { this.accountNumbersSubject.next(payload); }

  private readonly refreshSubject = new BehaviorSubject<boolean>(false);
  public readonly refresh$ = this.refreshSubject.asObservable();
  public set refresh(payload: boolean) { this.refreshSubject.next(payload); }

  private readonly thumbsSubject = new BehaviorSubject<ImageData[]>([]);
  public readonly thumbs$ = this.thumbsSubject.asObservable();
  public set thumbs(payload: ImageData[]) { this.thumbsSubject.next(payload); }

  private readonly primaryImageIDSubject = new BehaviorSubject<number>(0);
  public readonly primaryImageID$ = this.primaryImageIDSubject.asObservable();
  public set primaryImageID(payload: number) { this.primaryImageIDSubject.next(payload); }

  private readonly selectedImageIDSubject = new BehaviorSubject<number>(0);
  public readonly selectedImageID$ = this.selectedImageIDSubject.asObservable();
  public set selectedImageID(payload: number) { this.selectedImageIDSubject.next(payload); }
  
  public get token(): Nullable<string> { return localStorage.getItem(LocalStorageKeys.TOKEN) }
  public get deviceID(): Nullable<string> { return localStorage.getItem(LocalStorageKeys.DEVICE_ID) }
  public get mapKey(): Nullable<string> { return localStorage.getItem(LocalStorageKeys.MAP_KEY) }
  public get db(): Nullable<string> { return localStorage.getItem(LocalStorageKeys.DATABASE)}
  public get dbDisplayName(): Nullable<string> { return localStorage.getItem(LocalStorageKeys.DATABASE_DISPLAY_NAME)}

  public intialize(debug: boolean = false): void {
    this.prepare(debug, 'Antero Store', 'green')
    if (this.debug) {
      this.subs.push(this.license$.subscribe(x => this.log('license', x )));
      this.subs.push(this.permissions$.subscribe(x => this.log('permissions', x)));
      this.subs.push(this.user$.subscribe(x => this.log('user', x)));
      this.subs.push(this.loading$.subscribe(x => this.log('loading', x)));
      this.subs.push(this.appHeading$.subscribe(x => this.log('appHeading', x)));
      this.subs.push(this.location$.subscribe(x => this.log('location', x)));
      this.subs.push(this.dbOptions$.subscribe(x => this.log('dbOptions', x)));
      this.subs.push(this.userPreferences$.subscribe(x => this.log('userPreferences', x)));
      this.subs.push(this.modal$.subscribe(x => this.log('modal', x)));
      this.subs.push(this.crud$.subscribe(x => this.log('crud', x)));
      this.subs.push(this.nextStep$.subscribe(x => this.log('nextStep', nextStepsToLabelsMap.get(x))));
      this.subs.push(this.errorWindow$.subscribe(x => this.log('errorWindow', x)));
      this.subs.push(this.deviceType$.subscribe(x => this.log('deviceType', x)));
      this.subs.push(this.accountNumbers$.subscribe(x => this.log('accountNumbers', x)));
      this.subs.push(this.refresh$.subscribe(x => this.log('refresh', x)));
      this.subs.push(this.thumbs$.subscribe(x => this.log('thumbs', x)));
    }
  }
  
  public updateAuth(auth: AuthResponse): void {
    this.license = { hasDataPort: auth.hasDataPort, hasWeb: auth.hasWeb };

    if (!isNullOrEmpty(auth.token)) {
      localStorage.setItem(LocalStorageKeys.TOKEN, auth.token as string)
    }
    
    if (!isNullOrEmpty(auth.deviceID)) {
      localStorage.setItem(LocalStorageKeys.DEVICE_ID, auth.deviceID as string);
    }

    // if (!isNullOrEmpty(auth.databaseName)) {
    //   localStorage.setItem(LocalStorageKeys.DATABASE, auth.databaseName as string);
    // }

    localStorage.setItem(LocalStorageKeys.DATABASE, '999999_2');

    if (!isNullOrEmpty(auth.mapTilerKey)) {
      localStorage.setItem(LocalStorageKeys.MAP_KEY, auth.mapTilerKey as string)
    }
    
    if (auth.permissions) {
      this.permissions = auth.permissions;
    }
    
    if (auth.currentUser) {
      this.user = auth.currentUser;
    }
  
    if (auth.dbOptions) {
      this.dbOptions = auth.dbOptions;
    }

    if (auth.accountNumbers) {
      this.accountNumbers = auth.accountNumbers
    } else {
      this.accountNumbers = [];
    }
  }
}