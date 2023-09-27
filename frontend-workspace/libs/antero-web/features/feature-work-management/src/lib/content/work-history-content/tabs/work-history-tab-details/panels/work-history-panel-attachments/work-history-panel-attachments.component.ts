import { Component, AfterViewInit, inject } from '@angular/core';
import { WorkHistoryPanelBaseComponent } from '../work-history-panel.base';
import { WorkHistory, WorkHistoryDocument } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { DataStores, Modals } from '@allmax-angular/antero-web/types';
import { } from 'rxjs';
import { WorkHistoryControllerService } from '@allmax-angular/antero-web/data-access/work-history-controller';
import { WorkStatePropNames } from '../../../../../../types/store.schema';

@Component({
  selector: 'ant-work-history-panel-attachments',
  templateUrl: './work-history-panel-attachments.component.html',
  styleUrls: ['./work-history-panel-attachments.component.scss'],
})
export class WorkHistoryPanelAttachmentsComponent extends WorkHistoryPanelBaseComponent implements AfterViewInit {
  public record: Nullable<WorkHistory>;
  public docs: WorkHistoryDocument[] = [];

  public historyCtrl = inject(WorkHistoryControllerService);

  public ngAfterViewInit(): void {
    this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_HISTORY).subscribe(x => {
      if (x && x.id) {
        this.record = x.id;
        this.getData(x.id)
      }
    });
  }

  public async getData(id: number): Promise<void> {
    this.docs = await this.historyCtrl.getDocuments(id);
  }
  
  public addRequestHandler(files: File[]): void {
    if (this.record) {
      // this.ctrl.addDocuments(this.record.id, files);
    }
  }

  public downloadRequestHandler(files: WorkHistoryDocument[]): void {
    files.forEach(x => {
      if (x?.document) {
        // this.ctrl.downloadDocument(x.document);
      }
    });
  }
  
  public deleteRequestHandler(files: WorkHistoryDocument[]): void {
    this.state.getStore(DataStores.WORK)?.setValue(WorkStatePropNames.SELECTED_ATTACHMENTS, files);
    this.antero.openModal(Modals.EQUIPMENT_DELETE_DOCUMENT);
  }
}
