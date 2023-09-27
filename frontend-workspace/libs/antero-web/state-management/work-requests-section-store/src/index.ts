import { WorkRequest } from "@allmax-angular/antero-web/entities";
import { Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({ providedIn: 'root' })
export class WorkRequestsSectionStore {
  private subs: Subscription[] = [];

  private readonly selectionSubject = new BehaviorSubject<Nullable<WorkRequest>>(null);
  public readonly selection$ = this.selectionSubject.asObservable();
  public set selection(payload: Nullable<WorkRequest>) { this.selectionSubject.next(payload); }
}