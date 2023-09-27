import { WorkOrderInstrument } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { ChecklistItem, Modals, WorkOrderData } from '@allmax-angular/antero-web/types';
import { DeviceTypes, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-work-order-completion-panel',
  templateUrl: './work-order-completion-panel.component.html',
  styles: [],
})
export class WorkOrderCompletionPanelComponent implements OnInit, OnDestroy {
  @Input() public height = 'auto';
  
  private subs: Subscription[] = [];
  public deviceTypes: typeof DeviceTypes = DeviceTypes;
  public deviceType = DeviceTypes.UNSET;
  public data: Nullable<WorkOrderData>;
  public icons = { ...toolbarIcons }
  public checkboxBindings: ObservableBinding<boolean>[] = [];

  public get instruments(): WorkOrderInstrument[] {
    if (this.data) {
      return this.data.instruments;
    } else {
      return [];
    }
  }

  public get checklist(): ChecklistItem[] {
    return this.data?.wo?.checklist || [];
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

  public enterReading(record: WorkOrderInstrument): void {
    this.workStore.selectedInstrument = record;
    this.antero.openModal(Modals.WORK_ORDER_ENTER_READINGS);
  }
}
