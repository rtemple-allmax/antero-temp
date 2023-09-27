import { SuppliersController } from '@allmax-angular/antero-web/data-access/suppliers-controller';
import { Supplier } from '@allmax-angular/antero-web/entities';
import { SuppliersSectionStore } from '@allmax-angular/antero-web/state-management/suppliers-section-store';
import { Nullable } from '@allmax-angular/shared/types';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { Component, inject, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { SectionBaseComponent } from '@allmax-angular/antero-web/bases';

@Component({
  selector: 'ant-section-suppliers',
  templateUrl: './section-suppliers.component.html',
  styles: [],
})
export class SectionSuppliersComponent extends SectionBaseComponent implements OnInit {
  public selection: Nullable<Supplier>;
  private ctrl = inject(SuppliersController);
  private store = inject(SuppliersSectionStore);
  
  public override async ngOnInit(): Promise<void> {
    super.ngOnInit();
    this.subs.push(combineLatest([
      this.appStore.deviceType$,
      this.store.selection$,
      this.appStore.refresh$
    ]).subscribe(([
        deviceType,
        selection,
        refresh
      ]) => {
      this.deviceType = deviceType;
      this.selection = selection;
      if (refresh) {
        this.appStore.refresh = false;
      }
      this.updateData();
    }));
  }
  
  public selectionHandler(selection: any): void {
    this.store.selection = selection;
  }

  public async  updateData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.get(['name']);
      this.data?.colDef?.findByDataField('name')?.updateOptions({ cellTemplate: 'cellTemplate' });
    } else {
      this.data = await this.ctrl.get([]);
    }
  }

  public openAdd(): void {
    console.log()
  }
}
