import { bindableProvider, FormfieldBaseComponent } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'amx-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
  providers: [bindableProvider(CheckBoxComponent)]
})
export class CheckBoxComponent extends FormfieldBaseComponent<boolean>  {
  @Input() public color = 'var(--fg-color)';
}
