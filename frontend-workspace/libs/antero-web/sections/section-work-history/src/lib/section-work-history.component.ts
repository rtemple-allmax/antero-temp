import { Component, OnDestroy, OnInit, AfterViewInit, inject } from '@angular/core';
import { DeviceTypes, Nullable, ObservableBinding, TableData, TimeFrameParams } from '@allmax-angular/shared/types';
import { miscIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailComponent, MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorkHistory } from '@allmax-angular/antero-web/entities';
import { HistoryTimeFrames, TimeFrameTypes, unsubscribe } from '@allmax-angular/shared/utils';
import { WorkHistorySectionStore } from '@allmax-angular/antero-web/state-management/work-history-section-store';
import { DateRangeBoxComponent } from '@allmax-angular/shared/ui/form-fields/date-range-box';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { WorkHistoryControllerService } from '@allmax-angular/antero-web/data-access/work-history-controller';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { UIStoreService } from '@allmax-angular/antero-web/state-management/ui-store';
import { StateManagementService } from '@allmax-angular/shared/features/state-management';

@Component({
  selector: 'ant-section-work-history',
  templateUrl: './section-work-history.component.html',
  styles: [`
    .dropdown-item {
      background-color: white;
      outline: 0;
      padding: var(--space-md);
      white-space: nowrap;
      border: var(--border);
      cursor: pointer;
      position: relative; 
    }

    .dropdown-item:hover {
      background-color: var(--highlight);
    }
  `]
})
export class SectionWorkHistoryComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MasterDetailComponent) public view: Nullable<MasterDetailComponent>;
  @ViewChild(DateRangeBoxComponent) public dateRange: Nullable<DateRangeBoxComponent>;
  @ViewChild(ModalWindowComponent) public modal: Nullable<ModalWindowComponent>;

  private subs: Subscription[] = [];

  public selection: Nullable<WorkHistory>;
  
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

  public state = inject(StateManagementService);

  constructor(
    private appStore: AnteroStoreService,
    private ctrl: WorkHistoryControllerService,
    private store: WorkHistorySectionStore,
    private uiStore: UIStoreService
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
    if (this.view) {
      // this.subs.push(this.uiStore.masterDetailViewType$.subscribe(x => {
      //   this.viewType = x;
      //   this.updateData();
      // }));
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
      } else {
        this.view.viewType = MasterDetailViewTypes.LIST;
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

  public async updateData(): Promise<void> {
    const timeParams = this.getTimeParams();
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.get(['task'], timeParams);
      this.data.colDef?.findByDataField('task')?.updateOptions({ cellTemplate: 'cellTemplate', caption: 'Equipment & Task' });
    } else {
      this.data = await this.ctrl.get([], timeParams);
    }
  }
}
