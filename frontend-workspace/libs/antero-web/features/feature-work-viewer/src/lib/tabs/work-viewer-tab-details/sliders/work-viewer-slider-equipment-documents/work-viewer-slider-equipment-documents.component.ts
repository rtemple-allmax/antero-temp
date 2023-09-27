import { SliderBaseComponent } from '@allmax-angular/antero-web/bases';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment, EquipmentDocument, WorkOrder } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Component, OnInit, inject } from '@angular/core';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';
import { Nullable } from '@allmax-angular/shared/types';


@Component({
  selector: 'ant-work-viewer-slider-equipment-documents',
  templateUrl: './work-viewer-slider-equipment-documents.component.html',
  styleUrls: ['./work-viewer-slider-equipment-documents.component.scss'],
})
export class WorkViewerSliderEquipmentDocumentsComponent extends SliderBaseComponent implements OnInit {
  public data: EquipmentDocument[] = [];

  private eqCtrl = inject(EquipmentControllerService);

  public ngOnInit(): void {
    const sub = this.state.getStore(DataStores.VIEWER_WORK)?.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER)?.subscribe((x: Nullable<WorkOrder>) => {
      if (x && x.equipment) {
        this.updateData(x.equipment);
      }
    });
    if (sub) { this.subs.push(sub); }
  }

  public async updateData(record: Equipment): Promise<void> {
    this.data = await this.eqCtrl.getDocuments_Raw(record.id);  
  }
}
