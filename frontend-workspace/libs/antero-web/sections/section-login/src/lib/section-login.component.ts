import { AccountControllerService } from '@allmax-angular/antero-web/data-access/account-controller';
import { UserController } from '@allmax-angular/antero-web/data-access/user-controller';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { LocalStorageKeys, RoutePaths } from '@allmax-angular/antero-web/types';
import { NavigationService } from '@allmax-angular/shared/services';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component } from '@angular/core';

@Component({
  selector: 'ant-section-login',
  templateUrl: './section-login.component.html',
  styleUrls: ['./section-login.component.scss'],
})
export class SectionLoginComponent {
  public emailBinding: ObservableBinding<string> = new ObservableBinding<string>();
  public passwordBinding: ObservableBinding<string> = new ObservableBinding<string>();

  public forgotPasswordLabel: Nullable<string>;
  public showForgotPasswordBox = false;
  public emailMissing = true;

  constructor(
    private ctrl: AccountControllerService,
    private userCtrl: UserController,
    private nav: NavigationService,
    private store: AnteroStoreService,
    private antero: AnteroService
    ) { }
  
    public ready(): boolean {
    return !isNullOrEmpty(this.emailBinding.value) && !isNullOrEmpty(this.passwordBinding.value);
  }

  public emailChangeHandler(e: Event): void {
    this.emailBinding.set((e?.target as HTMLInputElement).value);
  }

  public passwordChangeHandler(e: Event): void {
    this.passwordBinding.set((e?.target as HTMLInputElement).value);
  }

  public async forgotPassword(): Promise<void> {
    if (this.emailBinding.value) {
      this.emailMissing = false;
      const result = await this.userCtrl.resetPasswordRequest(this.emailBinding.value || '', true);
      if (result) {
        this.forgotPasswordLabel = `An email has been sent to ${ this.emailBinding.value }.`
      }
    } else {
      this.emailMissing = true;
      this.forgotPasswordLabel = 'Please enter your email above.';
    }
    this.showForgotPasswordBox = true;
  }
  
  public keyDownHandler(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.login();
    }
  }

  public clickHandler(): void {
    this.login();
  }

  private async login(): Promise<void> {
    // if (!this.emailBinding.value || !this.passwordBinding.value) { return; }

    localStorage.removeItem(LocalStorageKeys.TOKEN);

    console.log('user pass', { user: this.emailBinding.value, pass: this.passwordBinding.value});
    
    const auth = await this.ctrl.login(this.emailBinding.value || '', this.passwordBinding.value || '');

    if (auth) {
      this.store.updateAuth(auth)
      this.antero.heartbeatInterval();
      this.nav.navigate([ RoutePaths.EQUIPMENT ]);
    }
  }

  public goToWebsite(): void {
    window.open('https://www.allmaxsoftware.com', "_blank");
  }
}
