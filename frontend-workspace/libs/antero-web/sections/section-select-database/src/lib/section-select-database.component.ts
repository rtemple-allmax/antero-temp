import { ApplicationController } from '@allmax-angular/antero-web/data-access/application-controller';
import { AccountDatabases, DatabaseController } from '@allmax-angular/antero-web/data-access/database-controller';
import { LocalStorageKeys, RoutePaths } from '@allmax-angular/antero-web/types';
import { NavigationService } from '@allmax-angular/shared/services';
import { DatabaseInfo, Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ant-section-select-database',
  templateUrl: './section-select-database.component.html',
  styleUrls: ['./section-select-database.component.scss'],
})
export class SectionSelectDatabaseComponent implements OnInit {
  public accounts: number[] = [];
  public accountName = '';
  public seats = '';

  public databases: DatabaseInfo[] = [];

  public selectedDB: Nullable<DatabaseInfo>;
  public accountSelected = false;

  public accountsAndDbs: AccountDatabases[] = [];

  constructor(
    private appCtrl: ApplicationController,
    private ctrl: DatabaseController,
    private nav: NavigationService
  ) { }

  public ngOnInit(): void {
    this.getDatabases();
  }

  public keyDownHandler(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      // TODO
    }
  }

  public async getDatabases(): Promise<void> {
    this.accountsAndDbs = await this.ctrl.getDatabases();
    // console.log('acctsanddbs', this.accountsAndDbs)
    if (this.accountsAndDbs.length > 1) {
      this.accounts = this.accountsAndDbs.map(x => x.accountNumber)
    } else if (this.accountsAndDbs.length < 1 ) {
      // what to do here?
    } else {
      this.populate(
        this.accountsAndDbs[0].accountNumber,
        this.accountsAndDbs[0].accountName,
        this.accountsAndDbs[0].availableSeats,
        this.accountsAndDbs[0].dbs
      );
    }
    
  }

  public async getInfo(): Promise<void> {
    const info = await this.appCtrl.getInfo();
    if (info) {
      this.accountName = info.accountName;
      this.seats = `${ parseInt(info.maxSeats) - parseInt(info.currentSeats) } Seats Available`
    }
  }

  public populate(accountNumber: number, accountName: string, seats: number, dbs: DatabaseInfo[]) {
    this.accounts = [ accountNumber ];
    this.accountName = accountName;
    this.seats = seats.toString();
    this.accountSelected = true;
    this.databases = dbs;
    this.getInfo();
  }

  public accountChangeHandler(e: any): void {
    const accountNumber = e.value;
    this.accountSelected = true;
    if (accountNumber) {
      const acct = this.accountsAndDbs.find(x => x.accountNumber === accountNumber);
      if (acct) {
        this.populate(
          acct.accountNumber,
          acct.accountName,
          acct.availableSeats,
          acct.dbs
        );
      }
    }
  }

  public selectDB(db: DatabaseInfo): void {
    this.selectedDB = db;
    this.databases.forEach(x => x.selected = false);
    const found = this.databases.find(x => x.name === this.selectedDB?.name);
    if (found) {
      found.selected = true;
    }
  }

  public openDB(): void {
    if (this.selectedDB) {
      localStorage.setItem(LocalStorageKeys.DATABASE, this.selectedDB.name);
      localStorage.setItem(LocalStorageKeys.DATABASE_DISPLAY_NAME, this.selectedDB.displayName);
      this.nav.navigate([RoutePaths.DASHBOARD]);
    }
  }

  public changeAccount(): void {
    this.accounts = [];
    this.databases = [];
    this.accountName = '';
    this.seats = '';
    this.accountSelected = false;
    this.getDatabases();
  }
}
