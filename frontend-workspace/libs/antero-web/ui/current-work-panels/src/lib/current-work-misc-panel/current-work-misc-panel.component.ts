import { Nullable, TableData } from '@allmax-angular/shared/types';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { Component, AfterViewInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { CurrentWorkPanelBaseComponent } from '../current-work-panel.base';

@Component({
  selector: 'ant-current-work-misc-panel',
  templateUrl: './current-work-misc-panel.component.html',
  styleUrls: ['./current-work-misc-panel.component.scss'],
})
export class CurrentWorkMiscPanelComponent extends CurrentWorkPanelBaseComponent implements AfterViewInit {
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
    //       cols = [ 'description' ];
    //       this.data = await this.ctrl.getMisc(selection[0].id, cols);
    //       this.data?.colDef?.findByDataField('description')?.updateOptions({ cellTemplate: 'cellTemplate' })
    //     } else {
    //       cols = [
    //         'description',
    //         'cost'
    //       ];
    //       this.data = await this.ctrl.getMisc(selection[0].id, cols);
    //     }
    //   }
    // }))
    console.log()
  }
}
