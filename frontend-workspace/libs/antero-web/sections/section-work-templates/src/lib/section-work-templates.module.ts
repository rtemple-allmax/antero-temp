import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWorkTemplatesComponent } from './section-work-templates.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FilterButtonModule } from '@allmax-angular/shared/ui/buttons/filter-button';
import { SwitchModule } from '@allmax-angular/shared/ui/switch';
import { WorkTemplatePanelsModule } from '@allmax-angular/antero-web/ui/work-template-panels';
import { ToggleModule } from '@allmax-angular/shared/ui/toggle';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    ComboButtonModule,
    CommonModule,
    DropdownButtonModule,
    FilterButtonModule,
    FlexModule,
    LabelButtonModule,
    LinkButtonModule,
    IconButtonModule,
    MasterDetailModule,
    SpacerModule,
    SwitchModule,
    TabsModule,
    ToggleModule,
    WorkTemplatePanelsModule
  ],
  declarations: [ SectionWorkTemplatesComponent ],
})
export class SectionWorkTemplatesModule {}
