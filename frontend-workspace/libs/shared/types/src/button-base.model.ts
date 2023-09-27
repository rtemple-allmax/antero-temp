import { PositioningService } from "@allmax-angular/shared/services/src/lib/positioning";
import { isNullOrEmpty } from "@allmax-angular/shared/utils";
import { Component, EventEmitter, Input, Output, Renderer2 } from "@angular/core";
import { Nullable } from "./nullable.type";
import { SecurityLevels } from './security-levels.enum';

@Component({ template: '' })
export class ButtonBaseComponent {
  @Input() public securityThreshold = SecurityLevels.AddEdit;
  @Input() public security = SecurityLevels.Full;
  @Input() public label = '';
  @Input() public icon: any = '';
  // @Input() public type = 'button';
  @Input() public height = 'auto';
  @Input() public shouldDisable = false;
  @Input() public bgColor = 'transparent';
  @Input() public fgColor = 'var(--fg-color)';
  @Input() public opacity = 1;
  @Input() public tabIndex = 0;
  @Input() public tooltip = '';

  @Output() public clicked = new EventEmitter<Event>();
  @Output() public mouseentered = new EventEmitter<MouseEvent>();
  @Output() public mouseexited = new EventEmitter<MouseEvent>();

  public get iconSrc(): string {
    return isNullOrEmpty(this.icon) ? `assets/icons/iconNoImage.svg` : `assets/icons/${ this.icon }.svg`;
  }

  public get disabled(): boolean {
    return this.security < this.securityThreshold || this.shouldDisable;
  }

  constructor(protected renderer: Renderer2, protected positioning: PositioningService) { }

  public click(e: Event): void {
    this.clicked.emit(e);
  }

  public mouseenteredHandler(e: MouseEvent): void {
    this.mouseentered.emit(e);
  }

  public mouseexitedHandler(e: MouseEvent): void {
    this.mouseexited.emit(e);
  }
}