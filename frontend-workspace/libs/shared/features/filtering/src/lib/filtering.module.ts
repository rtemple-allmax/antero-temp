import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteringPanelComponent } from './filtering-panel/filtering-panel.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { AccordionModule } from '@allmax-angular/shared/ui/accordion';

@NgModule({
  imports: [
    AccordionModule,
    ClickOutsideModule,
    CommonModule,
    FlexModule,
    IconButtonModule,
    LinkButtonModule
  ],
  declarations: [ FilteringPanelComponent ],
  exports: [ FilteringPanelComponent ],
})
export class FilteringModule {}
