import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSuppliersComponent } from './section-suppliers.component';
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
import { SuppliersTabDetailsComponent } from './suppliers-tab-details/suppliers-tab-details.component';
import { SuppliersTabActivityComponent } from './suppliers-tab-activity/suppliers-tab-activity.component';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { SupplierPanelsModule } from '@allmax-angular/antero-web/ui/supplier-panels';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    CommonModule,
    DropdownButtonModule,
    FlexModule,
    IconButtonModule,
    MasterDetailModule,
    ViewSwitchModule,
    ComboButtonModule,
    SearchBoxModule,
    MediaObjectModule,
    SpacerModule,
    TabsModule,
    LayoutPanelModule,
    ScrollBoxModule,
    SupplierPanelsModule
  ],
  declarations: [
    SectionSuppliersComponent,
    SuppliersTabDetailsComponent,
    SuppliersTabActivityComponent,
  ],
  exports: [
    SectionSuppliersComponent,
    SuppliersTabDetailsComponent,
    SuppliersTabActivityComponent,
  ],
})
export class SectionSuppliersModule {}
