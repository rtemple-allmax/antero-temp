import { UserController } from '@allmax-angular/antero-web/data-access/user-controller';
import { User } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-panel-admin-users',
  templateUrl: './panel-admin-users.component.html',
  styles: [],
})
export class PanelAdminUsersComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  public icons = { ...toolbarIcons };

  public users: User[] = [];

  public selectedUser: Nullable<User>;

  constructor(private userCtrl: UserController) { }

  public async ngOnInit(): Promise<void> {
    this.users = await this.userCtrl.getAllUsers();
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public getEmailHref(email: Nullable<string>): string {
    return `mailto:${ email }`;
  }

  public selectUser(user: User): void {
    this.selectedUser = user;
  }
}
