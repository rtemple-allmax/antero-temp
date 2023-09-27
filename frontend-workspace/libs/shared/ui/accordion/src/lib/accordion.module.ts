import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionContainerComponent } from './accordion-container/accordion-container.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SpacerModule
  ],
  declarations: [
    AccordionContainerComponent,
    AccordionPanelComponent
  ],
  exports: [
    AccordionContainerComponent,
    AccordionPanelComponent
  ],
})
export class AccordionModule {}
