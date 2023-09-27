import { AfterViewInit, Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { WorkViewerPanelBaseComponent } from '../work-viewer-panel.base';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { DataStores, ImageData, Modals } from '@allmax-angular/antero-web/types';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';

@Component({
  selector: 'ant-work-viewer-panel-equipment',
  templateUrl: './work-viewer-panel-equipment.component.html',
  styleUrls: ['./work-viewer-panel-equipment.component.scss'],
})
export class WorkViewerPanelEquipmentComponent extends WorkViewerPanelBaseComponent implements AfterViewInit {
  @Output() public showEquipment = new EventEmitter();
  @Output() public showHistory = new EventEmitter();
  @Output() public showDocuments = new EventEmitter();
  @Output() public enterDowntime = new EventEmitter();
  
  public record: Nullable<Equipment>;
  public eqCtrl = inject(EquipmentControllerService);

  public primaryImage: Nullable<ImageData>;

  public get statusText(): string {
    return this.record?.inServiceStatus ? 'In Service' : 'Out of Service'
  }

  public get statusColor(): string {
    return this.record?.inServiceStatus ? 'var(--msg-success)' : 'var(--msg-danger)'
  }

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.VIEWER_WORK)?.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER).subscribe(async (x) => {
      if (x && x.equipmentID) {
        this.record = await this.eqCtrl.getByID(x.equipmentID);
        this.primaryImage = await this.eqCtrl.getPrimaryImage(x.equipmentID);
      }
    });
    if (sub) {
      this.subs.push(sub);
    }
  }
  
  public showEquipmentDetails(): void {
    this.showEquipment.emit();
  }

  public showEquipmentHistory(): void {
    this.showHistory.emit();
  }

  public showEquipmentDocuments(): void {
    this.showDocuments.emit();
  }

  public enterEquipmentDowntime(): void {
    this.enterDowntime.emit();
  }
}
