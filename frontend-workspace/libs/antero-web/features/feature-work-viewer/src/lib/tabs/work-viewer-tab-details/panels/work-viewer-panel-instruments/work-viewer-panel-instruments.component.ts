import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WorkViewerPanelBaseComponent } from '../work-viewer-panel.base';
import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-viewer-panel-instruments',
  templateUrl: './work-viewer-panel-instruments.component.html',
  styleUrls: ['./work-viewer-panel-instruments.component.scss'],
})
export class WorkViewerPanelInstrumentsComponent extends WorkViewerPanelBaseComponent implements AfterViewInit {
  @Output() public editReadings = new EventEmitter();
  
  public record: Nullable<WorkOrder>;

  public ngAfterViewInit(): void {
    const workViewerStore = this.state.getStore(DataStores.VIEWER_WORK);
    const uiStore = this.state.getStore(DataStores.UI);

    if (workViewerStore && uiStore) {
      const sub = combineLatest([
        workViewerStore.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        workOrder,
        viewType
      ]) => {
        this.record = workOrder;
        this.viewType = viewType;
        this.getData();
      })
      if (sub) { this.subs.push(sub); }
    }
  }

  public getData(): void {
    if (this.record) {
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.data = this.ctrl.getInstruments(this.record.id, [ 'instrument.name' ])
        this.data?.colDef?.findByDataField('instrument.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
      } else {
        this.data = this.ctrl.getInstruments(this.record.id, [
          'instrument.name',
          'instrument.units',
          'instrument.reading'
        ])
      }
    }
  }

  public editRequestedHandler(): void {
    this.editReadings.emit();
  }
}
