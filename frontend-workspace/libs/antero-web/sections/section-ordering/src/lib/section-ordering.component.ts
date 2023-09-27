import { PurchaseOrder } from '@allmax-angular/antero-web/entities';
import { OrderingSectionStore } from '@allmax-angular/antero-web/state-management/ordering-section-store';
import { DeviceTypes, Nullable } from '@allmax-angular/shared/types';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { OrderingController } from '@allmax-angular/antero-web/data-access/ordering-controller'; 
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { combineLatest } from 'rxjs';
import { SectionBaseComponent } from '@allmax-angular/antero-web/bases';
import { insert } from '@allmax-angular/shared/utils';

@Component({
  selector: 'ant-section-ordering',
  templateUrl: './section-ordering.component.html',
  styles: [],
})
export class SectionOrderingComponent extends SectionBaseComponent implements OnInit, OnDestroy {
  public includeClosed = false;
  public selection: Nullable<PurchaseOrder>;
  private ctrl = inject(OrderingController);
  private store = inject(OrderingSectionStore);
  
  public override async ngOnInit(): Promise<void> {
    super.ngOnInit();
    this.subs.push(combineLatest([
      this.appStore.deviceType$,
      this.store.selection$
    ]).subscribe(([
      deviceType,
      selection ]) => {
        this.deviceType = deviceType;
        this.selection = selection;
        this.updateData();
      }));
  }
  
  public selectionChangedHandler(selection: any): void {
    this.store.selection = selection;
  }

  public async  updateData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.get(['orderDate']);
      this.data?.colDef?.findByDataField('orderDate')?.updateOptions({ cellTemplate: 'cellTemplate', caption: 'Supplier & Order Date' });
    } else {
      this.data = await this.ctrl.get([]);
    }
  }

  public contextMenuHandler(e: any): void {
    const record = e.row.data;
    e.items = this.updateItemContextMenu(record);
    this.selectionChangedHandler(record);
    console.log('context menu preparing', e)
  }

  public updateSectionContextMenu(): any[] {
    let items: any[] =  [
      // {
      //   text: 'Equipment Lists',
      //   icon: this.icons.subListIcon,
      //   template: 'contextMenuItemTemplate',
      //   disabled: false,
      //   danger: false,
      //   onItemClick: () => this.openEquipmentLists()
      // }
    ]
    if (this.viewType === MasterDetailViewTypes.TABLE) {
      items = insert(items, 3, 
        {
          text: 'Show Column Chooser',
          icon: this.icons.subListIcon,
          template: 'contextMenuItemTemplate',
          disabled: false,
          beginGroup: true,
          danger: false,
          onItemClick: () => this.showColumnChooser()
        }
      )
    }
    return items;
  }

  public updateItemContextMenu(record: PurchaseOrder): any[] {
    const items: any[] =  [
      // {
      //   text: 'Edit',
      //   icon: this.icons.editIcon,
      //   template: 'contextMenuItemTemplate',
      //   disabled: !record,
      //   danger: false,
      //   onItemClick: () => this.openEdit(this.selection || undefined)
      // }
    ];
    return items;
  }

  public override tableReadyHandler(e: any): void {
    if (this.deviceType !== DeviceTypes.MOBILE) {
      const selectedKeys: number[] = e.component.getSelectedRowKeys();
      if (!this.selection && selectedKeys.length < 1) {
        e.component.selectRowsByIndexes([0]);
        e.component.getScrollable().scrollTo(0);
      } else if (this.selection  && !selectedKeys.includes(this.selection.id)) {
        e.component.selectRows([this.selection.id], false);
        e.component.navigateToRow(this.selection.id);
      }
    }
  }

  public openAdd(): void {
    console.log()
  }
}
