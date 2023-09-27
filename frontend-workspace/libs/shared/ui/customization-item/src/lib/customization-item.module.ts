import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizationItemComponent } from './customization-item.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FontAwesomeModule,
    IconButtonModule
  ],
  declarations: [ CustomizationItemComponent ],
  exports: [ CustomizationItemComponent ],
})
export class CustomizationItemModule {}
