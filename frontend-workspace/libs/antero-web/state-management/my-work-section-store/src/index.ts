import { Procedure, WorkOrder } from "@allmax-angular/antero-web/entities";
import { Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MyWorkSectionStore {
  private subs: Subscription[] = [];

  private readonly selectedWorkOrderSubject = new BehaviorSubject<Nullable<WorkOrder>>(null);
  public readonly selectedWorkOrder$ = this.selectedWorkOrderSubject.asObservable();
  public set selectedWorkOrder(payload: Nullable<WorkOrder>) { this.selectedWorkOrderSubject.next(payload); }

  private readonly selectedProcedureSubject = new BehaviorSubject<Nullable<Procedure>>(null);
  public readonly selectedProcedure$ = this.selectedProcedureSubject.asObservable();
  public set selectedProcedure(payload: Nullable<Procedure>) { this.selectedProcedureSubject.next(payload); }
}