import { PurchaseOrder } from "@allmax-angular/antero-web/entities";
import { Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({ providedIn: 'root' })
export class OrderingSectionStore {
  private subs: Subscription[] = [];

  private readonly selectionSubject = new BehaviorSubject<Nullable<PurchaseOrder>>(null);
  public readonly selection$ = this.selectionSubject.asObservable();
  public set selection(payload: Nullable<PurchaseOrder>) { this.selectionSubject.next(payload); }
}