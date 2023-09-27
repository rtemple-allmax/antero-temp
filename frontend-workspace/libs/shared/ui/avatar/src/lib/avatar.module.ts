import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { SafeUrlModule } from '@allmax-angular/shared/pipes/safe-url';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    IconButtonModule,
    SafeUrlModule
  ],
  declarations: [AvatarComponent],
  exports: [AvatarComponent],
})
export class AvatarModule {}
