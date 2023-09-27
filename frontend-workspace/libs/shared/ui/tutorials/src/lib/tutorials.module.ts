import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialTextComponent } from './tutorial-text/tutorial-text.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    LinkButtonModule
  ],
  declarations: [
    TutorialTextComponent
  ],
  exports: [
    TutorialTextComponent
  ],
})
export class TutorialsModule {}
