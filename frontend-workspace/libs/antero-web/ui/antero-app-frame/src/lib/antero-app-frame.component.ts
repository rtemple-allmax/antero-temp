import { ApplicationController } from '@allmax-angular/antero-web/data-access/application-controller';
import { AccountDatabases, DatabaseController } from '@allmax-angular/antero-web/data-access/database-controller';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { ApplicationInfo, DataStores, LocalStorageKeys, Modals, RoutePaths, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { StateManagementService } from '@allmax-angular/shared/features/state-management';
import { NavigationService } from '@allmax-angular/shared/services';
import { DatabaseInfo, Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, Input, OnInit, Output, EventEmitter, inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-app-frame',
  templateUrl: './antero-app-frame.component.html',
  styleUrls: ['./antero-app-frame.component.scss'],
})
export class AnteroAppFrameComponent implements OnInit, OnDestroy {
  @Input() public sectionName = 'Not set';
  @Input() public items: Nullable<[ string , string ]>;
  @Input() public fontSize = 'var(--font-size-md)';
  
  @Output() public switchChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sliderClosed = new EventEmitter();

  public sliderIsOpen = false;
  public sidebarCollapsed = false;

  public info: Nullable<ApplicationInfo>;
  public databases: DatabaseInfo[] = [];

  public userMenuItems: any[] = [];

  public icons = { ...allIcons };

  public get dbName(): string {
    return localStorage.getItem(LocalStorageKeys.DATABASE_DISPLAY_NAME) || '';
  }

  public get availableSeats(): string {
    if (this.info) {
      return `${ parseInt(this.info.maxSeats) - parseInt(this.info.currentSeats) } Seats Available`;
    }
    return '';
  }

  private appCtrl = inject(ApplicationController);
  private dbCtrl = inject(DatabaseController);
  private nav = inject(NavigationService);
  private state = inject(StateManagementService);

  private subs: Subscription[] = [];

  private uiStore = this.state.getStore(DataStores.UI);

  constructor(private antero: AnteroService) { }

  public ngOnInit(): void {
    this.getInfo();
    this.userMenuItems = this.updateUserMenu();
    const sub = this.uiStore?.observe(UIStorePropNames.SIDEBAR_COLLAPSED)?.subscribe(x => this.sidebarCollapsed = x);
    if(sub) { this.subs.push(sub); }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public selectDB(db: DatabaseInfo): void {
    localStorage.setItem(LocalStorageKeys.DATABASE, db.name);
    localStorage.setItem(LocalStorageKeys.DATABASE_DISPLAY_NAME, db.displayName);
    this.getInfo();
    this.updateUserMenu();
    this.nav.navigate([ RoutePaths.DASHBOARD ]);
  }

  public async getInfo(): Promise<void> {
    this.info = await this.appCtrl.getInfo();
    if (this.info) {
      const acctDbs: AccountDatabases[] = await this.dbCtrl.getDatabases();
      if (acctDbs) {
        const acct = acctDbs.find(x => x.accountNumber ===  parseInt(this.info?.accountNumber as string));
        if (acct) {
          this.databases = acct.dbs.filter(x => x.name !== this.info?.database as string);
        }
      }
    }
  }

  public toggleView(type: MasterDetailViewTypes): void {
    this.state.getStore(DataStores.UI)?.setValue(UIStorePropNames.VIEW_TYPE, type);
  }

  public logout(): void {
    localStorage.removeItem(LocalStorageKeys.TOKEN);
    this.antero.clearHeartbeat();
    this.nav.navigate([ RoutePaths.LOGIN ]);
    document.dispatchEvent(new Event('click', { bubbles: false }))
  }

  public showProfile(): void {
    this.antero.openModal(Modals.USER_PROFILE);
  }

  public switchChangedHandler(state: boolean): void {
    if (this.items) {
      this.switchChanged.emit(state ? this.items[1] : this.items[0]);
    }
  }

  public updateUserMenu(): any[] {
    const items: any[] = [
      // {
      //   text: this.info?.accountNumber || 'Switch Accts',
      //   icon: this.icons.fileIcon,
      //   template: 'contextMenuItemTemplate'
      // },
      // {
      //   text: this.dbName || 'Switch Databases',
      //   icon: this.icons.fileIcon,
      //   template: 'contextMenuItemTemplate',
      // },
      {
        text: 'My Profile',
        icon: this.icons.fileIcon,
        template: 'contextMenuItemTemplate',
        onItemClick: () => this.showProfile()
      },
      // {
      //   text: 'Employees',
      //   icon: this.icons.fileIcon,
      //   template: 'contextMenuItemTemplate',
      // },
      {
        text: 'Logout',
        icon: this.icons.fileIcon,
        template: 'contextMenuItemTemplate',
        onItemClick: () => this.logout()
      },
    ];
    return items;
  }

  public slideIn(): void {
    if (!this.sliderIsOpen) {
      this.sliderIsOpen = true;
    }
  }

  public slideOut(): void {
    if (this.sliderIsOpen) {
      this.sliderIsOpen = false;
      setTimeout(() => this.sliderClosed.emit(), 1000);
    }
  }

  public toggle(): void {
    this.sliderIsOpen ? this.slideOut(): this.slideIn();
  }
}
