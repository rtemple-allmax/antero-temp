import { eqSectionIcons, miscIcons } from '@allmax-angular/shared/ui/icons';
import { Component, Input } from '@angular/core';
import { noop } from 'rxjs';

@Component({
  selector: 'amx-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: [ '../accordion.theme.scss' ]
})
export class AccordionPanelComponent {
  public icons = { ...miscIcons, ...eqSectionIcons };

  @Input() public label = '';
  @Input() public icon: any = this.icons.detailsIcon;
  @Input() public fontSize = 'var(--space-lg)';
  
  private index = -1;
  private clickCB: (val: number) => void = noop;
  public collapsed = true;

  public get iconTransform(): string {
    return this.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
  }

  public headerClicked(): void {
    if (this.clickCB !== null && this.clickCB !== undefined) {
      this.clickCB(this.index);
    }
  }

  public open(): void {
    this.collapsed = false;
  }

  public close(): void {
    this.collapsed = true;
  }

  public setIndex(i: number): void {
    this.index = i;
  }

  public setCB(cb: (val: number) => void): void {
    this.clickCB = cb;
  }
}
