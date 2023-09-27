import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment, Procedure, WorkHistory } from '@allmax-angular/antero-web/entities';
import { WorkStatePropNames } from '@allmax-angular/antero-web/features/feature-work-management';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { UIStoreService } from '@allmax-angular/antero-web/state-management/ui-store';
import { WorkHistorySectionStore } from '@allmax-angular/antero-web/state-management/work-history-section-store';
import { ActiveWorkTypes, DataStores, Modals, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { StateManagementService } from '@allmax-angular/shared/features/state-management';
import { DeviceTypes, Nullable, ObservableBinding, TableData, TimeFrameParams } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { DateRangeBoxComponent } from '@allmax-angular/shared/ui/form-fields/date-range-box';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { getDateString, HistoryTimeFrames, TimeFrameTypes, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit, ViewChild, Input, OnChanges, inject } from '@angular/core';
import { DateTime } from 'luxon';
import { Subscription } from 'rxjs';

enum CompletedDateOptions {
  THIS_MONTH,
  THIS_YEAR,
  LAST_30_DAYS,
  LAST_180_DAYS,
  LAST_365_DAYS,
}

@Component({
  selector: 'ant-equipment-history-panel',
  templateUrl: './equipment-history-panel.component.html',
  styles: [],
})
export class EquipmentHistoryPanelComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>;
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;
  @ViewChild(DateRangeBoxComponent) public dateRange: Nullable<DateRangeBoxComponent>;

  @Input() public height = '100%';

  public completedDateFilterOptions = [
    { id: CompletedDateOptions.THIS_MONTH, name: 'This Month' },
    { id: CompletedDateOptions.THIS_YEAR, name: 'This Year' },
    { id: CompletedDateOptions.LAST_30_DAYS, name: 'Last 30 Days' },
    { id: CompletedDateOptions.LAST_180_DAYS, name: 'Last 180 Days' },
    { id: CompletedDateOptions.LAST_365_DAYS, name: 'Last 365 Days' }
  ]
  
  private subs: Subscription[] = [];

  public data: Nullable<TableData>;

  public record: Nullable<Equipment>;
  public selection: Nullable<WorkHistory>;

  public dateRangeBinding = new ObservableBinding<HistoryTimeFrames>(HistoryTimeFrames.ALL);
  public dateStartBinding = new ObservableBinding<Date>(null);
  public dateEndBinding = new ObservableBinding<Date>(null);

  public filterBinding = new ObservableBinding<any>();

  public showCustomRange = false;

  public deviceType = DeviceTypes.UNSET;
  public deviceTypes: typeof DeviceTypes = DeviceTypes;

  public viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  public icons = { ...miscIcons };

  public get innerHeight(): string {
    return `calc(${ this.height } - 58px)`
  }

  public get customRangeReady(): boolean {
    return !!this.dateStartBinding.value && !!this.dateEndBinding.value;
  }

  public state = inject(StateManagementService);

  constructor(
    private appStore: AnteroStoreService,
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private eqStore: EquipmentSectionStore,
    private store: WorkHistorySectionStore,
    private uiStore: UIStoreService
  ) { }

  public ngOnInit(): void {
    if (this.record) {
      this.updateData();
    }
    this.subs.push(this.appStore.deviceType$.subscribe(x => {
      this.deviceType = x;
      this.updateData();
    }));
    this.subs.push(this.dateRangeBinding.value$.subscribe(x => {
      this.eqStore.historyTimeFrame = x as HistoryTimeFrames;
      this.rangeHandler(x as HistoryTimeFrames);
    }));

    this.subs.push(this.filterBinding.value$.subscribe((x) => {
      this.updateData()
    }));
    this.subs.push(this.eqStore.selection$.subscribe(x => {
      this.record = x;
      this.updateData();
    }));
    
    this.subs.push(this.store.selection$.subscribe(x => this.selection = x));

    const sub = this.state.getStore(DataStores.UI)?.observe(UIStorePropNames.VIEW_TYPE).subscribe(x => this.viewType = x);
    if (sub) {
      this.subs.push(sub);
    }
  }

  public ngOnChanges(): void {
    if (this.record) {
      this.updateData();
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  // public switchChangeHandler(state: boolean): void {
  //   this.dataType = state ? ActiveWorkTypes.PROCEDURES : ActiveWorkTypes.WORK_ORDERS;
  //   this.dateRangeBinding.set(HistoryTimeFrames.ALL);
  //   this.dateRange?.setValue(0)
  //   this.dateEndBinding.reset();
  //   this.dateStartBinding.reset();
  //   this.updateData();
  // }

  // public radioChangeHandler(value: string): void {
  //    this.view = value as ActiveWorkTypes;
  //    this.dateRangeBinding.set(HistoryTimeFrames.ALL);
  //    this.dateRange?.setValue(0)
  //    this.dateEndBinding.reset();
  //    this.dateStartBinding.reset();
  // }

  public rangeChangedHandler(e: any): void {
    this.dateRangeBinding.set(e.id as HistoryTimeFrames);
  }

  public rangeHandler(timeFrame: HistoryTimeFrames): void {
    if (timeFrame === HistoryTimeFrames.CUSTOM) {
      this.showCustomRange = true;
      this.modal?.open();
    } else {
      this.modal?.close();
      this.updateData();
      this.showCustomRange = false;
    }
  }

  public submitCustomRange(): void {
    this.updateData();
    const dateString = `${ this.dateStartBinding.value?.toLocaleDateString() } - ${ this.dateEndBinding.value?.toLocaleDateString() }`
    this.dateRange?.setValue(dateString);
    this.modal?.close();
  }

  public searchHandler(term: string): void {
    this.table?.searchTermChangedHandler(term);
  }

  public workHistorySelectionChangeHandler(record: WorkHistory): void {
    this.store.selection = record;
  }
  
  public getTimeFrame(): [ Nullable<Date>, Nullable<Date> ] {
    let dateStart: Nullable<DateTime> = null;
    let dateEnd: Nullable<DateTime> = DateTime.now();
    if (this.filterBinding.value) {
      const option = (this.filterBinding.value as any).id
      switch (option) {
        case CompletedDateOptions.LAST_180_DAYS:
          dateStart = dateEnd.minus({ days: 180 })
          break;
        case CompletedDateOptions.LAST_30_DAYS:
          dateStart = dateEnd.minus({ days: 30 })
          break;
        case CompletedDateOptions.LAST_365_DAYS:
          dateStart = dateEnd.minus({ days: 365 })
          break;
        case CompletedDateOptions.THIS_MONTH:
          dateStart = dateEnd.startOf('month')
          break;
        case CompletedDateOptions.THIS_YEAR:
          dateStart = dateEnd.startOf('year')
          break;
        default:
          dateStart = null;
          dateEnd = null;
          break;
      }
      return [
        dateStart?.toJSDate(),
        dateEnd?.toJSDate()
      ];
    } else {
      return [ null, null ];
    }
    
  }

  public async updateData(): Promise<void> {
    if (!this.record) { return; }
    const timeFrame = this.getTimeFrame();
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getWorkHistory(this.record.id, [ 'workOrderNumber' ], timeFrame) as TableData;
    } else {
      this.data = await this.ctrl.getWorkHistory(this.record.id, [
        'workOrderNumber',
        'task',
        'workType',
        'workPriority',
        'dateCompleted'
      ], timeFrame) as TableData;
    }
    this.data.colDef.findByDataField('workOrderNumber')?.updateOptions({ cellTemplate: 'cellTemplate' });
  }

  public showWorkHistoryViewer(record: WorkHistory): void {
    this.store.selection = record;
    this.antero.openModal(Modals.WORK_HISTORY_VIEWER);
  }

  public getDateString(val: any): string {
    return getDateString(val);
  }
}


