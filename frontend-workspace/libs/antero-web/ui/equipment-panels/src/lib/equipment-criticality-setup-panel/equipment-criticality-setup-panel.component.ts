import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { CriticalityRanking } from '@allmax-angular/antero-web/entities';
import { CrudFunctions, Nullable, ObservableBinding, PanelBaseComponent } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ant-equipment-criticality-setup-panel',
  templateUrl: './equipment-criticality-setup-panel.component.html',
  styleUrls: ['./equipment-criticality-setup-panel.component.scss'],
})
export class EquipmentCriticalitySetupPanelComponent extends PanelBaseComponent implements OnInit {
  public records: CriticalityRanking[] = [];
  public icons = { ...allIcons };

  public selection: Nullable<CriticalityRanking>;

  public crud = CrudFunctions.READ;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  
  public editNameBinding: ObservableBinding<string> = new ObservableBinding<string>();
  
  public get editReady(): boolean {
    return !isNullOrEmpty(this.editNameBinding.value) 
  }

  public get innerHeight(): string {
    return `calc(${ this.height } - 65px)`
  }

  constructor(private ctrl: EquipmentControllerService) { super(); }

  public ngOnInit(): void {
    this.getRecords();
  }

  private async getRecords(): Promise<void> {
    this.records = await this.ctrl.getCritiality();
  }
  
  public async submitEdit(record: CriticalityRanking): Promise<void> {
    const results = await this.ctrl.updateCriticality(record)
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
}
