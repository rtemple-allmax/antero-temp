import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { DataStores, ImageData, Modals } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, AfterViewInit, inject } from '@angular/core';
import { WorkStatePropNames } from '../../../../../../types/store.schema';
import { WorkOrderPanelBaseComponent } from '../work-order-panel.base';

@Component({
  selector: 'ant-work-order-panel-equipment',
  templateUrl: './work-order-panel-equipment.component.html',
  styleUrls: ['./work-order-panel-equipment.component.scss'],
})
export class WorkOrderPanelEquipmentComponent extends WorkOrderPanelBaseComponent implements AfterViewInit {
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
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_ORDERS).subscribe(async (x) => {
      if (x && x.length > 0 && x[0].equipmentID) {
        this.record = await this.eqCtrl.getByID(x[0].equipmentID);
        this.primaryImage = await this.eqCtrl.getPrimaryImage(x[0].equipmentID);
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
