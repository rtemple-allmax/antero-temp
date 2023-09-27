import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBoxComponent } from './contact-box.component';
import { EmailBoxComponent } from './email-box/email-box.component';
import { TelephoneBoxComponent } from './telephone-box/telephone-box.component';
import { WebsiteBoxComponent } from './website-box/website-box.component';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    CommonModule,
    ReadOnlyBoxModule,
    SpacerModule
  ],
  declarations: [
    ContactBoxComponent,
    EmailBoxComponent,
    TelephoneBoxComponent,
    WebsiteBoxComponent,
  ],
  exports: [ ContactBoxComponent ],
})
export class ContactBoxModule {}
