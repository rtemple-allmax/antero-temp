import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockLocationsComponent } from './stock-locations.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { GridModule } from '@allmax-angular/shared/ui/grid';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    GridModule,
    ModalWindowModule
  ],
  declarations: [ StockLocationsComponent ],
  exports: [ StockLocationsComponent ],
})
export class StockLocationsModule {}
