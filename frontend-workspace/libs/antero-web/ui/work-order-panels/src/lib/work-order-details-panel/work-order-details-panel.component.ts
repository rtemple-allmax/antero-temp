import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { ChecklistItem, Modals, WorkOrderData } from '@allmax-angular/antero-web/types';
import { CrudFunctions, DeviceTypes, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { getDateString, getDateTimeString, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faSquareThisWayUp } from '@fortawesome/pro-regular-svg-icons';
import { DeviceType } from 'ngx-device-detector';
import { first, Subscription } from 'rxjs';
import { WorkOrderPanelBaseComponent } from '../work-order-panel.base';

@Component({
  selector: 'ant-work-order-details-panel',
  templateUrl: './work-order-details-panel.component.html',
  styles: [],
})
export class WorkOrderDetailsPanelComponent extends WorkOrderPanelBaseComponent implements OnInit, OnDestroy {
  @Input() public height = 'auto';
  

  // @Output() public showEquipmentRequested = new EventEmitter<undefined>();
  // @Output() public editInstructionsRequested = new EventEmitter<undefined>();
  // @Output() public editChecklistRequested = new EventEmitter<undefined>();

  public wodata: Nullable<WorkOrderData>;

  public checkboxBindings: ObservableBinding<boolean>[] = [];
  
  // public icons = { ...toolbarIcons };

  public primaryImage: any;

  // public deviceType = DeviceTypes.UNSET;
  // public deviceTypes: typeof DeviceTypes = DeviceTypes;

  // private subs: Subscription[] = [];

  public get inService(): string {
    return this.wodata?.wo?.equipment?.inServiceStatus ? 'In Service' : 'Out Of Service' ;
  }

  public get instructions(): Nullable<string> {
    return this.wodata?.instructions;
  }

  public get checklist(): ChecklistItem[] {
    return  this.wodata?.wo?.checklist || [];
  }

  public get eqName(): string {
    return this.wodata?.wo?.equipment?.name as string;
  }

  public get taskName(): string {
    return this.wodata?.wo?.task?.name as string;
  }

  public get historyButtonLabel(): string {
    if (this.wodata?.wo?.dateLastCompleted) {
      return `Last Completed on ${ getDateString(this.wodata.wo.dateLastCompleted) }`
    } else {
      return 'History';
    }
  }

  public get innerHeight(): string {
    return `calc(${ this.height } - 100px)`;
  }

  public get criticalityScore(): string {
    if (this.wodata?.wo?.equipment) {
      const val = (this.wodata.wo.equipment.probabilityOfFailure || 0) * (this.wodata.wo.equipment.consequenceOfFailure || 0);
      if (!isNaN(val)) {
        return `${ val }`
      } else {
        return '';
      }
    }
    return '';
  }
  
  // constructor(
  //   private antero: AnteroService,
  //   private anteroStore: AnteroStoreService,
  //   private workStore: CurrentWorkStoreService,
  //   private ctrl: EquipmentControllerService
  // ) { }

  public override ngOnInit(): void {
    super.ngOnInit();
    // this.subs.push(this.appStore.deviceType$.subscribe(x => this.deviceType = x));
    this.subs.push(this.workStore.woData$.subscribe(x => {
      this.wodata = x;
      this.getPrimaryImage();
    }));

  }

  // public ngOnDestroy(): void {
  //   unsubscribe(this.subs);
  // }
  
  public showEquipment(): void {
    this.antero.openModal(Modals.WORK_ORDER_EQUIPMENT);
  }

  public showEquipmentHistory(): void {
    this.antero.openModal(Modals.WORK_ORDER_EQUIPMENT_HISTORY);
  }

  public editInstructions(): void {
    this.antero.openModal(Modals.WORK_ORDER_EDIT_INSTRUCTIONS, CrudFunctions.UPDATE);
  }

  public editChecklist(): void {
    this.antero.openModal(Modals.WORK_ORDER_EDIT_CHECKLIST, CrudFunctions.UPDATE);
  }

  public adminEdit(): void {
    this.antero.openModal(Modals.WORK_ORDER_EDIT_ADMIN_INFO, CrudFunctions.UPDATE);
  }
  
  public syncBindings(): void {
    const array = this.wodata?.wo?.checklist || [];
  }

  public async getPrimaryImage(): Promise<void> {
    this.primaryImage = null;
    if (this.wodata?.wo?.equipment) {
      // const result = await this.ctrl.getPrimaryImage(this.wodata.wo.equipment.id);
      // if (result) {
      //   this.primaryImage = result;
      // }
    }
  }

  // public getDateString(date: Nullable<Date | string>): string {
  //   if (date) {
  //     return getDateString(date);
  //   } 
  //   return '';
  // }
}

