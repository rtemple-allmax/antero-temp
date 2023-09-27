import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionAdminComponent } from './section-admin.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { PanelAdminUsersComponent } from './panels/panel-admin-users/panel-admin-users.component';
import { PanelAdminRolesComponent } from './panels/panel-admin-roles/panel-admin-roles.component';
import { PanelAdminOptionsComponent } from './panels/panel-admin-options/panel-admin-options.component';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { GridModule } from '@allmax-angular/shared/ui/grid';

@NgModule({
  imports: [
    CardModule,
    CommonModule,
    AnteroAppFrameModule,
    FlexModule,
    FontAwesomeModule,
    GridModule,
    GroupBoxModule,
    LabelButtonModule,
    ReadOnlyBoxModule,
    ScrollBoxModule,
    SpacerModule,
    TabsModule
  ],
  declarations: [
    SectionAdminComponent,
    PanelAdminUsersComponent,
    PanelAdminRolesComponent,
    PanelAdminOptionsComponent,
  ],
  exports: [ SectionAdminComponent ],
})
export class SectionAdminModule {}
