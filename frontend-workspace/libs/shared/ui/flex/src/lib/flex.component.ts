import { Component, Input } from '@angular/core';

@Component({
  selector: 'amx-flex',
  templateUrl: './flex.component.html',
})
export class FlexComponent {
  @Input() public direction = 'row';
  @Input() public wrap = 'nowrap';
  @Input() public flow = 'row nowrap';
  @Input() public justify = 'flex-start';
  @Input() public align = 'stretch';
  @Input() public gap = '0';
  @Input() public padding = '0';
  @Input() public height = 'auto';
  @Input() public border = 'none';
  @Input() public width = 'auto'

  public get styles(): any {
    return {
      'display': 'flex',
      'flex-direction': this.direction,
      'flex-wrap': this.wrap,
      'flex-flow': this.flow,
      'justify-content': this.justify,
      'align-items': this.align,
      'gap': this.gap,
      'padding': this.padding,
      'height': this.height,
      'border': this.border,
      'width': this.width
    }
  }
}
