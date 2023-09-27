import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkOrderCardComponent } from './work-order-card.component';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { GridModule } from '@allmax-angular/shared/ui/grid';

@NgModule({
  imports: [
    CardModule,
    CommonModule,
    GridModule,
    ReadOnlyBoxModule
  ],
  declarations: [ WorkOrderCardComponent ],
  exports: [ WorkOrderCardComponent ],
})
export class WorkOrderCardModule {}
