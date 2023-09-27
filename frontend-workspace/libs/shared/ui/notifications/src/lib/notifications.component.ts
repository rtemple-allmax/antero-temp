import { Nullable } from '@allmax-angular/shared/types';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'amx-notifications',
  templateUrl: './notifications.component.html',
  styles: [`
    .toast {
      position: fixed;
      bottom: var(--space-lg);
      right: var(--space-lg);
      background-color: rgb(51, 51, 51);
      color: white;
      transform: translateX(100%);
      opacity: 0;
      transition: all .2s ease-in-out;
      padding: var(--space-xl);
      z-index: 99999;
      border-radius: 5px;
    }

    .toast.open {
      transform: translateX(0);
      opacity: 1;
    }
  `],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  public message: Nullable<string>;

  private subs: Subscription[] = [];

  private timeoutID: any;

  public get open(): boolean {
    return !isNullOrEmpty(this.message);
  }

  constructor(private service: NotificationsService) { }

  public async ngOnInit(): Promise<void> {
    this.subs.push(this.service.notification$.subscribe(x => {
      if (x) {
        this.message = x.message
        this.timeoutID = setTimeout(() => {
          if (!isNullOrEmpty(this.message)) {
            this.service.clear();
          }
        }, x.length);
      } else {
        clearTimeout(this.timeoutID);
        this.message = null;
      }
    }))
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }
}
