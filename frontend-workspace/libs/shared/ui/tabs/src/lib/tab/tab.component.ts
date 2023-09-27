import { Nullable } from '@allmax-angular/shared/types';
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'amx-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() public label = '';
  @Input() public icon: any = null;
  @Input() public active = false;
  @Input() public bgColor = 'var(--base-bg-color)';

  @Output() public visibilityStateChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() public opened: EventEmitter<any> = new EventEmitter<any>();

  public selected = false;

  constructor(private el: ElementRef) { }

  public getHeight(): string {
    if (!this.el || !this.el.nativeElement) { return '0'; }
    return `${ (this.el.nativeElement as HTMLElement).getBoundingClientRect().height }px`;
  }

  public getWidth(): string {
    if (!this.el || !this.el.nativeElement) { return '0'; }
    return `${ (this.el.nativeElement as HTMLElement).getBoundingClientRect().width }px`;
  }

  public open(): void {
    this.updateState(true);
  }

  public close(): void {
    this.updateState(false);
  }

  private updateState(nextState: boolean): void {
    const temp = this.selected;
    this.selected = nextState;
    if (temp !== this.selected) {
      this.visibilityStateChanged.emit();
    }
    if (this.selected) { this.opened.emit(); }
  }
}
