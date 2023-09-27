import { Nullable, TableData } from '@allmax-angular/shared/types';
import { Component, AfterViewInit } from '@angular/core';
import { CurrentWorkPanelBaseComponent } from '../current-work-panel.base';
import { combineLatest } from 'rxjs';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-current-work-contractors-panel',
  templateUrl: './current-work-contractors-panel.component.html',
  styleUrls: ['./current-work-contractors-panel.component.scss'],
})
export class CurrentWorkContractorsPanelComponent extends CurrentWorkPanelBaseComponent implements AfterViewInit {
  // public data: Nullable<TableData>;

  public ngAfterViewInit(): void {
    console.log()
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
    //       cols = [ 'supplier.name' ];
    //       this.data = await this.ctrl.getContractors(selection[0].id, cols);
    //       this.data?.colDef?.findByDataField('supplier.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
    //     } else {
    //       cols = [
    //         'supplier.name',
    //         'invoice',
    //         'partCost',
    //         'laborCost',
    //         'taxCost',
    //         'miscCost'
    //       ];
    //       this.data = await this.ctrl.getContractors(selection[0].id, cols);
    //     }
    //   }
    // }))
  }
}
