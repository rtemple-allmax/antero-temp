import { Injectable } from '@angular/core';
import { WorkTemplate } from "@allmax-angular/antero-web/entities";
import { Nullable } from "@allmax-angular/shared/types";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({ providedIn: 'root' })
export class WorkTemplatesSectionStore {
  private subs: Subscription[] = [];

  private selectionSubject = new BehaviorSubject<Nullable<WorkTemplate>>(null);
  public selection$ = this.selectionSubject.asObservable();
  public set selection(payload: Nullable<WorkTemplate>) { this.selectionSubject.next(payload); }
}