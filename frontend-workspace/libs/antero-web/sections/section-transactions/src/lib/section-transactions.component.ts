import { TransactionsController } from '@allmax-angular/antero-web/data-access/transactions-controller';
import { Transaction } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { TransactionsSectionStore } from '@allmax-angular/antero-web/state-management/transactions-section-store';
import { UIStoreService } from '@allmax-angular/antero-web/state-management/ui-store';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { StateManagementService } from '@allmax-angular/shared/features/state-management';
import { DeviceTypes, Nullable, ObservableBinding, TableData, TimeFrameParams } from '@allmax-angular/shared/types';
import { DateRangeBoxComponent } from '@allmax-angular/shared/ui/form-fields/date-range-box';
import { miscIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailComponent, MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { getDateString, HistoryTimeFrames, TimeFrameTypes, unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-section-transactions',
  templateUrl: './section-transactions.component.html',
  styles: [],
})
export class SectionTransactionsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MasterDetailComponent) public view: Nullable<MasterDetailComponent>;
  @ViewChild(DateRangeBoxComponent) public dateRange: Nullable<DateRangeBoxComponent>;
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  private subs: Subscription[] = [];

  public selection: Nullable<Transaction>;

  public dateRangeBinding = new ObservableBinding<HistoryTimeFrames>(HistoryTimeFrames.ALL);
  public dateStartBinding = new ObservableBinding<Date>(null);
  public dateEndBinding = new ObservableBinding<Date>(null);

  public data: Nullable<TableData>;

  public viewType = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;
  
  public deviceType = DeviceTypes.UNSET;
  
  public icons = { ...toolbarIcons, ...miscIcons };

  public showCustomRange = false;
  
  public get detailButtonTransform(): string {
    return this.view?.drawer?.isOpen ? 'rotate(180deg)': 'rotate(0)'
  }

  public get customRangeReady(): boolean {
    return !!this.dateStartBinding.value && !!this.dateEndBinding.value;
  }

  public state = inject(StateManagementService)

  constructor(
    private appStore: AnteroStoreService,
    private ctrl: TransactionsController,
    private store: TransactionsSectionStore,
    // private uiStore: UIStoreService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.subs.push(this.appStore.deviceType$.subscribe(x => this.deviceType = x));
    this.subs.push(this.store.selection$.subscribe(x => this.selection = x));
    this.ctrl.initialize();
    this.subs.push(this.dateRangeBinding.value$.subscribe(x => {
      if (x === HistoryTimeFrames.CUSTOM) {
        this.showCustomRange = true;
        this.modal?.open();
      } else {
        this.modal?.close();
        this.updateData();
        this.showCustomRange = false;
      }
    }));
    this.updateData();
  }

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.UI)?.observe(UIStorePropNames.VIEW_TYPE)?.subscribe(x => this.viewType = x);
    if (sub) {
      this.subs.push(sub);
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
    this.ctrl.finalize();
  }

  public async toggleView(): Promise<void> {
    if (this.view) {
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.view.viewType = MasterDetailViewTypes.TABLE;
        this.updateData();
      } else {
        this.view.viewType = MasterDetailViewTypes.LIST;
        this.updateData();
      }
    }
  }

  public openDetail(): void {
    this.view?.openDetail()
  }

  public selectionHandler(selection: any): void {
    this.store.selection = selection;
  }

  public rangeChangedHandler(e: any): void {
    this.dateRangeBinding.set(e.id as HistoryTimeFrames);
  }

  public submitCustomRange(): void {
    this.updateData();
    const dateString = `${ this.dateStartBinding.value?.toLocaleDateString() } - ${ this.dateEndBinding.value?.toLocaleDateString() }`
    this.dateRange?.setValue(dateString);
    this.modal?.close();
  }

  public getTimeParams(): TimeFrameParams {
    return {
      timeFrameType: TimeFrameTypes.HISTORY,
      historyTimeFrame: this.dateRangeBinding.value || HistoryTimeFrames.ALL,
      dateStart: this.dateStartBinding.value || undefined,
      dateEnd: this.dateEndBinding.value || undefined
    };
  }

  public async  updateData(): Promise<void> {
    const timeParams = this.getTimeParams();
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.get(['supplier'], timeParams);
      this.data?.colDef?.findByDataField('supplier')?.updateOptions({ cellTemplate: 'cellTemplate', caption: 'Supplier & Transaction Date' });
    } else {
      this.data = await this.ctrl.get([], timeParams);
    }
  }

  public getDate(val: Date | string): string {
    return getDateString(val);
  }
}
