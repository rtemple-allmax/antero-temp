import { UserController } from '@allmax-angular/antero-web/data-access/user-controller';
import { RegisterUserParams } from '@allmax-angular/antero-web/types';
import { NavigationService } from '@allmax-angular/shared/services';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-section-reset-password',
  templateUrl: './section-reset-password.component.html',
  styleUrls: ['./section-reset-password.component.scss'],
})
export class SectionResetPasswordComponent implements OnInit, OnDestroy  {
  private subs: Subscription[] = [];
  public params: Nullable<RegisterUserParams>;

  public passwordBinding = new ObservableBinding<string>();

  public resetComplete = false;

  public get isReady(): boolean {
    if (this.passwordBinding.value && this.params) {
      return true;
    }
    return false;
  }

  constructor(
    private route : ActivatedRoute,
    private nav: NavigationService,
    private userCtrl: UserController
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.route.queryParams.subscribe(q => this.parseQuery(q)));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }
  
  public parseQuery(params: any): void {
    this.params = {
      email: params['email'],
      token: params['token']
    };
  }

  public passwordCreatedHandler(password: string): void {
    this.passwordBinding.set(password);
  }

  public keyDown(e: KeyboardEvent): void {
    if (this.passwordBinding.value && e.key === 'Enter') {
      this.clickHandler();
    }
  }

  public async clickHandler(): Promise<void> {
    const result = await this.userCtrl.updatePassword({
      email: this.params?.email as string, 
      password: this.passwordBinding.value as string,
      token: this.params?.token as string
    })
    if (result) {
      this.resetComplete = true;
    }
  }

  public goToLogin(): void {
    this.nav.navigate(['login']);
  }
}
