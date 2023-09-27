import { WorkReviewControllerService } from '@allmax-angular/antero-web/data-access/work-review-controller';
import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { UIStoreService } from '@allmax-angular/antero-web/state-management/ui-store';
import { WorkReviewSectionStore } from '@allmax-angular/antero-web/state-management/work-review-section-store';
import { DeviceTypes, Nullable, TableData } from '@allmax-angular/shared/types';
import { miscIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailComponent, MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-section-work-review',
  templateUrl: './section-work-review.component.html',
  styles: [],
})
export class SectionWorkReviewComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MasterDetailComponent) public view: Nullable<MasterDetailComponent>;

  private subs: Subscription[] = [];

  public selection: WorkOrder[] = [];

  public data: Nullable<TableData>;

  public viewType = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;
  
  public deviceType = DeviceTypes.UNSET;
  
  public icons = { ...toolbarIcons, ...miscIcons };

  public selectedSwicthValue = '';
  public switchValues: [ string, string ] = [ 'Work Orders', 'Procedures' ];
  
  public get detailButtonTransform(): string {
    return this.view?.drawer?.isOpen ? 'rotate(180deg)': 'rotate(0)'
  }

  constructor(
    private appStore: AnteroStoreService,
    private ctrl: WorkReviewControllerService,
    private store: WorkReviewSectionStore,
    private uiStore: UIStoreService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.subs.push(this.appStore.deviceType$.subscribe(x => this.deviceType = x));
    this.subs.push(this.store.selection$.subscribe(x => this.selection = x));
    this.ctrl.initialize();
    this.updateData();
  }

  public ngAfterViewInit(): void {
    if (this.view) {
      // this.subs.push(this.uiStore.masterDetailViewType$.subscribe(x => this.viewType = x));
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
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.store.selection = [ selection ];
    } else {
      this.store.selection = selection;
    }
  }

  public toggleChange(state: boolean): void {
    this.selectedSwicthValue = state ? this.switchValues[1] : this.switchValues[0];
  }

  public async updateData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.get(['workOrderNumber']);
      this.data?.colDef?.findByDataField('workOrderNumber')?.updateOptions({ cellTemplate: 'cellTemplate' });
    } else {
      this.data = await this.ctrl.get([]);
    }
  }
}
