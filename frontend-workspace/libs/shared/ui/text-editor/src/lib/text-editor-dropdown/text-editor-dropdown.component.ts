import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'amx-text-editor-dropdown',
  templateUrl: './text-editor-dropdown.component.html',
  styles: [`
    .dropdown {
      position: relative;
      border: 1px solid #ccc;
    }

    .dropdown .value {
      cursor: pointer;
      min-height: var(--space-lg);
      padding: var(--space-sm);
      display: flex;
    }

    .dropdown .value span {
      flex: 1;
    }

    .dropdown .value.open {
      outline: 1;
    }

    .dropdown .items {
      border: 1px solid #bbb;
      position: absolute;
      display: none;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: var(--panel-bg-color);
      z-index: 1;
      box-shadow: var(--shadow);
      padding: 0 var(--space-sm);
    }

    .dropdown .items .item {
      padding: var(--space-sm) 0;
      cursor: pointer;
    }

    .dropdown .items.open {
      display: block;
    }
  `],
})
export class TextEditorDropdownComponent {
  @Input() public initialIndex = 0;
  @Input() public cssProperty = '';

  @Output() public selectionChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() public opened: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() public closed: EventEmitter<Event> = new EventEmitter<Event>();

  public items: string[] = [];
  public visibilityState = false;
  public value = '';

  public icons = { ...miscIcons };

  public get isOpen(): boolean {
    return this.visibilityState;
  }

  public open(): void {
    this.visibilityState = true;
    this.opened.emit();
  }

  public close(): void {
    this.visibilityState = false;
    this.closed.emit();
  }

  public toggle(): void {
    this.visibilityState ? this.close() : this.open();
  }

  public setSelection(index: number, e: Event): void {
    e.stopPropagation();
    if (index < this.items.length) {
      this.value = this.items[index];
      this.selectionChanged.emit(this.value);
      this.close();
    }
  }

  public setValue(value: string) {
    this.value = value;
  }

  public setItems(items: string[]): void {
    this.items = items;
    if (this.items.length > this.initialIndex) {
      this.value = this.items[this.initialIndex];
      this.selectionChanged.emit(this.value);
    }
  }

  public setSpanStyles(item: string): any {
    if (isNullOrEmpty(this.cssProperty) || isNullOrEmpty(item)) {
      return {};
    }

    return {
      [this.cssProperty]: item,
      display: 'block'
    };
  }
}
