import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { CollapsibleContainerComponent } from './collapsible-container/collapsible-container.component';
import { CollapsibleItemComponent } from './collapsible-item/collapsible-item.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box'

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FontAwesomeModule,
    IconModule,
    ScrollBoxModule
  ],
  declarations: [
    CollapsibleContainerComponent,
    CollapsibleItemComponent
  ],
  exports: [
    CollapsibleContainerComponent,
    CollapsibleItemComponent
  ],
})
export class CollapsibleModule { }
