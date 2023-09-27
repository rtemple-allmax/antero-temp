import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDashboardComponent } from './section-dashboard.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    CommonModule,
    LayoutPanelModule,
    SpacerModule
  ],
  declarations: [ SectionDashboardComponent ],
  exports: [ SectionDashboardComponent ],
})
export class SectionDashboardModule {}
