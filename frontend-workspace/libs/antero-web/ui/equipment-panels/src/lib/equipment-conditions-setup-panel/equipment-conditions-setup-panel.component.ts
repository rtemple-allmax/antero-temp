import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { EquipmentCondition } from '@allmax-angular/antero-web/entities';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { EquipmentLists } from '@allmax-angular/antero-web/types';
import { Nullable, PanelBaseComponent } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-equipment-conditions-setup-panel',
  templateUrl: './equipment-conditions-setup-panel.component.html',
  styleUrls: ['./equipment-conditions-setup-panel.component.scss'],
})
export class EquipmentConditionsSetupPanelComponent extends PanelBaseComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  public records: EquipmentCondition[] = [];
  public icons = { ...allIcons };

  public initialValue: Nullable<string>;

  public isSelectedList = false;
  public valueToAdd: Nullable<string>;
  
  public get innerHeight(): string {
    return `calc(${ this.height } - 65px)`
  }

  constructor(
    private ctrl: EquipmentControllerService,
    private eqStore: EquipmentSectionStore
  ) { super(); }

  public ngOnInit(): void {
    this.getRecords();
    this.subs.push(this.eqStore.newListItemName$.subscribe(x => {
      this.valueToAdd = x;
      this.initializeWithValue();
    }))
    this.subs.push(this.eqStore.selectedList$.subscribe(x => {
      this.isSelectedList = x === EquipmentLists.CONDITION;
      this.initializeWithValue();
    }))
  }

  public ngOnDestroy(): void {
    this.eqStore.newListItemName = null;
    this.eqStore.selectedList = EquipmentLists.CATEGORY;
    unsubscribe(this.subs);
  }

  private async getRecords(): Promise<void> {
    this.records = await this.ctrl.getConditions();
  }

  public async submitAdd(name: string): Promise<void> {
    const results = await this.ctrl.addCondition(name)
    if (results) {
      this.records.push(results);
    }
  }
  
  public async submitEdit(record: EquipmentCondition): Promise<void> {
    const results = await this.ctrl.updateCondition(record)
    if (results) {
      const found = this.records.find(x => x.id === results.id);
      if (found) {
        const index = this.records.indexOf(found);
        if (index >= 0) {
          this.records[index] = results;
        }      
      }
    }
    
  }

  public async submitDelete(record: EquipmentCondition): Promise<void>  {
    const result = await this.ctrl.deleteCondition(record);
    if (result) {
      const index = this.records.indexOf(record);
      if (index >= 0) {
        this.records.splice(index, 1);
      }
    }
  }

  public initializeWithValue(): void {
    if (this.isSelectedList && this.valueToAdd) {
      this.initialValue = this.valueToAdd;
    }
  }
}
