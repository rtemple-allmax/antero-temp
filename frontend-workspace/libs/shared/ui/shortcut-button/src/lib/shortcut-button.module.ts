import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutButtonComponent } from './shortcut-button.component';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';

@NgModule({
  imports: [
    CommonModule,
    SpacerModule,
    FontAwesomeModule,
    ClickOutsideModule
  ],
  declarations: [ ShortcutButtonComponent ],
  exports: [ ShortcutButtonComponent ],
})
export class ShortcutButtonModule {}
