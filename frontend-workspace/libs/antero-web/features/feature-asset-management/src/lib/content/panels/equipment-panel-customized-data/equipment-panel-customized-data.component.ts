import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Sliders } from '../../../types/sliders.enum';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { DataFieldTypes, DataFieldUIState } from '@allmax-angular/antero-web/features/feature-persistence';
import { combineLatest } from 'rxjs';
import { PersistentUIKeysEquipment } from '../../../types/persistence.schema';

@Component({
  selector: 'ant-equipment-panel-customized-data',
  templateUrl: './equipment-panel-customized-data.component.html',
  styleUrls: ['./equipment-panel-customized-data.component.scss'],
})
export class EquipmentPanelCustomizedDataComponent extends PanelBaseComponent implements OnInit {
  @Output() public collapsedStateChanged = new EventEmitter<boolean>(); 
  public override title = 'My Data';
  
  public record: Nullable<Equipment>;
  public fields: Array<DataFieldUIState> = [];

  public fieldTypes: typeof DataFieldTypes = DataFieldTypes;

  private eqStore = this.state.getStore(DataStores.EQUIPMENT);
  private eqUIStore = this.state.getStore(DataStores.EQUIPMENT_UI);

  public override ngOnInit(): void {
    super.ngOnInit();
    if (this.eqStore && this.eqUIStore) {
      const sub = combineLatest([
        this.eqStore.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT),
        this.eqUIStore.observe(PersistentUIKeysEquipment.CUSTOMIZABLE_FIELDS),
        this.eqUIStore.observe(PersistentUIKeysEquipment.FIELDS_ORDER)
      ]).subscribe(([
        record,
        fields,
        order
      ]) => {
        this.record = record;
        const ordered = [];
          for(const propName of order) {
            const found = fields.find((x: DataFieldUIState) => x.propName === propName);
            if (found) {
              ordered.push(found);
            }
          }
          this.fields = ordered;
      });
      if  (sub) {this.subs.push(sub); }
    }
   
  }

  public editHandler(): void {
    this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.MY_DATA_EDIT);
  }
  
  public collapsedStateChangeHandler(state: boolean): void {
    this.collapsedStateChanged.emit(state);
  }
}
