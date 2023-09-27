import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FontAwesomeModule
  ],
  declarations: [ IconButtonComponent ],
  exports: [ IconButtonComponent ],
})
export class IconButtonModule {}
