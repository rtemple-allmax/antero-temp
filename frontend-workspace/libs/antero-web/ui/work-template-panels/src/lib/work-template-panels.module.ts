import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkTemplatesDetailsPanelComponent } from './work-templates-details-panel/work-templates-details-panel.component';
import { WorkTemplatesSchedulingPanelComponent } from './work-templates-scheduling-panel/work-templates-scheduling-panel.component';
import { WorkTemplatesPartsPanelComponent } from './work-templates-parts-panel/work-templates-parts-panel.component';
import { WorkTemplatesLaborPanelComponent } from './work-templates-labor-panel/work-templates-labor-panel.component';
import { WorkTemplatesContractorsPanelComponent } from './work-templates-contractors-panel/work-templates-contractors-panel.component';
import { WorkTemplatesToolsPanelComponent } from './work-templates-tools-panel/work-templates-tools-panel.component';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { DxScrollViewModule } from 'devextreme-angular';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { DataTableModule } from '@allmax-angular/shared/ui/data-table';
import { RadioGroupModule } from '@allmax-angular/shared/ui/radio-group';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { CardModule } from '@allmax-angular/shared/ui/card';

@NgModule({
  imports: [
    CardModule,
    ComboButtonModule,
    CommonModule,
    DataTableModule,
    DxScrollViewModule,
    FlexModule,
    GridModule,
    GroupBoxModule,
    ReadOnlyBoxModule,
    RadioGroupModule,
    SpacerModule,
  ],
  declarations: [
    WorkTemplatesDetailsPanelComponent,
    WorkTemplatesSchedulingPanelComponent,
    WorkTemplatesPartsPanelComponent,
    WorkTemplatesLaborPanelComponent,
    WorkTemplatesContractorsPanelComponent,
    WorkTemplatesToolsPanelComponent,
  ],
  exports: [
    WorkTemplatesDetailsPanelComponent,
    WorkTemplatesSchedulingPanelComponent,
    WorkTemplatesPartsPanelComponent,
    WorkTemplatesLaborPanelComponent,
    WorkTemplatesContractorsPanelComponent,
    WorkTemplatesToolsPanelComponent,
  ],
})
export class WorkTemplatePanelsModule {}
