import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment, WorkHistory } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';

@Component({
  selector: 'ant-equipment-panel-history',
  templateUrl: './equipment-panel-history.component.html',
  styleUrls: ['./equipment-panel-history.component.scss'],
})
export class EquipmentPanelHistoryComponent extends PanelBaseComponent implements OnInit {
  @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>;
  // @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;
  // @ViewChild(DateRangeBoxComponent) public dateRange: Nullable<DateRangeBoxComponent>;

  // @Input() public height = '100%';

  // public completedDateFilterOptions = [
  //   { id: CompletedDateOptions.THIS_MONTH, name: 'This Month' },
  //   { id: CompletedDateOptions.THIS_YEAR, name: 'This Year' },
  //   { id: CompletedDateOptions.LAST_30_DAYS, name: 'Last 30 Days' },
  //   { id: CompletedDateOptions.LAST_180_DAYS, name: 'Last 180 Days' },
  //   { id: CompletedDateOptions.LAST_365_DAYS, name: 'Last 365 Days' }
  // ]
  
  // private subs: Subscription[] = [];

  // public data: Nullable<TableData>;

  public record: Nullable<Equipment>;
  public selection: Nullable<WorkHistory>;
  public ctrl = inject(EquipmentControllerService);

  // public dateRangeBinding = new ObservableBinding<HistoryTimeFrames>(HistoryTimeFrames.ALL);
  // public dateStartBinding = new ObservableBinding<Date>(null);
  // public dateEndBinding = new ObservableBinding<Date>(null);

  // public filterBinding = new ObservableBinding<any>();

  public showCustomRange = false;

  // public deviceType = DeviceTypes.UNSET;
  // public deviceTypes: typeof DeviceTypes = DeviceTypes;



  // public get innerHeight(): string {
  //   return `calc(${ this.height } - 58px)`
  // }

  // public get customRangeReady(): boolean {
  //   return !!this.dateStartBinding.value && !!this.dateEndBinding.value;
  // }

  // public state = inject(StateManagementService);

  // constructor(
  //   private appStore: AnteroStoreService,
  //   private antero: AnteroService,
  //   private ctrl: EquipmentControllerService,
  //   private eqStore: EquipmentSectionStore,
  //   private store: WorkHistorySectionStore,
  //   private uiStore: UIStoreService
  // ) { }

  public override ngOnInit(): void {
    // if (this.record) {
    //   this.updateData();
    // }
    // this.subs.push(this.appStore.deviceType$.subscribe(x => {
    //   this.deviceType = x;
    //   this.updateData();
    // }));
    // this.subs.push(this.dateRangeBinding.value$.subscribe(x => {
    //   this.eqStore.historyTimeFrame = x as HistoryTimeFrames;
    //   this.rangeHandler(x as HistoryTimeFrames);
    // }));

    // this.subs.push(this.filterBinding.value$.subscribe((x) => {
    //   this.updateData()
    // }));
    // this.subs.push(this.eqStore.selection$.subscribe(x => {
    //   this.record = x;
    //   this.updateData();
    // }));
    
    // this.subs.push(this.store.selection$.subscribe(x => this.selection = x));

    // const sub = this.state.getStore(DataStores.UI)?.observe(UIStorePropNames.VIEW_TYPE).subscribe(x => this.viewType = x);
    const sub = this.state.getStore(DataStores.EQUIPMENT)
    ?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)
    ?.subscribe(x => {
      this.record = x;
      this.updateData();
    }); 
    if (sub) {
      this.subs.push(sub);
    }
  }

  // public ngOnChanges(): void {
  //   if (this.record) {
  //     this.updateData();
  //   }
  // }

  // public ngOnDestroy(): void {
  //   unsubscribe(this.subs);
  // }

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

  // public rangeChangedHandler(e: any): void {
  //   this.dateRangeBinding.set(e.id as HistoryTimeFrames);
  // }

  // public rangeHandler(timeFrame: HistoryTimeFrames): void {
  //   if (timeFrame === HistoryTimeFrames.CUSTOM) {
  //     this.showCustomRange = true;
  //     this.modal?.open();
  //   } else {
  //     this.modal?.close();
  //     this.updateData();
  //     this.showCustomRange = false;
  //   }
  // }

  // public submitCustomRange(): void {
  //   this.updateData();
  //   const dateString = `${ this.dateStartBinding.value?.toLocaleDateString() } - ${ this.dateEndBinding.value?.toLocaleDateString() }`
  //   this.dateRange?.setValue(dateString);
  //   this.modal?.close();
  // }

  public searchHandler(term: string): void {
    this.table?.searchTermChangedHandler(term);
  }

  public workHistorySelectionChangeHandler(record: WorkHistory): void {
    this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.SELECTED_WORK_HISTORY, record);
  }
  
  // public getTimeFrame(): [ Nullable<Date>, Nullable<Date> ] {
  //   let dateStart: Nullable<DateTime> = null;
  //   let dateEnd: Nullable<DateTime> = DateTime.now();
  //   if (this.filterBinding.value) {
  //     const option = (this.filterBinding.value as any).id
  //     switch (option) {
  //       case CompletedDateOptions.LAST_180_DAYS:
  //         dateStart = dateEnd.minus({ days: 180 })
  //         break;
  //       case CompletedDateOptions.LAST_30_DAYS:
  //         dateStart = dateEnd.minus({ days: 30 })
  //         break;
  //       case CompletedDateOptions.LAST_365_DAYS:
  //         dateStart = dateEnd.minus({ days: 365 })
  //         break;
  //       case CompletedDateOptions.THIS_MONTH:
  //         dateStart = dateEnd.startOf('month')
  //         break;
  //       case CompletedDateOptions.THIS_YEAR:
  //         dateStart = dateEnd.startOf('year')
  //         break;
  //       default:
  //         dateStart = null;
  //         dateEnd = null;
  //         break;
  //     }
  //     return [
  //       dateStart?.toJSDate(),
  //       dateEnd?.toJSDate()
  //     ];
  //   } else {
  //     return [ null, null ];
  //   }
    
  // }

  public async updateData(): Promise<void> {
    // if (!this.record) { return; }
    // const timeFrame = this.getTimeFrame();
    // if (this.viewType === MasterDetailViewTypes.LIST) {
    if (this.record) {
      this.data = await this.ctrl.getWorkHistory(this.record.id, [ 'workOrderNumber' ], [null, null]) as TableData;
      this.data?.colDef.findByDataField('workOrderNumber')?.updateOptions({ cellTemplate: 'cellTemplate' });
    }
    // } else {
    //   this.data = await this.ctrl.getWorkHistory(this.record.id, [
    //     'workOrderNumber',
    //     'task',
    //     'workType',
    //     'workPriority',
    //     'dateCompleted'
    //   ], timeFrame) as TableData;
    // }
  }

  // public showWorkHistoryViewer(record: WorkHistory): void {
  //   this.store.selection = record;
  //   this.antero.openModal(Modals.WORK_HISTORY_VIEWER);
  // }

  // public getDateString(val: any): string {
  //   return getDateString(val);
  // }
}
