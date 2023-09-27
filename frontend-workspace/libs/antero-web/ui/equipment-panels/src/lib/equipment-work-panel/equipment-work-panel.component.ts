import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment, WorkOrder } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { UIStoreService } from '@allmax-angular/antero-web/state-management/ui-store';
import { DataStores, Modals, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { StateManagementService } from '@allmax-angular/shared/features/state-management';
import { DeviceTypes, Nullable, TableData } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { getDateString, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs'

@Component({
  selector: 'ant-equipment-work-panel',
  templateUrl: './equipment-work-panel.component.html',
  styles: [],
})
export class EquipmentWorkPanelComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>;
  @Input() public height = '100%';

  public record: Nullable<Equipment>;
  public selection: Nullable<WorkOrder>;

  public data: Nullable<TableData>;

  public deviceType = DeviceTypes.UNSET;
  public deviceTypes: typeof DeviceTypes = DeviceTypes;

  public viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  public icons = { ...allIcons };

  private subs: Subscription[] = [];

  public state = inject(StateManagementService);
  
  public get innerHeight(): string {
    return `calc(${ this.height } - 58px)`
  }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private store: EquipmentSectionStore,
    private workCtrl: CurrentWorkController,
    private ctrl: EquipmentControllerService,
    private currentWorkStore: CurrentWorkStoreService,
    private uiStore: UIStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.store.selection$.subscribe(x => {
      this.record = x;
      this.getData();
    }));
    this.subs.push(this.appStore.deviceType$.subscribe(x => {
      this.deviceType = x;
      this.getData();
    }));
    const sub = this.state.getStore(DataStores.UI)?.observe(UIStorePropNames.VIEW_TYPE).subscribe(x => {
      this.viewType = x;
      this.getData();
    });
    if (sub) {
      this.subs.push(sub);
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async workOrderSelectionChangeHandler(record: WorkOrder): Promise<void> {
    this.selection = record;
    if (this.selection) {
      await this.workCtrl.getWorkOrderData(this.selection.id)
      // this.viewers
      this.antero.openModal(Modals.WORK_ORDER_VIEWER);
    }
  }
  
  public convertDate(date: Nullable<Date | string>): string  {
    if (date) {
      return getDateString(date);
    }
    return '';
  }

  public showWorkViewer(record: WorkOrder): void {
    this.currentWorkStore.selectedWorkOrderIDs = [ record.id ];
    this.antero.openModal(Modals.WORK_ORDER_VIEWER);
  }

  public async getData(): Promise<void> {
    if (!this.record) { return; }
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getActiveWorkOrders(this.record.id, ['workOrderNumber']) as TableData;
    } else {
      this.data = await this.ctrl.getActiveWorkOrders(this.record.id, [
        'isDue',
        'needsAttention',
        'workOrderNumber',
        'task.name',
        'workType.name',
        'dateScheduled',
        'workStatus.name'
      ]) as TableData;
    }
    this.data?.colDef?.findByDataField('workOrderNumber')?.updateOptions({ cellTemplate: 'cellTemplate' });
   
  }

  public getShortDateString(date: Date): string {
    return getDateString(date)
  }

  public searchHandler(term: string): void {
    this.table?.searchTermChangedHandler(term);
  }
}
