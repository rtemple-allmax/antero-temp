import { WorkRequestsControllerService } from '@allmax-angular/antero-web/data-access/work-requests-controller';
import { WorkRequest } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { UIStoreService } from '@allmax-angular/antero-web/state-management/ui-store';
import { WorkRequestsSectionStore } from '@allmax-angular/antero-web/state-management/work-requests-section-store';
import { DeviceTypes, Nullable, TableData } from '@allmax-angular/shared/types';
import { miscIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailComponent, MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { getDateString, unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-section-work-requests',
  templateUrl: './section-work-requests.component.html',
  styles: [],
})
export class SectionWorkRequestsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MasterDetailComponent) public view: Nullable<MasterDetailComponent>;

  private subs: Subscription[] = [];

  public selection: Nullable<WorkRequest>;

  public data: Nullable<TableData>;

  public viewType = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;
  
  public deviceType = DeviceTypes.UNSET;
  
  public icons = { ...toolbarIcons, ...miscIcons };

  public get detailButtonTransform(): string {
    return this.view?.drawer?.isOpen ? 'rotate(180deg)': 'rotate(0)'
  }

  constructor(
    private appStore: AnteroStoreService,
    private ctrl: WorkRequestsControllerService,
    private store: WorkRequestsSectionStore,
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
    this.store.selection = selection;
  }
  
  public async updateData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.get(['itemToRepair']);
      this.data?.colDef?.findByDataField('itemToRepair')?.updateOptions({ cellTemplate: 'cellTemplate', caption: 'Equipment & Date Submitted' });
    } else {
      this.data = await this.ctrl.get([]);
    }
  }

  public getDate(val: Date | string): string {
    return getDateString(val);
  }
}
