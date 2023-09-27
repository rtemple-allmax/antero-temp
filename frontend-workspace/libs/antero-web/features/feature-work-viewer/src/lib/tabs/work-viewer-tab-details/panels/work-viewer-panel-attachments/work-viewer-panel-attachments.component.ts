import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WorkViewerPanelBaseComponent } from '../work-viewer-panel.base';
import { WorkOrder, WorkOrderDocument } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { DataStores } from '@allmax-angular/antero-web/types';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';

@Component({
  selector: 'ant-work-viewer-panel-attachments',
  templateUrl: './work-viewer-panel-attachments.component.html',
  styleUrls: ['./work-viewer-panel-attachments.component.scss'],
})
export class WorkViewerPanelAttachmentsComponent extends WorkViewerPanelBaseComponent implements AfterViewInit {
  public record: Nullable<WorkOrder>;
  public docs: WorkOrderDocument[] = [];

  public ngAfterViewInit(): void {
    this.state.getStore(DataStores.VIEWER_WORK)?.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER).subscribe(x => {
      this.record = x;
      if (this.record) {
        this.getData(this.record.id);
      }
    });
  }

  public async getData(id: number): Promise<void> {
    this.docs = await this.ctrl.getDocuments(id);
  }
  
  public addRequestHandler(files: File[]): void {
    if (this.record) {
      // this.ctrl.addDocuments(this.record.id, files);
    }
  }

  public downloadRequestHandler(files: WorkOrderDocument[]): void {
    files.forEach(x => {
      if (x?.document) {
        // this.ctrl.downloadDocument(x.document);
      }
    });
  }
  
  public deleteRequestHandler(files: WorkOrderDocument[]): void {
    console.log()
  }
}
