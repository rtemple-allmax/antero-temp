import { bindableProvider, FormfieldBaseComponent } from '@allmax-angular/shared/types';
import { Component } from '@angular/core';

@Component({
  selector: 'amx-text-area',
  templateUrl: './text-area.component.html',
  providers: [ bindableProvider(TextAreaComponent) ]
})
export class TextAreaComponent extends FormfieldBaseComponent<string> { }
