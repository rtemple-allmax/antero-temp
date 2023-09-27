import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrustHtmlPipe } from './trust-html.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TrustHtmlPipe
  ],
  exports: [ TrustHtmlPipe ]
})
export class TrustHtmlModule {}
