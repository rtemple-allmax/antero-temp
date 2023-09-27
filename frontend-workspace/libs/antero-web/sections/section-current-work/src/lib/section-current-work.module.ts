import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionCurrentWorkComponent } from './section-current-work.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { ViewSwitchModule } from '@allmax-angular/shared/ui/view-switch';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { SearchBoxModule } from '@allmax-angular/shared/ui/search-box';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { WorkOrderTabDetailsComponent } from './work-order-tab-details/work-order-tab-details.component';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { WorkOrderTabMapComponent } from './work-order-tab-map/work-order-tab-map.component';
import { WorkOrderTabActivityComponent } from './work-order-tab-activity/work-order-tab-activity.component';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { CurrentWorkPanelsModule } from '@allmax-angular/antero-web/ui/current-work-panels';
import { PopoverButtonModule } from '@allmax-angular/shared/ui/buttons/popover-button';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    ComboButtonModule,
    CommonModule,
    DropdownButtonModule,
    FlexModule,
    IconButtonModule,
    IconModule,
    LayoutPanelModule,
    MasterDetailModule,
    ScrollBoxModule,
    SearchBoxModule,
    SpacerModule,
    TabsModule,
    ViewSwitchModule,
    CurrentWorkPanelsModule,
    PopoverButtonModule
  ],
  declarations: [
    SectionCurrentWorkComponent,
    WorkOrderTabDetailsComponent,
    WorkOrderTabMapComponent,
    WorkOrderTabActivityComponent,
  ],
  exports: [
    SectionCurrentWorkComponent,
    WorkOrderTabDetailsComponent,
    WorkOrderTabMapComponent,
    WorkOrderTabActivityComponent,
  ],
})
export class SectionCurrentWorkModule {}
