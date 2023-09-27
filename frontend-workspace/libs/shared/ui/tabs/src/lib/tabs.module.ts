import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FontAwesomeModule,
    ScrollBoxModule,
    SeparatorModule,
    SpacerModule
  ],
  declarations: [
    TabsComponent,
    TabComponent,
    TabButtonComponent
  ],
  exports: [
    TabsComponent,
    TabComponent
  ],
})
export class TabsModule {}
