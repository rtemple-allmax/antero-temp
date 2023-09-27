import { Component, HostBinding, Input } from "@angular/core";

@Component({ template: '' })
export class SortableBaseComponent {
  @Input() title = '';
  @HostBinding('attr.data-id') public dataID = this.title;
}