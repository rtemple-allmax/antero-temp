import { unsubscribe } from "@allmax-angular/shared/utils";
import { Component, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

@Component({ template: '' })
export class SubscriberBaseComponent implements OnDestroy {
  protected subs: Subscription[] = [];

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }
}