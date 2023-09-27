import { WorkOrder, WorkOrderEquipment, WorkOrderInstrument, WorkOrderLabor, WorkOrderMisc, WorkOrderPart, WorkOrderSupplier } from "@allmax-angular/antero-web/entities";
import { ChecklistItem, StoreBase, WorkOrderData } from "@allmax-angular/antero-web/types";
import { Nullable } from "@allmax-angular/shared/types";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CurrentWorkStoreService extends StoreBase {
  private readonly selectionSubject = new BehaviorSubject<WorkOrder[]>([]);
  public readonly selection$ = this.selectionSubject.asObservable();
  public set selection(payload: WorkOrder[]) { this.selectionSubject.next(payload); }

  private readonly selectedWorkOrderIDsSubject = new BehaviorSubject<number[]>([]);
  public readonly selectedWorkOrderIDs$ = this.selectedWorkOrderIDsSubject.asObservable();
  public set selectedWorkOrderIDs(payload: number[]) { this.selectedWorkOrderIDsSubject.next(payload); }

  private readonly woDataSubject = new BehaviorSubject<Nullable<WorkOrderData>>(null);
  public readonly woData$ = this.woDataSubject.asObservable();
  public set woData(payload: Nullable<WorkOrderData>) { this.woDataSubject.next(payload); }
  
  private readonly selectedContractorSubject = new BehaviorSubject<Nullable<WorkOrderSupplier>>(null);
  public readonly selectedContractor$ = this.selectedContractorSubject.asObservable();
  public set selectedContractor(payload: Nullable<WorkOrderSupplier>) { this.selectedContractorSubject.next(payload); }

  private readonly selectedInstrumentSubject = new BehaviorSubject<Nullable<WorkOrderInstrument>>(null);
  public readonly selectedInstrument$ = this.selectedInstrumentSubject.asObservable();
  public set selectedInstrument(payload: Nullable<WorkOrderInstrument>) { this.selectedInstrumentSubject.next(payload); }

  private readonly selectedLaborSubject = new BehaviorSubject<Nullable<WorkOrderLabor>>(null);
  public readonly selectedLabor$ = this.selectedLaborSubject.asObservable();
  public set selectedLabor(payload: Nullable<WorkOrderLabor>) { this.selectedLaborSubject.next(payload); }

  private readonly selectedMiscSubject = new BehaviorSubject<Nullable<WorkOrderMisc>>(null);
  public readonly selectedMisc$ = this.selectedMiscSubject.asObservable();
  public set selectedMisc(payload: Nullable<WorkOrderMisc>) { this.selectedMiscSubject.next(payload); }

  private readonly selectedPartSubject = new BehaviorSubject<Nullable<WorkOrderPart>>(null);
  public readonly selectedPart$ = this.selectedPartSubject.asObservable();
  public set selectedPart(payload: Nullable<WorkOrderPart>) { this.selectedPartSubject.next(payload); }

  private readonly selectedToolSubject = new BehaviorSubject<Nullable<WorkOrderEquipment>>(null);
  public readonly selectedTool$ = this.selectedToolSubject.asObservable();
  public set selectedTool(payload: Nullable<WorkOrderEquipment>) { this.selectedToolSubject.next(payload); }

  private readonly refreshViewerSubject = new BehaviorSubject<boolean>(false);
  public readonly refreshViewer$ = this.refreshViewerSubject.asObservable();
  public set refreshViewer(payload: boolean) { this.refreshViewerSubject.next(payload); }

  private readonly checklistToEditSubject = new BehaviorSubject<ChecklistItem[]>([]);
  public readonly checklistToEdit$ = this.checklistToEditSubject.asObservable();
  public set checklistToEdit(payload: ChecklistItem[]) { this.checklistToEditSubject.next(payload); }

  public initialize(debug: boolean = false): void {
    this.prepare(debug, 'Current Work Store', 'Yellow', 'Black');
    if (this.debug) {
      this.subs.push(this.selection$.subscribe(x => this.log('selection', x)));
      this.subs.push(this.selectedWorkOrderIDs$.subscribe(x => this.log('selectedWorkOrderIDs', x)));
      this.subs.push(this.woData$.subscribe(x => this.log('woData', x)));
      this.subs.push(this.selectedContractor$.subscribe(x => this.log('selectedContractor', x)));
      this.subs.push(this.selectedInstrument$.subscribe(x => this.log('selectedInstrument', x)));
      this.subs.push(this.selectedLabor$.subscribe(x => this.log('selectedLabor', x)));
      this.subs.push(this.selectedMisc$.subscribe(x => this.log('selectedMisc', x)));
      this.subs.push(this.selectedPart$.subscribe(x => this.log('selectedPart', x)));
      this.subs.push(this.selectedTool$.subscribe(x => this.log('selectedTool', x)));
      this.subs.push(this.refreshViewer$.subscribe(x => this.log('refreshViewer', x)));
      this.subs.push(this.checklistToEdit$.subscribe(x => this.log('checklistToEdit', x)));
    }
  }
}