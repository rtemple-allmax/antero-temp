import { Nullable, TableData } from '@allmax-angular/shared/types';
import { Component, AfterViewInit } from '@angular/core';
import { CurrentWorkPanelBaseComponent } from '../current-work-panel.base';
import { combineLatest } from 'rxjs';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';

@Component({
  selector: 'ant-current-work-labor-panel',
  templateUrl: './current-work-labor-panel.component.html',
  styleUrls: ['./current-work-labor-panel.component.scss'],
})
export class CurrentWorkLaborPanelComponent extends CurrentWorkPanelBaseComponent implements AfterViewInit {
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
    //       cols = [ 'laborClass.name' ];
    //       this.data = await this.ctrl.getLabor(selection[0].id, cols);
    //       this.data?.colDef?.findByDataField('laborClass.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
    //     } else {
    //       cols = [
    //         'laborClass.name',
    //         'laborAccount.name',
    //         'user.name',
    //         'laborType.name',
    //         'estimatedHours',
    //         'actualHours'
    //       ];
    //       this.data = await this.ctrl.getLabor(selection[0].id, cols);
    //     }
    //   }
    // }))
    console.log()
  }
}
