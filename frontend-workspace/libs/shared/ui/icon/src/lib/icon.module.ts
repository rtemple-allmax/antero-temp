import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FontAwesomeModule
  ],
  declarations: [ IconComponent ],
  exports: [ IconComponent ],
})
export class IconModule {}
