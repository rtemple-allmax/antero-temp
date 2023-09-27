import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionOrderingComponent } from './section-ordering.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { CheckBoxModule } from '@allmax-angular/shared/ui/form-fields/check-box';
import { ViewSwitchModule } from '@allmax-angular/shared/ui/view-switch';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { SearchBoxModule } from '@allmax-angular/shared/ui/search-box';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { OrderingTabDetailsComponent } from './ordering-tab-details/ordering-tab-details.component';
import { OrderingTabActivityComponent } from './ordering-tab-activity/ordering-tab-activity.component';
import { OrderingPanelsModule } from '@allmax-angular/antero-web/ui/ordering-panels';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    CheckBoxModule,
    ComboButtonModule,
    CommonModule,
    DropdownButtonModule,
    FlexModule,
    IconButtonModule,
    LabelButtonModule,
    MasterDetailModule,
    ViewSwitchModule,
    SearchBoxModule,
    SpacerModule,
    TabsModule,
    OrderingPanelsModule,
    LayoutPanelModule,
    ScrollBoxModule
  ],
  declarations: [
    SectionOrderingComponent,
    OrderingTabDetailsComponent,
    OrderingTabActivityComponent,
  ],
  exports: [
    SectionOrderingComponent,
    OrderingTabDetailsComponent,
    OrderingTabActivityComponent,
  ],
})
export class SectionOrderingModule {}
