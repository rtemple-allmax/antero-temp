import { Component, OnInit } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Sliders } from '../../../types/sliders.enum';
import { EquipmentDocument } from '@allmax-angular/antero-web/entities';
import { combineLatest } from 'rxjs';
import { EquipmentSliderBaseComponent } from '../../../types/equipment-slider.base';

@Component({
  selector: 'ant-equipment-slider-document-delete',
  templateUrl: './equipment-slider-document-delete.component.html',
  styleUrls: ['./equipment-slider-document-delete.component.scss'],
})
export class EquipmentSliderDocumentDeleteComponent extends EquipmentSliderBaseComponent implements OnInit {  
  public documents: EquipmentDocument[] = [];

  public ngOnInit(): void {
    if (this.eqStore) {
      const sub = combineLatest([
        this.eqStore.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT),
        this.eqStore.observe(EquipmentStatePropNames.SELECTED_DOCUMENTS)
      ]).subscribe(([
        record,
        docs
      ]) => {
        this.source = record;
        this.documents = docs;
      });
      if (sub) { this.subs.push(sub); }
    }
  }

  public async confirmHandler(): Promise<void> {
    const success = await this.eqCtrl.deleteDocuments(this.documents.map(x => x.id));
    if (success) {
      this.eqStore?.setValue(EquipmentStatePropNames.SELECTED_DOCUMENTS, []);
      this.eqStore?.setValue(EquipmentStatePropNames.REFRESH, true);
      this.eqStore?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
    }
  }

  public cancelHandler(): void {
    this.eqStore?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE)
  }
}
