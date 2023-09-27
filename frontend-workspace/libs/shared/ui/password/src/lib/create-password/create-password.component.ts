import { ObservableBinding } from '@allmax-angular/shared/types';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { faEye, faEyeSlash, faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'amx-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss'],
})
export class CreatePasswordComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  @Output() public passwordValidated = new EventEmitter<string>();
  
  public passwordBinding = new ObservableBinding<string>();
  public confirmBinding = new ObservableBinding<string>();

  public passwordVisibility = false;
  public confirmVisibility = false;

  public passwordIcon = faEye;
  public confirmIcon = faEye;

  public validIcon = faCheck;
  public invalidIcon = faTimes;
  
  public ngOnInit(): void {
    this.subs.push(this.passwordBinding.value$.subscribe(() => {
      if (this.passwordValid && this.confirmValid) {
        this.passwordValidated.emit(this.passwordBinding.value as string);
      }
    }));
    this.subs.push(this.confirmBinding.value$.subscribe(() => {
      if (this.passwordValid && this.confirmValid) {
        this.passwordValidated.emit(this.passwordBinding.value as string);
      }
    }));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public get passwordValid(): boolean {
    if (isNullOrEmpty(this.passwordBinding.value)) {
      return false;
    }
    return this.passwordLengthIsValid && this.passwordLowerIsValid && this.passwordNumberIsValid && this.passwordUpperIsValid;
  }

  public get passwordLengthIsValid(): boolean {
    if (this.passwordBinding?.value?.length) {
      return this.passwordBinding.value.length >= 8;
    }
    return false;
  }

  public get passwordUpperIsValid(): boolean {
    if (this.passwordBinding?.value?.length) {
      return this.hasUpperCase(this.passwordBinding.value);
    }
    return false;
  }

  public get passwordLowerIsValid(): boolean {
    if (this.passwordBinding?.value?.length) {
      return this.hasLowerCase(this.passwordBinding.value);
    }
    return false;
  }

  public get passwordNumberIsValid(): boolean {
    if (this.passwordBinding?.value?.length) {
      return this.hasNumber(this.passwordBinding.value);
    }
    return false;
  }

  public get confirmValid(): boolean {
    if (!isNullOrEmpty(this.confirmBinding.value && !isNullOrEmpty(this.passwordBinding.value))) {
      return this.confirmBinding.value == this.passwordBinding.value;
    }
    return false;
  }
  
  public togglePasswordVisibility(): void {
    this.passwordVisibility = !this.passwordVisibility;
    if (this.passwordVisibility) {

      this.passwordIcon = faEyeSlash;
    } else {
      this.passwordIcon = faEye;
    }
  }

  public toggleConfirmVisibility(): void {
    this.confirmVisibility = !this.confirmVisibility;
    if (this.confirmVisibility) {
      this.confirmIcon = faEyeSlash;
    } else {
      this.confirmIcon = faEye;
    }
  }

  private hasLowerCase(value: string): boolean {
    return (/[a-z]/.test(value));
  }

  private hasUpperCase(value: string): boolean {
    return (/[A-Z]/.test(value));
  }

  private hasNumber(value: string): boolean {
    return (/[0-9]/.test(value));
  }
}
