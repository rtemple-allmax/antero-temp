import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboButtonComponent } from './combo-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [ComboButtonComponent],
  exports: [ComboButtonComponent],
})
export class ComboButtonModule {}
