import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amx-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.scss'],
})
export class TabButtonComponent {
  @Input() public active = false;
  @Input() public index = -1;
  @Input() public icon: any;
  @Input() public label = '';
  @Input() public fgColor = 'var(--icon-color)';
  @Input() public collapsed = false;
  @Input() public styleType: 'bg' | 'underline' = 'bg';
  @Input() public disabled = false;

  @Output() public clicked = new EventEmitter<number>();


  constructor(private el: ElementRef) {}

  public get width(): number {
    return (this.el.nativeElement as HTMLElement)?.getBoundingClientRect().width
  }

  public clickHandler(): void {
    this.clicked.emit(this.index);
  }
}
