import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleItemComponent } from './collapsible-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FontAwesomeModule
  ],
  declarations: [ CollapsibleItemComponent ],
  exports: [ CollapsibleItemComponent ],
})
export class CollapsibleItemModule {}
