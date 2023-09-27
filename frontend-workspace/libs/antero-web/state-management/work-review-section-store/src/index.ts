import { WorkOrder } from "@allmax-angular/antero-web/entities";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({ providedIn: 'root' })
export class WorkReviewSectionStore {
  private subs: Subscription[] = [];

  private readonly selectionSubject = new BehaviorSubject<WorkOrder[]>([]);
  public readonly selection$ = this.selectionSubject.asObservable();
  public set selection(payload: WorkOrder[]) { this.selectionSubject.next(payload); }
}