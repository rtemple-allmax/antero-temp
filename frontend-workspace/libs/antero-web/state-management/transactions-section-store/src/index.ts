import { Transaction } from "@allmax-angular/antero-web/entities";
import { Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TransactionsSectionStore {
  private subs: Subscription[] = [];

  private readonly selectionSubject = new BehaviorSubject<Nullable<Transaction>>(null);
  public readonly selection$ = this.selectionSubject.asObservable();
  public set selection(payload: Nullable<Transaction>) { this.selectionSubject.next(payload); }
}