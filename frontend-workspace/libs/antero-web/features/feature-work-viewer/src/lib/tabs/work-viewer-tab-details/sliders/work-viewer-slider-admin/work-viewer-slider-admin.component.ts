import { Component, OnInit } from '@angular/core';
import { WorkOrderAdminFormBaseComponent } from '@allmax-angular/antero-web/form-bases';
import { DataStores } from '@allmax-angular/antero-web/types';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';
import { WorkOrder } from '@allmax-angular/antero-web/entities';

@Component({
  selector: 'ant-work-viewer-slider-admin',
  templateUrl: './work-viewer-slider-admin.component.html',
  styleUrls: ['./work-viewer-slider-admin.component.scss'],
})
export class WorkViewerSliderAdminComponent extends WorkOrderAdminFormBaseComponent implements OnInit {
  public width = '400px';
  
  public ngOnInit(): void {
    this.subs.push(this.editSuccess.subscribe((record: WorkOrder) => {
      this.state.getStore(DataStores.VIEWER_WORK)?.setValue(WorkViewerStorePropNames.SELECTED_WORK_ORDER, record);
    }))
  }
}
