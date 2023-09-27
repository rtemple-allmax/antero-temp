import { Component, AfterViewInit } from '@angular/core';
import { WorkHistoryPanelBaseComponent } from '../work-history-panel.base';
import { Nullable } from '@allmax-angular/shared/types';
import { WorkHistory } from '@allmax-angular/antero-web/entities';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { combineLatest } from 'rxjs';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-work-history-panel-instruments',
  templateUrl: './work-history-panel-instruments.component.html',
  styleUrls: ['./work-history-panel-instruments.component.scss'],
})
export class WorkHistoryPanelInstrumentsComponent extends WorkHistoryPanelBaseComponent implements AfterViewInit {
  public record: Nullable<WorkHistory>;

  public ngAfterViewInit(): void {
    const workStore = this.state.getStore(DataStores.WORK);
    const uiStore = this.state.getStore(DataStores.UI);

    if (workStore && uiStore) {
      combineLatest([
        workStore.observe(WorkStatePropNames.SELECTED_WORK_HISTORY),
        uiStore.observe(UIStorePropNames.VIEW_TYPE)
      ]).subscribe(([
        workHistory,
        viewType
      ]) => {
        this.record = workHistory;
        if (this.record) {
          if (viewType === MasterDetailViewTypes.LIST) {
            this.data = this.ctrl.getInstruments(this.record.id, [ 'instrument' ]);
            this.data?.colDef?.findByDataField('instrument')?.updateOptions({ cellTemplate: 'cellTemplate' })
          } else {
            this.data = this.ctrl.getInstruments(this.record.id, [
              'instrument',
              'units',
              'reading'
            ]);
          }
        }
      })
    }
  }
}
