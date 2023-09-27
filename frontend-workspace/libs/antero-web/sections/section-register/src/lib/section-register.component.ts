import { UserController } from '@allmax-angular/antero-web/data-access/user-controller';
import { RegisterUserParams } from '@allmax-angular/antero-web/types';
import { NavigationService } from '@allmax-angular/shared/services';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { generateQueryStringFromObject, isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-section-register',
  templateUrl: './section-register.component.html',
  styleUrls: ['./section-register.component.scss'],
})
export class SectionRegisterComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  public displayNameBinding = new ObservableBinding<string>();
  public passwordBinding = new ObservableBinding<string>();

  public params: Nullable<RegisterUserParams>;

  public isRegistered = false;

  public account: any;
  public user: any;
  public passwordToken: any;

  public get readyToComplete(): boolean {
    return !isNullOrEmpty(this.passwordBinding.value) &&
    !isNullOrEmpty(this.displayNameBinding.value)
    && !!this.user && !!this.passwordToken;
  }

  constructor(private route: ActivatedRoute, private nav: NavigationService, private ctrl: UserController) { }

  public ngOnInit(): void {
    this.subs.push(this.route.queryParams.subscribe(async (p) => {
      this.parseQuery(p)
      if (this.params) {
        const res = await this.ctrl.registerUser(generateQueryStringFromObject(this.params));
        this.user = res?.user;
        this.account = res?.account;
        this.passwordToken = await this.ctrl.resetPasswordRequest(this.user?.username, false);
      }
    }))
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public parseQuery(params: any): void {
    this.params = {
      email: params['email'],
      token: params['token'],
      accountNumber: params['accountNumber'],
    };
  }

  public passwordCreatedHandler(value: string): void {
    this.passwordBinding.set(value);
  }
  
  public keyDown(e: KeyboardEvent): void {
    if (e.key === 'Enter' && this.readyToComplete) {
      this.click();
    }
  }

  public async click(): Promise<void> {
    const email = this.user?.username;
    const password = this.passwordBinding.value || '';
    const token = this.passwordToken?.token;

    const params = { email, password, token };
    const result = await this.ctrl.updatePassword(params);
    this.isRegistered = result;
  } 

  public goToLogin(): void {
    this.nav.navigate(['login']);
  }
}
