import { Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable, TableData } from '@allmax-angular/shared/types';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { Component, AfterViewInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { CurrentWorkPanelBaseComponent } from '../current-work-panel.base';

@Component({
  selector: 'ant-current-work-parts-panel',
  templateUrl: './current-work-parts-panel.component.html',
  styleUrls: ['./current-work-parts-panel.component.scss'],
})
export class CurrentWorkPartsPanelComponent extends CurrentWorkPanelBaseComponent implements AfterViewInit {
  // public data: Nullable<TableData>;

  public ngAfterViewInit(): void {
    // this.subs.push(combineLatest([this.uiStore.masterDetailViewType$, this.workStore.selection$]).subscribe(async ([viewType, selection]) => {
    //   if (selection && selection.length > 0 && selection[0].id) {
    //     let cols: string[] = [];
    //     if (viewType === MasterDetailViewTypes.LIST) {
    //       cols = [ 'partQuantity.part.name' ];
    //       this.data = await this.ctrl.getParts(selection[0].id, cols);
    //       this.data?.colDef?.findByDataField('partQuantity.part.name')?.updateOptions({ cellTemplate: 'cellTemplate' })
    //     } else {
    //       cols = [
    //         'partQuantity.part.name',
    //         'partQuantity.part.description',
    //         'partQuantity.warehouse.name',
    //         'partQuantity.area.name',
    //         'unit',
    //         'estimatedQuantity',
    //         'actualQuantity'
    //       ];
    //       this.data = await this.ctrl.getParts(selection[0].id, cols);
    //     }
    //   }
    // }))
    console.log()
  }

  public addPart(): void {
    this.antero.openModal(Modals.ADD_WORK_ORDER_PART);
  }
}
