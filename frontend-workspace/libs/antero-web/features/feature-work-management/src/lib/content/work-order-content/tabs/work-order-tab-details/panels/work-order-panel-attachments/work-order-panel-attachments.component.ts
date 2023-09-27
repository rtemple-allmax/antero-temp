import { WorkOrder, WorkOrderDocument } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, AfterViewInit } from '@angular/core';
import { WorkOrderPanelBaseComponent } from '../work-order-panel.base';
import { DataStores, Modals } from '@allmax-angular/antero-web/types';
import { WorkStatePropNames } from 'libs/antero-web/features/feature-work-management/src/lib/types/store.schema';

@Component({
  selector: 'ant-work-order-panel-attachments',
  templateUrl: './work-order-panel-attachments.component.html',
  styleUrls: ['./work-order-panel-attachments.component.scss'],
})
export class WorkOrderPanelAttachmentsComponent extends WorkOrderPanelBaseComponent implements AfterViewInit {
  public record: Nullable<WorkOrder>;
  public docs: WorkOrderDocument[] = [];

  public ngAfterViewInit(): void {
    this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_ORDERS).subscribe(x => {
      if (x && x.length > 0) {
        this.record = x[0];
        this.getData(x[0].id)
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
    this.state.getStore(DataStores.WORK)?.setValue(WorkStatePropNames.SELECTED_ATTACHMENTS, files);
    this.antero.openModal(Modals.EQUIPMENT_DELETE_DOCUMENT);
  }
}
