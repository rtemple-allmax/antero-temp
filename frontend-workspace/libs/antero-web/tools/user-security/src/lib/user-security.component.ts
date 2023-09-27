import { User } from '@allmax-angular/antero-web/entities';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserController } from '@allmax-angular/antero-web/data-access/user-controller';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';

@Component({
  selector: 'ant-user-security',
  templateUrl: './user-security.component.html',
  styleUrls: ['./user-security.component.scss'],
})
export class UserSecurityComponent implements OnInit {
  public users: User[] = [];
  
  @Output() public closed = new EventEmitter<undefined>();

  public icons = { ...toolbarIcons };

  constructor(private ctrl: UserController) { }

  public async ngOnInit(): Promise<void> {
    this.users = await this.ctrl.getAllUsers() || [];
  }

  public closeHandler(): void {
    this.closed.emit();
  }
}
