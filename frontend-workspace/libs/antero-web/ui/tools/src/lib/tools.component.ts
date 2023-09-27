import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { Modals } from '@allmax-angular/antero-web/types';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  
  public modal: Modals = Modals.NONE;
  public modals: typeof Modals = Modals;

  constructor(private appStore: AnteroStoreService) {}

  public ngOnInit(): void {
    this.subs.push(this.appStore.modal$.subscribe(x => this.modal = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }
}
