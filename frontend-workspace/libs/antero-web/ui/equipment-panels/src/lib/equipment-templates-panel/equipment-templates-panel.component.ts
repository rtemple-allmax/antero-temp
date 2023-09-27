import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment, WorkTemplate } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { DeviceTypes, Nullable, TableData } from '@allmax-angular/shared/types';
import { getDateString, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-equipment-templates-panel',
  templateUrl: './equipment-templates-panel.component.html',
  styles: [],
})
export class EquipmentTemplatesPanelComponent implements OnInit, OnDestroy {
  @Input() public height = '100%';
  private subs: Subscription[] = [];

  public selectedEquipment: Nullable<Equipment>;

  public data: Nullable<TableData>;
  public records: WorkTemplate[] = [];

  public deviceType = DeviceTypes.UNSET;
  public deviceTypes: typeof DeviceTypes = DeviceTypes;

  constructor(
    private appStore: AnteroStoreService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.store.selection$.subscribe(x => {
      this.selectedEquipment = x;
      this.getData();
    }));
    this.subs.push(this.appStore.deviceType$.subscribe(x => {
      this.deviceType = x;
      this.getData();
    }));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async getData(): Promise<void> {
    if (!this.selectedEquipment) { return; }
    if (this.deviceType === DeviceTypes.DESKTOP) {
      this.data = await this.ctrl.getTemplates(this.selectedEquipment.id) as TableData;
    } else {
      this.records = await this.ctrl.getTemplates(this.selectedEquipment.id, true) as WorkTemplate[];
    }
  }

  public getDateString(val: any): string {
    return getDateString(val);
  }
}
