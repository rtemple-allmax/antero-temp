import { Component, Input } from "@angular/core";
import { DeviceTypes } from "./device-types.enum";

@Component({ template: '' })
export class PanelBaseComponent {
  @Input() public deviceType: DeviceTypes = DeviceTypes.UNSET;
  @Input() public height = 'auto';
  @Input() public border = '1px solid #bbb';
  @Input() public padding = '0 var(--space-md) var(--space-md)';
}