import { WorkOrder, WorkOrderEquipment, WorkOrderLabor, WorkOrderMisc, WorkOrderPart, WorkOrderSupplier } from "@allmax-angular/antero-web/entities";
import { WorkOrderData } from "@allmax-angular/antero-web/types";
import { Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({ providedIn: 'root' })
export class WorkManagementSectionStore {
  private subs: Subscription[] = [];

  private readonly selectionSubject = new BehaviorSubject<WorkOrder[]>([]);
  public readonly selection$ = this.selectionSubject.asObservable();
  public set selection(payload: WorkOrder[]) { this.selectionSubject.next(payload); }

  private workOrderDataSubject = new BehaviorSubject<Nullable<WorkOrderData>>(null);
  public workOrderData$ = this.workOrderDataSubject.asObservable();
  public set workOrderData(payload: Nullable<WorkOrderData>) { this.workOrderDataSubject.next(payload); }
  
  private readonly selectedLaborSubject  = new BehaviorSubject<Nullable<WorkOrderLabor>>(null);
  public readonly selectedLabor$ = this.selectedLaborSubject.asObservable();
  public set selectedLabor(payload: Nullable<WorkOrderLabor>) { this.selectedLaborSubject.next(payload); }

  private readonly selectedPartSubject  = new BehaviorSubject<Nullable<WorkOrderPart>>(null);
  public readonly selectedPart$ = this.selectedPartSubject.asObservable();
  public set selectedPart(payload: Nullable<WorkOrderPart>) { this.selectedPartSubject.next(payload); }

  private readonly selectedContractorSubject  = new BehaviorSubject<Nullable<WorkOrderSupplier>>(null);
  public readonly selectedContractor$ = this.selectedContractorSubject.asObservable();
  public set selectedContractor(payload: Nullable<WorkOrderSupplier>) { this.selectedContractorSubject.next(payload); }

  private readonly selectedToolSubject = new BehaviorSubject<Nullable<WorkOrderEquipment>>(null);
  public readonly selectedTool$ = this.selectedToolSubject.asObservable();
  public set selectedTool(payload: WorkOrderEquipment) { this.selectedToolSubject.next(payload); }

  private readonly selectedMiscSubject = new BehaviorSubject<Nullable<WorkOrderMisc>>(null);
  public readonly selectedMisc$ = this.selectedMiscSubject.asObservable();
  public set selectedMisc(payload: WorkOrderMisc) { this.selectedMiscSubject.next(payload); }
}