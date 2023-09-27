import { User } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';
import { LayoutPanelBaseComponent } from '../layout-panel.base';

@Component({
  selector: 'amx-layout-panel-user',
  templateUrl: './layout-panel-user.component.html',
  styleUrls: ['./layout-panel-user.component.scss'],
})
export class LayoutPanelUserComponent extends LayoutPanelBaseComponent implements OnInit {
  public user: Nullable<User>;

  constructor(private appStore: AnteroStoreService) {
    super();
  }

  public ngOnInit(): void {
    this.subs.push(this.appStore.user$.subscribe(x => this.user = x));
  }
}
