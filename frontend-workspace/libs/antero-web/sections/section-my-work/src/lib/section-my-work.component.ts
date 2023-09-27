import { MyWorkController } from '@allmax-angular/antero-web/data-access/my-work-controller';
import { Procedure, WorkOrder } from '@allmax-angular/antero-web/entities';
import { MyWorkSectionStore } from '@allmax-angular/antero-web/state-management/my-work-section-store';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { allIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailComponent, MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-section-my-work',
  templateUrl: './section-my-work.component.html',
  styles: [],
})
export class SectionMyWorkComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MasterDetailComponent) public view: Nullable<MasterDetailComponent>;

  private subs: Subscription[] = [];

  public data: Nullable<TableData>;

  public viewType = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  public selectedSwicthValue = '';
  public switchValues: [ string, string ] = [ 'Work Orders', 'Procedures' ];

  public icons = { ...allIcons };

  public get detailButtonTransform(): string {
    return this.view?.drawer?.isOpen ? 'rotate(180deg)': 'rotate(0)';
  }

  constructor(
    private ctrl: MyWorkController,
    private store: MyWorkSectionStore
  ) { }

  public ngAfterViewInit(): void {
    if (this.view) {
      // this.subs.push(this.view?.viewType$.subscribe(x => {
      //   this.viewType = x;
      //   this.updateData();
      // }));
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public selectionHandler(record: WorkOrder | Procedure) {
    //TODO
  }

  public toggleChange(state: boolean): void {
    this.selectedSwicthValue = state ? this.switchValues[1] : this.switchValues[0];
  }

  public toggleView(): void {
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

  public async updateData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getWorkOrders(['workOrderNumber']);
      this.data?.colDef?.findByDataField('workOrderNumber')?.updateOptions({ cellTemplate: 'cellTemplate' });
    } else {
      this.data = await this.ctrl.getWorkOrders([]);
    }
  }
}
