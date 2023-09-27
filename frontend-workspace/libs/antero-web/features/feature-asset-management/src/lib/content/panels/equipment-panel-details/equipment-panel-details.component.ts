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
  selector: 'ant-equipment-panel-details',
  templateUrl: './equipment-panel-details.component.html',
  styleUrls: ['./equipment-panel-details.component.scss'],
})
export class EquipmentPanelDetailsComponent extends PanelBaseComponent implements OnInit {
  @Output() public collapsedStateChanged = new EventEmitter<boolean>(); 

  public record: Nullable<Equipment>;
  public fields: DataFieldUIState[] = [];

  public override title = 'Details';

  public propNames: string[] = [
    'description',
    'department',
    'equipmentCondition',
    'equipmentType',
    'group',
    'equipmentPriority',
    'category',
    'location',
    'subLocation',
    'modelNumber',
    'workOrderRate',
    'serialNumber',
    'assetNumber',
    'workOrderUnits',
    'notes'
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
    this.cdr.detectChanges();
  }

  public editHandler(): void {
    this.eqStore?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.DETAILS_EDIT);
  }

  public collapsedStateChangeHandler(state: boolean): void {
    this.collapsedStateChanged.emit(state);
  }
}
