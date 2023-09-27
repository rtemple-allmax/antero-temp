import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { EquipmentInServiceHistory } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { Component, Input, inject, OnChanges, SimpleChanges } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';

@Component({
  selector: 'ant-equipment-in-service-history-list-item',
  templateUrl: './equipment-in-service-history-list-item.component.html',
  styleUrls: ['./equipment-in-service-history-list-item.component.scss'],
})
export class EquipmentInServiceHistoryListItemComponent extends ListItemBaseComponent implements OnChanges {
  @Input() public record: Nullable<EquipmentInServiceHistory>;

  private ctrl = inject(EquipmentControllerService);

  public commentBinding = new ObservableBinding<string>();

  public editing = false;

  public get text() : string {
    return `${ this.record?.inService ? 'In' : 'Out' } Service`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['record']?.currentValue) {
      this.commentBinding.set(changes['record']?.currentValue?.comment);
    }
  }

  public editHandler(): void {
    this.editing = !this.editing;
  }

  public async submit(): Promise<void> {
    if (this.record && this.commentBinding.value) {
      const res = await this.ctrl.updateInServiceHistory({ ...this.record, comment: this.commentBinding.value })
      if (res) {
        this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.REFRESH, true);
        this.editing = false;
      }
    }
  }
}
