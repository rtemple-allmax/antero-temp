import { Nullable, TableData } from '@allmax-angular/shared/types';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { AfterViewInit, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { CurrentWorkPanelBaseComponent } from '../current-work-panel.base';

@Component({
  selector: 'ant-current-work-tools-panel',
  templateUrl: './current-work-tools-panel.component.html',
  styleUrls: ['./current-work-tools-panel.component.scss'],
})
export class CurrentWorkToolsPanelComponent extends CurrentWorkPanelBaseComponent implements AfterViewInit {
  // public data: Nullable<TableData>;

  public ngAfterViewInit(): void {
    // this.subs.push(combineLatest([
    //   this.uiStore.masterDetailViewType$,
    //   this.workStore.selection$
    // ]).subscribe(async ([
    //   viewType,
    //   selection
    // ]) => {
    //   if (selection && selection.length > 0 && selection[0].id) {
    //     let cols: string[] = [];
    //     if (viewType === MasterDetailViewTypes.LIST) {
    //       cols = [ 'equipment.name' ];
    //       this.data = await this.ctrl.getTools(selection[0].id, cols);
    //       this.data?.colDef?.findByDataField('equipment.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
    //     } else {
    //       cols = [
    //         'equipment.name',
    //         'equipment.description',
    //         'workOrderUnit',
    //         'estimatedQuantity',
    //         'actualQuantity'
    //       ];
    //       this.data = await this.ctrl.getContractors(selection[0].id, cols);
    //     }
    //   }
    // }))
    console.log()
  }
}
