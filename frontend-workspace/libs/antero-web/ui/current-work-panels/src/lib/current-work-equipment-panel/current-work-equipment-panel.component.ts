import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { ImageData, Modals } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { CurrentWorkPanelBaseComponent } from '../current-work-panel.base';

@Component({
  selector: 'ant-current-work-equipment-panel',
  templateUrl: './current-work-equipment-panel.component.html',
  styleUrls: ['./current-work-equipment-panel.component.scss'],
})
export class CurrentWorkEquipmentPanelComponent extends CurrentWorkPanelBaseComponent implements AfterViewInit {
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
    this.subs.push(this.workStore.selection$.subscribe(async (x) => {
      if (x && x.length > 0 && x[0].equipmentID) {
        this.record = await this.eqCtrl.getByID(x[0].equipmentID);
      }
    }))
  }

  public showEquipment(): void {
    this.antero.openModal(Modals.WORK_ORDER_EQUIPMENT);
  }

  public showEquipmentHistory(): void {
    this.antero.openModal(Modals.WORK_ORDER_EQUIPMENT_HISTORY);
  }
}
