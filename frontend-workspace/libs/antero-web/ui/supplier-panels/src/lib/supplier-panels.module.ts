import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierDetailsPanelComponent } from './supplier-details-panel/supplier-details-panel.component';
import { SupplierContactsPanelComponent } from './supplier-contacts-panel/supplier-contacts-panel.component';
import { SupplierEquipmentPanelComponent } from './supplier-equipment-panel/supplier-equipment-panel.component';
import { SupplierPartsPanelComponent } from './supplier-parts-panel/supplier-parts-panel.component';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { SupplierActivityPanelComponent } from './supplier-activity-panel/supplier-activity-panel.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { ListItemsModule } from '@allmax-angular/antero-web/ui/list-items';
import { ContactBoxModule } from '@allmax-angular/shared/ui/contact-box';

@NgModule({
  imports: [
    CommonModule,
    ContactBoxModule,
    DataTableModule,
    GridModule,
    LayoutPanelModule,
    ReadOnlyBoxModule,
    SpacerModule,
    ListItemsModule
  ],
  declarations: [
    SupplierDetailsPanelComponent,
    SupplierContactsPanelComponent,
    SupplierEquipmentPanelComponent,
    SupplierPartsPanelComponent,
    SupplierActivityPanelComponent,
  ],
  exports: [
    SupplierDetailsPanelComponent,
    SupplierContactsPanelComponent,
    SupplierEquipmentPanelComponent,
    SupplierPartsPanelComponent,
    SupplierActivityPanelComponent,
  ],
})
export class SupplierPanelsModule {}
