import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDetailComponent } from './master-detail.component';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { DrawerModule } from '@allmax-angular/shared/ui/drawer';
import { GridModule } from '@allmax-angular/shared/ui/grid';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    DrawerModule,
    GridModule
  ],
  declarations: [MasterDetailComponent],
  exports: [MasterDetailComponent]
})
export class MasterDetailModule {}
