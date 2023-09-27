import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    SpacerModule
  ],
  declarations: [
    ProgressBarComponent
  ],
  exports: [ ProgressBarComponent ],
})
export class ProgressBarModule {}
