import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWorkAdminPanelComponent } from './current-work-admin-panel/current-work-admin-panel.component';
import { CurrentWorkCompletionPanelComponent } from './current-work-completion-panel/current-work-completion-panel.component';
import { CurrentWorkEquipmentPanelComponent } from './current-work-equipment-panel/current-work-equipment-panel.component';
import { CurrentWorkTaskPanelComponent } from './current-work-task-panel/current-work-task-panel.component';
import { CurrentWorkLaborPanelComponent } from './current-work-labor-panel/current-work-labor-panel.component';
import { CurrentWorkPartsPanelComponent } from './current-work-parts-panel/current-work-parts-panel.component';
import { CurrentWorkContractorsPanelComponent } from './current-work-contractors-panel/current-work-contractors-panel.component';
import { CurrentWorkToolsPanelComponent } from './current-work-tools-panel/current-work-tools-panel.component';
import { CurrentWorkMiscPanelComponent } from './current-work-misc-panel/current-work-misc-panel.component';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { MediaObjectModule } from '@allmax-angular/shared/ui/media-object';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { FormattedTextModule } from '@allmax-angular/shared/ui/formatted-text';
import { ChecklistModule } from '@allmax-angular/antero-web/ui/checklist';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { ListItemsModule } from '@allmax-angular/antero-web/ui/list-items';
import { CurrentWorkMapPanelComponent } from './current-work-map-panel/current-work-map-panel.component';
import { MapModule } from '@allmax-angular/shared/ui/map';
import { CurrentWorkActivityPanelComponent } from './current-work-activity-panel/current-work-activity-panel.component';

@NgModule({
  imports: [
    ChecklistModule,
    CommonModule,
    DataTableModule,
    FlexModule,
    FormattedTextModule,
    GridModule,
    IconButtonModule,
    LayoutPanelModule,
    MediaObjectModule,
    ReadOnlyBoxModule,
    ListItemsModule,
    MapModule,
  ],
  declarations: [
    CurrentWorkAdminPanelComponent,
    CurrentWorkCompletionPanelComponent,
    CurrentWorkEquipmentPanelComponent,
    CurrentWorkTaskPanelComponent,
    CurrentWorkLaborPanelComponent,
    CurrentWorkPartsPanelComponent,
    CurrentWorkContractorsPanelComponent,
    CurrentWorkToolsPanelComponent,
    CurrentWorkMiscPanelComponent,
    CurrentWorkMapPanelComponent,
    CurrentWorkActivityPanelComponent,
  ],
  exports: [
    CurrentWorkAdminPanelComponent,
    CurrentWorkCompletionPanelComponent,
    CurrentWorkEquipmentPanelComponent,
    CurrentWorkTaskPanelComponent,
    CurrentWorkLaborPanelComponent,
    CurrentWorkPartsPanelComponent,
    CurrentWorkContractorsPanelComponent,
    CurrentWorkToolsPanelComponent,
    CurrentWorkMiscPanelComponent,
    CurrentWorkMapPanelComponent,
    CurrentWorkActivityPanelComponent,
  ],
})
export class CurrentWorkPanelsModule {}
