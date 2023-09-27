import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderingPanelDetailsComponent } from './ordering-panel-details/ordering-panel-details.component';
import { OrderingPanelPartsComponent } from './ordering-panel-parts/ordering-panel-parts.component';
import { OrderingPanelTransactionsComponent } from './ordering-panel-transactions/ordering-panel-transactions.component';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { OrderingActivityPanelComponent } from './ordering-activity-panel/ordering-activity-panel.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { FormattedTextModule } from '@allmax-angular/shared/ui/formatted-text';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { ListItemsModule } from '@allmax-angular/antero-web/ui/list-items';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    GridModule,
    LayoutPanelModule,
    ReadOnlyBoxModule,
    FormattedTextModule,
    ListItemsModule
  ],
  declarations: [
    OrderingPanelDetailsComponent,
    OrderingPanelPartsComponent,
    OrderingPanelTransactionsComponent,
    OrderingActivityPanelComponent,
  ],
  exports: [
    OrderingPanelDetailsComponent,
    OrderingPanelPartsComponent,
    OrderingPanelTransactionsComponent,
    OrderingActivityPanelComponent,
  ],
})
export class OrderingPanelsModule {}
