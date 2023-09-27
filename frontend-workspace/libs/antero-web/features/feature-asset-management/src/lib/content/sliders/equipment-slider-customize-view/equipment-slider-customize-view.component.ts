import { SliderBaseComponent } from '@allmax-angular/antero-web/bases';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PersistentUIKeysEquipment } from '../../../types/persistence.schema';
import { DataFieldUIState } from '@allmax-angular/antero-web/features/feature-persistence';
import { LayoutPanelContainerComponent } from '@allmax-angular/shared/ui/layout-panel';
import { Nullable } from '@allmax-angular/shared/types';
import { combineLatest } from 'rxjs';
import { reorderArray } from '@allmax-angular/shared/utils';

@Component({
  selector: 'ant-equipment-slider-customize-view',
  templateUrl: './equipment-slider-customize-view.component.html',
  styleUrls: ['./equipment-slider-customize-view.component.scss'],
})
export class EquipmentSliderCustomizeViewComponent extends SliderBaseComponent implements OnInit {
  @ViewChild(LayoutPanelContainerComponent) public layoutContainer: Nullable<LayoutPanelContainerComponent>;

  private eqUIStore = this.state.getStore(DataStores.EQUIPMENT_UI);

  public fields: DataFieldUIState[] = [];
  public order: string [] = [];

  public ngOnInit(): void {
    if (this.eqUIStore) {
      const sub = combineLatest([
        this.eqUIStore.observe(PersistentUIKeysEquipment.CUSTOMIZABLE_FIELDS),
        this.eqUIStore.observe(PersistentUIKeysEquipment.FIELDS_ORDER)
      ]).subscribe(([
        fields,
        order
      ]) => {
        if (fields && order) {
          const ordered = [];
          for(const propName of order) {
            const found = fields.find((x: DataFieldUIState) => x.propName === propName);
            if (found) {
              ordered.push(found);
            }
          }
          this.fields = ordered;
          this.order = order;
        }
      })
      if (sub) { this.subs.push(sub); }
    }
  }
  
  public indexChangedHandler(diff: { old: number, new: number }): void {
    const changed = [ ...this.order ];
    reorderArray(changed, diff.old, diff.new);
    this.eqUIStore?.setValue(PersistentUIKeysEquipment.FIELDS_ORDER, changed);
  }
  
  public visibilityChangedHandler(item: DataFieldUIState): void {
    const fields = [ ...this.fields ];
    const found = fields.find(x => x.label === item.label);
    if (found) {
      found.visible = found.visible > 0 ? 0 : 1;
      if (found.visible === 0) {
        found.favorite = 0;
        found.orderInFavorites = -1;
      }
    }
    this.eqUIStore?.setValue(PersistentUIKeysEquipment.CUSTOMIZABLE_FIELDS, fields);
  }
  
  public favoriteChangedHandler(item: DataFieldUIState): void {
    const fields = [ ...this.fields ];
    const found = fields.find(x => x.label === item.label);
    if (found) {
      found.favorite = found.favorite > 0 ? 0 : 1;
      if (found.favorite === 1) {
        found.orderInFavorites = (fields.reduce((p, c) => (p.orderInFavorites > c.orderInFavorites) ? p : c)).orderInFavorites + 1;
      } else {
        found.orderInFavorites = -1;
      }
      this.eqUIStore?.setValue(PersistentUIKeysEquipment.CUSTOMIZABLE_FIELDS, fields);
    }
  }
}
