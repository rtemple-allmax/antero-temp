import { Nullable } from '@allmax-angular/shared/types';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amx-group-box',
  templateUrl: './group-box.component.html',
  styleUrls: ['./group-box.component.scss'],
})
export class GroupBoxComponent {
  @Input() public label = '';
  @Input() public stretch = false;
  @Input() public actionIcon: any;
  @Input() public iconColor = 'var(--icon-color)';
  @Input() public padding = 'var(--space-md)';
  @Input() public overflow = 'visible';
  @Input() public maxWidth = '100%';
  @Input() public white = false;
  @Input() public black = false;
  @Input() public bold = false;
  @Input() public shouldDisable = false;
  @Input() public btnLabel: Nullable<string>;

  @Output() public actionRequested = new EventEmitter<undefined>();

  public get hasIcon(): boolean {
    return !isNullOrEmpty(this.actionIcon);
  }

  public get iconSrc(): string {
    return this.hasIcon ? `assets/icons/${this.actionIcon}.svg` : '';
  }

  public clickHandler(): void {
    this.actionRequested.emit();
  }
}
