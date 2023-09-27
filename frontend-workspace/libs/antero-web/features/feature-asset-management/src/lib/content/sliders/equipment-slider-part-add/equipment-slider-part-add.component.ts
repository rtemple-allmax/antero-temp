import { SliderBaseComponent } from '@allmax-angular/antero-web/bases';
import { Equipment, EquipmentPart, Part } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable, ObservableBinding, TableData } from '@allmax-angular/shared/types';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, OnInit, inject } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Sliders } from '../../../types/sliders.enum';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';

@Component({
  selector: 'ant-equipment-slider-part-add',
  templateUrl: './equipment-slider-part-add.component.html',
  styleUrls: ['./equipment-slider-part-add.component.scss'],
})
export class EquipmentSliderPartAddComponent extends SliderBaseComponent implements OnInit {  
  public data: Part[] = [];

  public selection: Nullable<Equipment>

  public partBinding = new ObservableBinding<Part>();
  public commentBinding = new ObservableBinding<string>();

  public get ready(): boolean {
    return !isNullOrEmpty(this.partBinding.value);    
  }
  private eqCtrl = inject(EquipmentControllerService);
  private partCtrl = inject(PartsControllerService)
  
  public ngOnInit(): void {
    const sub = this.state.getStore(DataStores.EQUIPMENT)
    ?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)
    ?.subscribe(x => {
      this.selection = x;
      this.getParts();
    });
    if (sub) { this.subs.push(sub); }
    // this.subs.push(this.appStore.crud$.subscribe(x => {
    //   this.crud = x;
    //   this.heading = `${ this.crud === CrudFunctions.CREATE ? 'Add' : 'Edit' } Part`;
    //   this.populate();
    // }));
    // this.subs.push(this.eqStore.selectedPartData$.subscribe(x => {
    //   this.source = x;
    //   this.populate();
    // }));
    // this.subs.push(this.eqStore.selection$.subscribe(x => this.selectedEquipment = x));
    // this.partBinding.value$.subscribe(x => console.log('part in add part', x))
  }

  public closedHandler(): void {
    this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.NONE);
  }

  public async getParts(): Promise<void> {
    if (this.selection) {
      // this.data = await this.partCtrl.get([ 'name' ], { excludedType: 'Equipment', excludedIDs: [ this.selection.id ]});
      this.data = await this.partCtrl.get_Raw();
    }
  }
  
  public async submit(): Promise<void> {
    const partToAdd: EquipmentPart = {
      id: 0,
      partID: this.partBinding.value?.id || 0,
      equipmentID: this.selection?.id || 0,
      equipment: null,
      part: null,
      comment: this.commentBinding.value,
      totalQuantity: 0
    }
    this.eqCtrl.addPart(partToAdd);
  }
}
