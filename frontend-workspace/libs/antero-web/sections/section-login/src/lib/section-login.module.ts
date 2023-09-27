import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionLoginComponent } from './section-login.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FormsModule,
    LabelButtonModule,
    LinkButtonModule,
    SpacerModule
  ],
  declarations: [ SectionLoginComponent ],
  exports: [ SectionLoginComponent ],
})
export class SectionLoginModule {}
