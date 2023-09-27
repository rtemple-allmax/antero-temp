import { AccountController } from '@allmax-angular/allmax-admin/data-access/account-controller';
import { AddAccountParams, AllmaxAccount, UserParams } from '@allmax-angular/allmax-admin/types';
import { FormfieldBaseComponent, Nullable, ObservableBinding, Precision } from '@allmax-angular/shared/types';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'amx-antero-account-creation',
  templateUrl: './antero-account-creation.component.html',
  styleUrls: ['./antero-account-creation.component.scss'],
})
export class AnteroAccountCreationComponent implements AfterViewInit {
  @ViewChildren('field') public fieldsQuery: Nullable<QueryList<FormfieldBaseComponent<any>>>;
  
  private subs: Subscription[] = [];

  public accountNumberBinding = new ObservableBinding<number>(); 
  public accountNameBinding = new ObservableBinding<string>();
  public companyNameBinding = new ObservableBinding<string>();
  public purchaseDateBinding = new ObservableBinding<Date>();
  public renewalDateBinding = new ObservableBinding<Date>();
  public numberOfSeatsBinding = new ObservableBinding<number>();
  public mobileBinding = new ObservableBinding<boolean>(false);
  public interfacesBinding = new ObservableBinding<boolean>(false); 
  
  public showWindow = false;
  public usersToAdd: UserParams[] = [];

  public showError = false;
  public showSuccess = false;

  public errorMessage = 'Account Creation Failed';
  public successMessage = 'Account Created Successfully';

  public fields: FormfieldBaseComponent<any>[] | null | undefined = [];

  public icons = { ...toolbarIcons };

  public get accountNumberPrecision(): Precision {
    return { integral: 6, fractional: 0 }
  }

  public get ready(): boolean {
    return this.accountNumberBinding.validity &&
      this.accountNameBinding.validity &&
      this.renewalDateBinding.validity &&
      this.numberOfSeatsBinding.validity &&
      this.purchaseDateBinding.validity &&
      this.numberOfSeatsBinding.validity &&
      this.usersToAdd.length > 0;
  }

  constructor(private ctrl: AccountController) { }
  
  // public ngOnInit(): void {
  //   this.accountNumberBinding.value$.subscribe(x => console.log('account number binding', x));
  //   this.accountNameBinding.value$.subscribe(x => console.log('account name binding', x));
  //   this.renewalDateBinding.value$.subscribe(x => console.log('renewal date binding', x));
  //   this.numberOfSeatsBinding.value$.subscribe(x => console.log('number of seats binding', x));
  //   this.mobileBinding.value$.subscribe(x => console.log('mobile', x));
  //   this.interfacesBinding.value$.subscribe(x => console.log('interfaces', x));
  // }

  public ngAfterViewInit(): void {
    this.fields = this.fieldsQuery?.toArray();
    this.fieldsQuery?.changes.subscribe(q => this.fields = q.toArray());
  }
  
  public openAdd(): void {
    this.showWindow = true;
  }

  public closeHandler(): void {
    this.showWindow = false;
  }

  public addUser(user: UserParams): void {
    if (this.usersToAdd.filter(x => x.email === user.email).length < 1) {
      this.usersToAdd.push(user);
    }
  }

  public validityChangeHandler(state: boolean, prop: string): void {
    switch (prop) {
      case 'accountNumber':
        this.accountNumberBinding.validity = state;
        break;
      case 'accountName':
        this.accountNameBinding.validity = state;
        break;
      case 'companyName':
        this.companyNameBinding.validity = state;
        break;
      case 'renewalDate':
        this.renewalDateBinding.validity = state;
        break;
      case 'purchaseDate':
        this.purchaseDateBinding.validity = state;
        break;
      case 'numberOfSeats':
        this.numberOfSeatsBinding.validity = state;
        break;
    }
  }

  public async createAccount(): Promise<void> {
    const account: AllmaxAccount = {
      accountName: this.accountNameBinding.value as string,
      accountNumber: this.accountNumberBinding.value?.toString() || '',
      companyName: this.companyNameBinding.value as string,
      antSeats: this.numberOfSeatsBinding.value || 0,
      antPurchaseDate: this.purchaseDateBinding.value as Date,
      antRenewalDate: this.renewalDateBinding.value as Date
    };

    this.usersToAdd.forEach(x => x.roles = []);

    const params: AddAccountParams = {
      account,
      userParams: this.usersToAdd
    }

    const success = await this.ctrl.addAccount(params);
    
    if (success) {
      this.showSuccess = true;
      this.showError = false;
    } else {
      this.showSuccess = false;
      this.showError = true;
    }

    this.reset();
    setTimeout(() => {
      this.showSuccess = false;
      this.showError = false;
    }, 3000);
  }

  public reset(): void {
    this.accountNameBinding.reset();
    this.accountNumberBinding.reset();
    this.renewalDateBinding.reset();
    this.numberOfSeatsBinding.reset();
    this.purchaseDateBinding.reset();
    this.companyNameBinding.reset();
    this.interfacesBinding.set(false);
    this.mobileBinding.set(false);
    this.usersToAdd = [];
    this.fields?.forEach(x => x.touched = false);
  }
}
