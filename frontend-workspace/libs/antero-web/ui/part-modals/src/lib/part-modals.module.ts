import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockLocationsComponent } from './stock-locations/stock-locations.component';
import { PartModalsComponent } from './part-modals.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { PartsFormsModule } from '@allmax-angular/antero-web/ui/forms/parts-forms';
import { PartQuantityFormsModule } from '@allmax-angular/antero-web/ui/forms/part-quantity-forms';
import { SupplierPartFormsModule } from '@allmax-angular/antero-web/ui/forms/supplier-part-forms';

@NgModule({
  imports: [
    CardModule,
    CommonModule,
    GridModule,
    ModalWindowModule,
    ScrollBoxModule,
    SpacerModule,
    PartsFormsModule,
    PartQuantityFormsModule,
    SupplierPartFormsModule
  ],
  declarations: [
    PartModalsComponent,
    StockLocationsComponent
  ],
  exports: [ PartModalsComponent ],
})
export class PartModalsModule {}
