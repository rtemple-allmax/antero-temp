import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormattedTextComponent } from './formatted-text.component';
import { TrustHtmlModule } from '@allmax-angular/shared/ui/trust-html';

@NgModule({
  imports: [
    CommonModule,
    TrustHtmlModule
  ],
  declarations: [FormattedTextComponent],
  exports: [FormattedTextComponent],
})
export class FormattedTextModule {}
