import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Group } from '@allmax-angular/antero-web/entities';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { EquipmentLists } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable, PanelBaseComponent } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-equipment-groups-setup-panel',
  templateUrl: './equipment-groups-setup-panel.component.html',
  styleUrls: ['./equipment-groups-setup-panel.component.scss'],
})
export class EquipmentGroupsSetupPanelComponent extends PanelBaseComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  public records: Group[] = [];
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
      this.isSelectedList = x === EquipmentLists.GROUP;
      this.initializeWithValue();
    }))
  }

  public ngOnDestroy(): void {
    this.eqStore.newListItemName = null;
    this.eqStore.selectedList = EquipmentLists.CATEGORY;
    unsubscribe(this.subs);
  }

  private async getRecords(): Promise<void> {
    this.records = await this.ctrl.getGroups();
  }
  
  public async submitAdd(name: string): Promise<void> {
    const results = await this.ctrl.addCategory(name)
    if (results) {
      this.records.push(results);
    }
    
  }

  public async submitEdit(record: Group): Promise<void> {
    const results = await this.ctrl.updateCategory(record)
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

  public async submitDelete(record: Group): Promise<void>  {
    const result = await this.ctrl.deleteCategory(record);
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
