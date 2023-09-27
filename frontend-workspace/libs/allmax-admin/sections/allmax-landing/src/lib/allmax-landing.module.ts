import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllmaxLandingComponent } from './allmax-landing.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    SpacerModule
  ],
  declarations: [AllmaxLandingComponent],
  exports: [AllmaxLandingComponent],
})
export class AllmaxLandingModule {}
