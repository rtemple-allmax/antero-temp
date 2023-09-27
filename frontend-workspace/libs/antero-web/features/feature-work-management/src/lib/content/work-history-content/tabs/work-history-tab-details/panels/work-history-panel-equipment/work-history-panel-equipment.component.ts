import { Component, AfterViewInit, inject } from '@angular/core';
import { WorkHistoryPanelBaseComponent } from '../work-history-panel.base';
import { Nullable } from '@allmax-angular/shared/types';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { DataStores, ImageData, Modals } from '@allmax-angular/antero-web/types';
import { WorkStatePropNames } from 'libs/antero-web/features/feature-work-management/src/lib/types/store.schema';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';

@Component({
  selector: 'ant-work-history-panel-equipment',
  templateUrl: './work-history-panel-equipment.component.html',
  styleUrls: ['./work-history-panel-equipment.component.scss'],
})
export class WorkHistoryPanelEquipmentComponent extends WorkHistoryPanelBaseComponent implements AfterViewInit {
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
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_HISTORY).subscribe(async (x) => {
      if (x && x.equipmentID) {
        this.record = await this.eqCtrl.getByID(x.equipmentID);
        this.primaryImage = await this.eqCtrl.getPrimaryImage(x.equipmentID);
      }
    });
    if (sub) {
      this.subs.push(sub);
    }
  }

  public showEquipment(): void {
    this.antero.openModal(Modals.WORK_ORDER_EQUIPMENT);
  }

  public showEquipmentHistory(): void {
    this.antero.openModal(Modals.WORK_ORDER_EQUIPMENT_HISTORY);
  }
}
