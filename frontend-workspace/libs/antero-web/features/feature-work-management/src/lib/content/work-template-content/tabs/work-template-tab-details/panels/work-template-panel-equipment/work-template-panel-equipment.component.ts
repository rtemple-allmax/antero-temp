import { Component, AfterViewInit, inject } from '@angular/core';
import { WorkTemplatePanelBaseComponent } from '../work-template-panel.base';
import { Nullable } from '@allmax-angular/shared/types';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { DataStores, ImageData, Modals } from '@allmax-angular/antero-web/types';
import { WorkStatePropNames } from 'libs/antero-web/features/feature-work-management/src/lib/types/store.schema';

@Component({
  selector: 'ant-work-template-panel-equipment',
  templateUrl: './work-template-panel-equipment.component.html',
  styleUrls: ['./work-template-panel-equipment.component.scss'],
})
export class WorkTemplatePanelEquipmentComponent extends WorkTemplatePanelBaseComponent implements AfterViewInit {
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
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_TEMPLATE).subscribe(async (x) => {
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
