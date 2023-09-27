import { ContactBoxTypes, DeviceTypes } from '@allmax-angular/shared/types';
import { isValidEmail, isValidPhoneNumber, isValidWebAddress } from '@allmax-angular/shared/utils';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'amx-contact-box',
  templateUrl: './contact-box.component.html',
  styles: [],
})
export class ContactBoxComponent {
  @Input() public label = '';
  @Input() public value= '';
  @Input() public deviceType = DeviceTypes.UNSET;
  
  public types: typeof ContactBoxTypes = ContactBoxTypes;
  public get type(): ContactBoxTypes {
    if (isValidEmail(this.value)) {
      return ContactBoxTypes.EMAIL;
    } else if (isValidPhoneNumber(this.value) && this.deviceType !== DeviceTypes.DESKTOP) {
      return ContactBoxTypes.PHONE;
    } else if (isValidWebAddress(this.value)) {
      return ContactBoxTypes.WEBSITE;
    } else {
      return ContactBoxTypes.NONE;
    }
  }
}
