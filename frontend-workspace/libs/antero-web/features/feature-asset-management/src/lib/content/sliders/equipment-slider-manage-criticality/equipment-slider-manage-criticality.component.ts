import { SliderBaseComponent } from '@allmax-angular/antero-web/bases';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { Component, OnInit, inject } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Sliders } from '../../../types/sliders.enum';

@Component({
  selector: 'ant-equipment-slider-manage-criticality',
  templateUrl: './equipment-slider-manage-criticality.component.html',
  styleUrls: ['./equipment-slider-manage-criticality.component.scss'],
})
export class EquipmentSliderManageCriticalityComponent extends SliderBaseComponent implements OnInit {
  public record: Nullable<Equipment>;

  public probabilityBinding = new ObservableBinding<number>(null);
  public consequenceBinding = new ObservableBinding<number>(null);

  private ctrl = inject(EquipmentControllerService);

  private store = this.state.getStore(DataStores.EQUIPMENT);

  public get ready(): boolean {
    return this.probabilityBinding.validity && this.consequenceBinding.validity;
  }

  public ngOnInit(): void {
    const sub = this.store
    ?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)
    ?.subscribe(x => {
      this.record = x;
      if (this.record) {
        this.probabilityBinding.set(this.record.probabilityOfFailure);
        this.consequenceBinding.set(this.record.consequenceOfFailure);
      }
    });
    if (sub) { this.subs.push(sub); }  
  }

  public validateProbability(state: boolean) : void {
    this.probabilityBinding.validity = state;
  }

  public validateConsequence(state: boolean) : void {
    this.consequenceBinding.validity = state;
  }

  public async submit(): Promise<void> {
    if (this.ready && this.record) {
      const record: Equipment = { ...this.record };
      record.probabilityOfFailure = this.probabilityBinding.value;
      record.consequenceOfFailure = this.consequenceBinding.value;
      const res = await this.ctrl.editEquipment(record);
      if (res) {
        this.store?.setValue(EquipmentStatePropNames.SELECTED_EQUIPMENT, res);
        this.store?.setValue(EquipmentStatePropNames.REFRESH, true);
        this.store?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
      }
    }
  }
}
