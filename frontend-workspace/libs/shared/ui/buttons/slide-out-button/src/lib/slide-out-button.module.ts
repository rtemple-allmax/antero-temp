import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideOutButtonComponent } from './slide-out-button/slide-out-button.component';
import { ClickOutsideModule } from '@allmax-angular/shared/ui/click-outside';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconModule } from '@allmax-angular/shared/ui/icon';

@NgModule({
  imports: [
    ClickOutsideModule,
    CommonModule,
    FlexModule,
    IconModule
  ],
  declarations: [SlideOutButtonComponent],
  exports: [SlideOutButtonComponent],
})
export class SlideOutButtonModule {}
