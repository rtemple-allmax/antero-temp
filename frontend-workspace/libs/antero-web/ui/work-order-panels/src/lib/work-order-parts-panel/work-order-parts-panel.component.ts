import { WorkOrderPart } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { Modals, WorkOrderData } from '@allmax-angular/antero-web/types';
import { CrudFunctions, DeviceTypes, Nullable } from '@allmax-angular/shared/types';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { faUserTieHair } from '@fortawesome/pro-regular-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-order-parts-panel',
  templateUrl: './work-order-parts-panel.component.html',
  styles: [],
})
export class WorkOrderPartsPanelComponent implements OnInit, OnDestroy {
  @Input() public height = 'auto';
  
  private subs: Subscription[] = [];
  
  public data: Nullable<WorkOrderData>;
  
  public deviceType = DeviceTypes.UNSET;
  public deviceTypes: typeof DeviceTypes = DeviceTypes;

  public icons = { ...toolbarIcons };

  public get parts(): WorkOrderPart[] {
    if (this.data) {
      return this.data.parts;
    } else {
      return [];
    }
  }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private workStore: CurrentWorkStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.workStore.woData$.subscribe(x => this.data = x));
    this.subs.push(this.appStore.deviceType$.subscribe(x => this.deviceType = x));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public openAdd(): void {
    this.antero.openModal(Modals.WORK_ORDER_ADD_EDIT_PART, CrudFunctions.CREATE);
  }

  public openEdit(record: WorkOrderPart): void {
    this.workStore.selectedPart = record;
    this.antero.openModal(Modals.WORK_ORDER_ADD_EDIT_PART, CrudFunctions.UPDATE);
  }
}
