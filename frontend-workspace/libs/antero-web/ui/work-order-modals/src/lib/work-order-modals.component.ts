import { CurrentWorkController } from "@allmax-angular/antero-web/data-access/current-work-controller";
import { WorkOrderInstrument, WorkOrderLabor, WorkOrderMisc, WorkOrderPart, WorkOrderSupplier, WorkType } from "@allmax-angular/antero-web/entities";
import { AnteroService } from "@allmax-angular/antero-web/services/antero-service";
import { AnteroStoreService } from "@allmax-angular/antero-web/state-management/antero-store";
import { CurrentWorkStoreService } from "@allmax-angular/antero-web/state-management/current-work-store";
import { ChecklistItem, Modals, WorkOrderData } from "@allmax-angular/antero-web/types";
import { CrudFunctions, DeviceTypes, Nullable } from "@allmax-angular/shared/types";
import { unsubscribe } from "@allmax-angular/shared/utils";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: 'ant-work-order-modals',
  templateUrl: './work-order-modals.component.html'
})
export class WorkOrderModalsComponent implements OnInit, OnDestroy{
  private subs: Subscription[] = [];

  public data: Nullable<WorkOrderData>;
  
  public selectedContractor: Nullable<WorkOrderSupplier>;
  public selectedInstrument: Nullable<WorkOrderInstrument>;
  public selectedLabor: Nullable<WorkOrderLabor>;
  public selectedMisc: Nullable<WorkOrderMisc>;
  public selectedPart: Nullable<WorkOrderPart>;
  
  public deviceType = DeviceTypes.UNSET;
  public deviceTypes: typeof DeviceTypes = DeviceTypes;

  public currentModal: Modals = Modals.NONE;
  public modals: typeof Modals = Modals;;

  public crud = CrudFunctions.READ;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  
  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private ctrl: CurrentWorkController,
    private workStore: CurrentWorkStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.appStore.deviceType$.subscribe(x => this.deviceType = x));
    this.subs.push(this.appStore.modal$.subscribe(x => this.currentModal = x));
    this.subs.push(this.workStore.woData$.subscribe(x => this.data = x));
    this.subs.push(this.workStore.selectedContractor$.subscribe(x => this.selectedContractor = x));
    this.subs.push(this.workStore.selectedInstrument$.subscribe(x => this.selectedInstrument = x));
    this.subs.push(this.workStore.selectedLabor$.subscribe(x => this.selectedLabor = x));
    this.subs.push(this.workStore.selectedMisc$.subscribe(x => this.selectedMisc = x));
    this.subs.push(this.workStore.selectedPart$.subscribe(x => this.selectedPart = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }
  
  public closeModal(): void {
    this.antero.closeModal();
  }

  public async checklistEditorChangeHandler(checklist: ChecklistItem[]): Promise<void> {
    // console.log('checklist to submit', checklist)
    if (this.data?.wo) {
      const result = await this.ctrl.updateWorkOrderChecklist(this.data.wo.id, checklist);
      if (result) {
        this.appStore.refresh = true;
        this.workStore.refreshViewer = true;
        this.antero.closeModal();
      }
    }
  } 
}