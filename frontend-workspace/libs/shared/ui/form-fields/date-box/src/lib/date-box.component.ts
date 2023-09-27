import { bindableProvider, FormfieldBaseComponent } from '@allmax-angular/shared/types';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, Input } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'amx-date-box',
  templateUrl: './date-box.component.html',
  providers: [ bindableProvider(DateBoxComponent) ]
})
export class DateBoxComponent extends FormfieldBaseComponent<Date> {
  @Input() public type = 'datetime';
  @Input() public allowCustomValue = true;

  public override get uiPlaceholder(): string {
    if (this.required) {
      return '(required)';
    } else if (!isNullOrEmpty(this.placeholder)) {
      return this.placeholder
    } else {
      return 'MM/DD/YYYY';
    }
  }
}
