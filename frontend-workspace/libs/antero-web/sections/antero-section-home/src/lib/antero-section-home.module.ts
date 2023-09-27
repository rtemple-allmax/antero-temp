import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnteroSectionHomeComponent } from './antero-section-home.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { AccordionModule } from '@allmax-angular/shared/ui/accordion';
import { FilterButtonModule } from '@allmax-angular/shared/ui/buttons/filter-button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { DropdownModule } from '@allmax-angular/shared/ui/dropdown';
import { FormsModule } from '@angular/forms';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { ShortcutButtonModule } from '@allmax-angular/shared/ui/shortcut-button';
import { HomeCardComponent } from './home-card/home-card.component';

@NgModule({
  imports: [
    AccordionModule,
    AnteroAppFrameModule,
    CommonModule,
    FilterButtonModule,
    FontAwesomeModule,
    GridModule,
    GroupBoxModule,
    FlexModule,
    FormsModule,
    DropdownModule,
    ShortcutButtonModule,
  ],
  declarations: [AnteroSectionHomeComponent, HomeCardComponent],
})
export class AnteroSectionHomeModule {}
