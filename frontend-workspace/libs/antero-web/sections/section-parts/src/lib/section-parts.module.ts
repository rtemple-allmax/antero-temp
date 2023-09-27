import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPartsComponent } from './section-parts.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { ViewSwitchModule } from '@allmax-angular/shared/ui/view-switch';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { SearchBoxModule } from '@allmax-angular/shared/ui/search-box';
import { MediaObjectModule } from '@allmax-angular/shared/ui/media-object';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { PartsTabDetailsComponent } from './parts-tab-details/parts-tab-details.component';
import { PartsTabHistoryComponent } from './parts-tab-history/parts-tab-history.component';
import { PartsTabImagesComponent } from './parts-tab-images/parts-tab-images.component';
import { PartsTabActivityComponent } from './parts-tab-activity/parts-tab-activity.component';
import { PartPanelsModule } from '@allmax-angular/antero-web/ui/part-panels';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    ComboButtonModule,
    CommonModule,
    DropdownButtonModule,
    FlexModule,
    IconButtonModule,
    MasterDetailModule,
    MediaObjectModule,
    SearchBoxModule,
    SpacerModule,
    TabsModule,
    ViewSwitchModule,
    PartPanelsModule,
    LayoutPanelModule,
    ScrollBoxModule
  ],
  declarations: [
    SectionPartsComponent,
    PartsTabDetailsComponent,
    PartsTabHistoryComponent,
    PartsTabImagesComponent,
    PartsTabActivityComponent,
  ],
  exports: [
    SectionPartsComponent,
    PartsTabDetailsComponent,
    PartsTabHistoryComponent,
    PartsTabImagesComponent,
    PartsTabActivityComponent,
  ],
})
export class SectionPartsModule {}
