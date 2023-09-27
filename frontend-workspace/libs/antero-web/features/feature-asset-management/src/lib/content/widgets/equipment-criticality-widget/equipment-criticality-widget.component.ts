import { WidgetBaseComponent } from '@allmax-angular/antero-web/bases';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { CriticalityRanking, Equipment } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, inject } from '@angular/core';
import { combineLatest } from 'rxjs';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { getContrastingColor } from '@allmax-angular/shared/utils';
import { Sliders } from '../../../types/sliders.enum';

@Component({
  selector: 'ant-equipment-criticality-widget',
  templateUrl: './equipment-criticality-widget.component.html',
  styleUrls: ['./equipment-criticality-widget.component.scss'],
})
export class EquipmentCriticalityWidgetComponent extends WidgetBaseComponent implements OnInit   {
  public id = 'criticality-widget';


  public record: Nullable<Equipment>
  public ranking: Nullable<CriticalityRanking>;

  public visibility = false;

  private ctrl = inject(EquipmentControllerService);
  private eqStore = this.state.getStore(DataStores.EQUIPMENT);

  public get score(): number {
    return (this.record?.probabilityOfFailure || 1) * (this.record?.consequenceOfFailure || 1); 
  }
  
  public get disabled(): boolean {
    return this.score === 0;
  }

  public get target(): string {
    return `#${ this.id }`;
  }

  public get color(): string {
    if (this.score > 20) {
      return '#ed1c23';
    } else if (this.score > 15) {
      return '#ed6c1c';
    } else if (this.score > 10) {
      return '#ffd300';
    } else if (this.score > 5) {
      return '#6ca600';
    } else {
      return '#00a550';
    }
  }
  
  public ngOnInit(): void {
    if (this.eqStore) {
      const sub = combineLatest([
        this.eqStore.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT),
        this.eqStore.observe(EquipmentStatePropNames.REFRESH)
      ]).subscribe(([
        record, 
        refresh
      ]) => {
        const prevRecord = this.record;
        this.record = record;

        if (prevRecord !== this.record || refresh) {
          this.update();
        }

        if (refresh) {
          this.eqStore?.setValue(EquipmentStatePropNames.REFRESH, false);
        }
      });
      if (sub) { this.subs.push(sub); }
    }
  }
  
  public async update():Promise<void> {
    this.ranking = await this.ctrl.getCriticalityByValue(this.score);
  }

  public mouseenterHandler(): void {
    if (this.disabled) { return; }
    this.visibility = true;
  }

  public mouseleaveHandler(): void {
    if (this.disabled) { return; }
    this.visibility = false;
  }

  public clickHandler(): void {
    this.eqStore?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.MANAGE_CRITICALITY);
  }

  public getContrastColor(hex: string): string {
    return getContrastingColor(hex)
  }
}
