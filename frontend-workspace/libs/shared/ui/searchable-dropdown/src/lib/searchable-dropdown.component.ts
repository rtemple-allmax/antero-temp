import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { bindableProvider, FormfieldBaseComponent, Nullable, ObservableBinding, TableData } from '@allmax-angular/shared/types';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { allIcons } from '@allmax-angular/shared/ui/icons';

@Component({
  selector: 'amx-searchable-dropdown',
  templateUrl: './searchable-dropdown.component.html',
  providers: [ bindableProvider(SearchableDropdownComponent) ],
  styleUrls: ['./searchable-dropdown.component.scss'],
})
export class SearchableDropdownComponent extends FormfieldBaseComponent<any> implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('wrapper') public wrapper: Nullable<ElementRef<HTMLDivElement>>;
  @ViewChild('dropdown') public dropdown: Nullable<ElementRef<HTMLDivElement>>;
  @ViewChild('content') public content: Nullable<ElementRef<HTMLDivElement>>;
  @ViewChild('input') public input: Nullable<ElementRef<HTMLInputElement>>;

  @Input() public items: any[] = [];
  @Input() public displayExpr = 'name';
  @Input() public allowAdd = true;
  @Input() public usePositioning = true;
  @Input() public table = false;
  @Input() public tableData: Nullable<TableData>;
  @Input() public contentHeight = '300px';

  @Output() public addRequested = new EventEmitter<any>();
  @Output() public opened = new EventEmitter<undefined>();
  @Output() public closed = new EventEmitter<undefined>();

  public override placeholder = 'Search or Add...';

  private selectionIndex = -1;
  private dropdownEl: Nullable<HTMLDivElement>;
  private contentEl: Nullable<HTMLDivElement>;

  public binding = new ObservableBinding<string>();
  public itemsToDisplay: any[] = [];
  public isOpen = false;
  public navigating = false;

  private havePressedKey = false; 

  public icons = { ...allIcons };
  
  public get noItemText(): string {
    return isNullOrEmpty(this.binding.value) ? 'No items have been added to this list.' : 'No matches found.'  
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    if (this.allowAdd) {
      this.placeholder = 'Search or Add...'
    } else {
      this.placeholder = 'Search...';
    }
    this.subs.push(this.binding.value$.subscribe(() => this.updateItems()));
    this.subs.push(this.value$.subscribe(x => {
      if (x && this.displayExpr in x && x[this.displayExpr] !== this.binding.value) {
        this.binding.set(x[this.displayExpr]);
      }
    }))
  }
  
  public ngAfterViewInit(): void {
    this.dropdownEl = this.dropdown?.nativeElement;
    this.contentEl = this.content?.nativeElement;
    window.addEventListener('resize', () => this.close());
  }

  public ngOnChanges(): void {
    this.updateItems();
  }

  public open(): void {
    this.isOpen = true;
    this.setPosition();
    this.opened.emit();
  }

  public close(): void {
    if (this.isOpen) {
      this.isOpen = false;
      this.clearPosition();
      this.closed.emit();
      this.itemsToDisplay.forEach(x => x.selected = false);
      this.selectionIndex = -1;
      this.havePressedKey = false;
    }
  }

  public toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  public updateItems(): void {
    const term = this.binding.value;
    if (!term || term.length < 1 || !this.havePressedKey) {
      this.itemsToDisplay = this.items || [];
    } else {
      this.itemsToDisplay = this.items.filter(x => x[this.displayExpr].toUpperCase().includes(term.toUpperCase())) || []
    }
  }

  public clear(): void {
    this.binding.reset()
    this.updateItems();
    this.value = null;
  }
  
  public setPosition(): void {
    if (!this.isOpen || !this.usePositioning) { return; }
    if (this.dropdownEl && this.contentEl) {
      this.positioning.setPosition_Parent(this.renderer, this.dropdownEl, this.contentEl)
    }
  }

  public clearPosition(): void {
    if (!this.usePositioning) { return; }
    if (this.dropdownEl && this.contentEl) {
      this.positioning.clearPosition(this.renderer, this.dropdownEl, this.contentEl);
    }
  }
  
  public addItem(): void {
    this.addRequested.emit(this.binding.value);
    this.itemsToDisplay = this.items || [];
    this.select(this.itemsToDisplay.find(x => x[this.displayExpr] === this.binding.value));
    this.close();
    this.tabHandler();
  }

  public select(item: any): void {
    console.log('select', item)
    if (!item || this.value === item) { return; }
    this.binding.set(item[this.displayExpr]);
    this.updateItems();
    this.value = item;
    this.close();
    this.input?.nativeElement?.focus();
  }
  
  
  
  public mouseenterHandler(item: any) {
    this.itemsToDisplay.forEach(x => x.selected = false);
    item.selected = true;
  }
  
  public mouseleaveHandler() {
    this.itemsToDisplay.forEach(x => x.selected = false);
  }

  public focusOutHandler(): void {
    this.close();
  }

  public keydownHandler(e: KeyboardEvent): void {
    this.havePressedKey = true;
    
    const key = e.key;

    if (e.key === 'Escape') {
      this.close();
    } else {
      if (!this.isOpen) { this.open(); }
      switch(key) {
        case 'ArrowDown':
          this.arrowDownHandler();
          break;
        case 'ArrowUp':
          this.arrowUpHandler();
          break;
        case 'Enter':
          this.enterHandler();
          break;
        case 'Tab':
          this.tabHandler();
          break;
        default:
          this.selectionIndex = -1
          break;
      }
    }
  }
  
  public arrowDownHandler(): void {
    this.navigating = true;
    if (!this.isOpen) { this.open(); }
    this.itemsToDisplay.forEach(x => x.selected = false);
    this.selectionIndex < this.itemsToDisplay.length - 1 ? this.selectionIndex++ : this.selectionIndex = 0;
    this.itemsToDisplay[this.selectionIndex] = { ...this.itemsToDisplay[this.selectionIndex], selected: true };
  }

  public arrowUpHandler(): void {
    this.navigating = true;
    if (!this.isOpen) { this.open(); }
    this.itemsToDisplay.forEach(x => x.selected = false);
    if (this.selectionIndex > 0) {
      this.selectionIndex--;
    } else {
      this.selectionIndex = this.itemsToDisplay.length - 1;
    }
    this.itemsToDisplay[this.selectionIndex] = { ...this.itemsToDisplay[this.selectionIndex], selected: true };
  }

  public enterHandler(): void {
    this.navigating = false;
    if (this.selectionIndex < 0) {
      this.addItem();
    } else {
      this.select(this.itemsToDisplay.find(x => x.selected === true));
    }
  }

  public tabHandler(): void {
    this.navigating = false;
    if (this.isOpen) {
      if (this.value) {
        if (isNullOrEmpty(this.binding.value)) {
          this.value = null;
        } else if (this.value[this.displayExpr] !== this.binding.value) {
          this.binding.set(this.value[this.displayExpr])
          this.updateItems();
        }
      } else {
        this.binding.reset();
      }
      this.close();
    }
    this.wrapper?.nativeElement?.blur();
  }
}
