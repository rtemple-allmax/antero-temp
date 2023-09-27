import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Sliders } from '../../../types/sliders.enum';
import { combineLatest } from 'rxjs';
import { PersistentUIKeysEquipment } from '../../../types/persistence.schema';
import { DataFieldUIState } from '@allmax-angular/antero-web/features/feature-persistence';
import { sortArrayByKeyImmutable } from '@allmax-angular/shared/utils';

@Component({
  selector: 'ant-equipment-panel-purchasing',
  templateUrl: './equipment-panel-purchasing.component.html',
  styleUrls: ['./equipment-panel-purchasing.component.scss'],
})
export class EquipmentPanelPurchasingComponent extends PanelBaseComponent implements OnInit{
  @Output() public collapsedStateChanged = new EventEmitter<boolean>(); 

  public override title = 'Purchasing';
  public record: Nullable<Equipment>;

  public fields: DataFieldUIState[] = [];

  public propNames: string[] = [
    'vendor',
    'dateInService',
    'manufacturer',
    'warrantyDays',
    'datePurchased',
    'warrantyMeter',
    'purchasePrice',
    'lifeExpectancy',
    'salvageValue'
  ]

  private eqStore = this.state.getStore(DataStores.EQUIPMENT);
  private eqUIStore = this.state.getStore(DataStores.EQUIPMENT_UI);

  public override ngOnInit(): void {
    super.ngOnInit();

    if (this.eqStore && this.eqUIStore) {
      const sub = combineLatest([
        this.eqStore.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT),
        this.eqStore.observe(EquipmentStatePropNames.OPEN_SLIDER),
        this.eqUIStore.observe(PersistentUIKeysEquipment.CUSTOMIZABLE_FIELDS),
        this.eqUIStore.observe(PersistentUIKeysEquipment.FIELDS_ORDER)
      ]).subscribe(([
        record,
        slider,
        fields,
        order
      ]) => {
        this.record = record;
        this.shouldDisable = (!!slider && slider !== Sliders.NONE);
        const visible = fields.filter((x: DataFieldUIState) => (x.visible === 1 && this.propNames.includes(x.propName)));
        const ordered = [];
        for(const propName of order) {
          const found = visible.find((x: DataFieldUIState) => x.propName === propName);
          if (found) {
            ordered.push(found);
          }
        }
        this.fields = ordered;
      });
      if (sub) { this.subs.push(sub); }
    }
  }

  public editHandler(): void {
    this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.PURCHASING_EDIT);
  }

  public collapsedStateChangeHandler(state: boolean): void {
    this.collapsedStateChanged.emit(state);
  }
}
