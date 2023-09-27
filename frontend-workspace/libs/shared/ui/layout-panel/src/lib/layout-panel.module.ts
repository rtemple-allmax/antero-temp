import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPanelContainerComponent } from './layout-panel-container/layout-panel-container.component';
import { LayoutPanelCollapsibleComponent } from './layout-panel-collapsible/layout-panel-collapsible.component';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { LayoutPanelUserComponent } from './layout-panel-user/layout-panel-user.component';
import { MediaObjectModule } from '@allmax-angular/shared/ui/media-object';
import { LayoutPanelInstrumentsComponent } from './layout-panel-instruments/layout-panel-instruments.component';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { LayoutPanelWorkOrdersComponent } from './layout-panel-work-orders/layout-panel-work-orders.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { TutorialsModule } from '@allmax-angular/shared/ui/tutorials';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';
import { LayoutPanelComponent } from './layout-panel/layout-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    IconButtonModule,
    MediaObjectModule,
    SpacerModule,
    CardModule,
    GridModule,
    SeparatorModule,
    TextBoxModule,
    TutorialsModule,
  ],
  declarations: [
    LayoutPanelContainerComponent,
    LayoutPanelCollapsibleComponent,
    LayoutPanelUserComponent,
    LayoutPanelInstrumentsComponent,
    LayoutPanelWorkOrdersComponent,
    LayoutPanelComponent,
  ],
  exports: [
    LayoutPanelContainerComponent,
    LayoutPanelCollapsibleComponent,
    LayoutPanelUserComponent,
    LayoutPanelInstrumentsComponent,
    LayoutPanelWorkOrdersComponent,
    LayoutPanelComponent,
  ],
})
export class LayoutPanelModule {}
