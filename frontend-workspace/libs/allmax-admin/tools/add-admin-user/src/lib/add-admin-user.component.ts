import { UserParams } from '@allmax-angular/allmax-admin/types';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'amx-add-admin-user',
  templateUrl: './add-admin-user.component.html',
  styleUrls: ['./add-admin-user.component.scss'],
})
export class AddAdminUserComponent implements OnInit, OnDestroy {
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  @Input() public addedUsers: UserParams[] = [];

  @Output() public userAdded = new EventEmitter<UserParams>();
  @Output() public closed = new EventEmitter<undefined>();

  private subs: Subscription[] = [];

  public emailBinding = new ObservableBinding<string>();
  public displayNameBinding = new ObservableBinding<string>();

  public showError = false;
  
  public get addUserNotReady(): boolean {
    return !this.displayNameBinding.validity || !this.emailBinding.validity || this.showError;
  }

  public ngOnInit(): void {
    this.subs.push(this.emailBinding.value$.subscribe(x => this.showError = this.addedUsers.filter(y => y.email === x).length > 0));  
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public emailValidityStateChangeHandler(state: boolean) {
    this.emailBinding.validity = state;
  }

  public nameValidityStateChangeHandler(state: boolean) {
    this.displayNameBinding.validity = state;
  }

  public addUser(): void {
    this.userAdded.emit({ displayName: this.displayNameBinding.value as string, email: this.emailBinding.value as string });
    this.modal?.close();  
  }

  public closeHandler(): void {
    this.closed.emit();
  }
}
