import { Nullable } from '@allmax-angular/shared/types';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  message: Nullable<string>;
  length: number;
}

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  private readonly notificationSubject = new BehaviorSubject<Nullable<Notification>>(null);
  public readonly notification$ = this.notificationSubject.asObservable();
  private set notification(payload: Nullable<Notification>) { this.notificationSubject.next(payload); }

  public notify(message: string, length: number = 2500): void {
    this.notification = { message, length };
  }

  public clear(): void {
    this.notification = null;
  }
}
