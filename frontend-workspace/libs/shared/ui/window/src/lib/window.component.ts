import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'amx-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent {
  @Input() public heading = '';
  @Input() public zIndex = 'var(--layer-2)';
  @Input() public maxWidth = '800px';
  @Input() public minHeight = 'auto';
  @Input() public height = 'auto';
  @Input() public maxHeight = 'auto';
  @Input() public bgColor = 'var(--base-bg-color)';
  @Input() public headerBGColor = 'var(--app-color)';

  @Output() public sliderClosed = new EventEmitter();
  // @Input() public sliderWidth = '400px';

  public windowIsOpen = false;
  public sliderIsOpen = false;
  public sliderIsOpaque = false;

  public icons = { ...allIcons };

  public get sliderState(): boolean {
    return this.sliderIsOpaque || !this.sliderIsOpen
  }
  
  public open(): void {
    this.windowIsOpen = true;
  }

  public close(): void {
    this.windowIsOpen = false;
  }

  public slideIn(): void {
    this.sliderIsOpen = true;
  }

  public slideOut(): void {
    this.sliderIsOpen = false;
    this.sliderClosed.emit();
  }

  public mouseenterHandler(): void {
    this.sliderIsOpaque = true; 
  }

  public mouseleaveHandler(): void {
    this.sliderIsOpaque = false; 
  }

  public preventBubble(e: Event): void {
    e.stopPropagation();
  }
}
