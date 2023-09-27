import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { allIcons } from '@allmax-angular/shared/ui/icons'
import { Nullable } from '@allmax-angular/shared/types';

export interface CardOption {
  label: string;
  icon: any;
  danger: boolean;
  clickHandler: (record: any) => void;
}

export interface CardIndicator {
  icon: any;
  type: IndicatorTypes;
  color: string;
  template: Nullable<TemplateRef<any>>;  
}

export interface CardControl {
  icon: any;
  color: string;
  clickHandler: () => void;
}

export enum IndicatorTypes {
  ICON,
  POPOVER
}

@Component({
  selector: 'amx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss' ]
})
export class CardComponent {
  @Input() public title: Nullable<string>;
  @Input() public height = 'auto';
  @Input() public indicators: CardIndicator[] = [];
  @Input() public controls: CardControl[] = [];
  @Input() public options: CardOption[] = [];
  @Input() public selected = false;
  @Input() public static = false;
  @Input() public record: any;
  @Input() public titleExpr = 'Name';
  @Input() public titleWidth = '400px';
  @Input() public showHoverEffect = true;
  @Input() public color: Nullable<string>;

  @Output() public clicked = new EventEmitter<any>();
  @Output() public controlClicked = new EventEmitter<number>();

  public indicatorTypes: typeof IndicatorTypes = IndicatorTypes;

  public icons = { ...allIcons };

  public areas = `"title fields fields fields indicator"`;

  public hovered = false;
  public showContextMenu = false;
  public contextMenuX = 0;
  public contextMenuY = 0;

  public get top(): string {
    return `${ this.contextMenuY }px`;
  }

  public get left(): string {
    return `${ this.contextMenuX }px`;
  }

  public get columns(): string {
    return `${ this.titleWidth } 1fr 100px`;
  }

  public clickHandler(): void {
    this.clicked.emit(this.record);
  }

  public mouseenterHandler(): void {
    if (!this.hovered) {
      this.hovered = true;
    }
  }

  public mouseleaveHandler(): void {
    if (this.hovered) {
      this.hovered = false;
    }
  }

  public contextMenuHandler(e: MouseEvent): void {
    e.preventDefault();
    this.contextMenuX = e.offsetX;
    this.contextMenuY = e.offsetY;
    this.showContextMenu = true;
  }

  public closeContextMenu(): void {
    if (this.showContextMenu) {
      this.contextMenuX = 0;
      this.contextMenuY = 0;
      this.showContextMenu = false;
    }
  }

  public controlHandler(index: number): void {
    this.controlClicked.emit(index);
  }

  public optionClickedHandler(option: CardOption): void {
    option.clickHandler(this.record);
    document.dispatchEvent(new Event('click', { bubbles: false }));
  }

  public controlClickedHandler(control: CardControl): void {
    control.clickHandler();
    document.dispatchEvent(new Event('click', { bubbles: false }));
  }

  public stopPropagation(e: Event): void {
    e.stopPropagation();
  }
}
