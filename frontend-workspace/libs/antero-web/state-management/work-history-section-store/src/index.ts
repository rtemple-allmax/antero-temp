import { WorkHistory } from "@allmax-angular/antero-web/entities";
import { Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({ providedIn: 'root' })
export class WorkHistorySectionStore {
  private subs: Subscription[] = [];

  private readonly selectionSubject = new BehaviorSubject<Nullable<WorkHistory>>(null);
  public readonly selection$ = this.selectionSubject.asObservable();
  public set selection(payload: Nullable<WorkHistory>) { this.selectionSubject.next(payload); }
}