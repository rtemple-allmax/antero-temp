import { bindableProvider, FormfieldBaseComponent, Nullable, ObservableBinding, TableData } from '@allmax-angular/shared/types';
import { miscIcons, thickIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import DataSource from 'devextreme/data/data_source';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';

@Component({
  selector: 'amx-searchable-table-dropdown',
  templateUrl: './searchable-table-dropdown.component.html',
  providers: [ bindableProvider(SearchableTableDropdownComponent) ],
  styleUrls: [ './searchable-table-dropdown.component.scss' ],
})
export class SearchableTableDropdownComponent extends FormfieldBaseComponent<any> implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('wrapper') public wrapper: Nullable<ElementRef<HTMLDivElement>>;
  @ViewChild('content') public content: Nullable<ElementRef<HTMLDivElement>>;
  @ViewChild('dropdown') public dropdown: Nullable<ElementRef<HTMLDivElement>>;
  @ViewChild('input') public input: Nullable<ElementRef<HTMLInputElement>>
  @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>;

  @Input() public displayExpr = 'name';
  // @Input() public data: Nullable<DataSource>;
  @Input() public data: Nullable<TableData>;
  @Input() public template: Nullable<TemplateRef<any>>;
  @Input() public initialValue: any;
  @Input() public override placeholder = 'Type To Search...';

  @Output() public valueChanged = new EventEmitter<any>();
  @Output() public opened = new EventEmitter<undefined>();

  private wrapperEl: Nullable<HTMLDivElement>;
  private dropdownEl: Nullable<HTMLDivElement>;
  private contentEl: Nullable<HTMLDivElement>;

  public textBinding = new ObservableBinding<string>();
  public searchTerm = '';
  public isOpen = false;
  public hasValue = false;
  private havePressedKey = false; 

  public icons = { ...toolbarIcons, ...miscIcons, ...thickIcons };
  
  public override ngOnInit(): void {
    if (this.initialValue && this.value !== this.initialValue) {
      
      this.select(this.initialValue);
    }
    this.subs.push(this.textBinding.value$.subscribe(x => {
      if (x) {
        this.updateItems(x);
      } else {
        this.updateItems('');
      }
    }));
    this.value$.subscribe((x: any) => {
      this.hasValue = !!x;
      if (x && isNullOrEmpty(this.textBinding.value)) {
        this.textBinding.set((x[this.displayExpr]));
        this.searchTerm = '';
        this.updateItems('');
        this.hasValue = true;
      }
    });
  }
  
  public ngAfterViewInit(): void {
    this.contentEl = this.content?.nativeElement;
    this.dropdownEl = this.dropdown?.nativeElement;
    this.wrapperEl = this.wrapper?.nativeElement;
    document.addEventListener('scroll', () => this.setPosition());
    window.addEventListener('resize', () => this.close());
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.close();
    this.cdr.detach();
  }

  public toggle(): void {
    if (!this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }

  public open(): void {
    this.opened.emit();
    this.isOpen = true;
    // this.updateItems();
    this.setPosition(); 
  }

  public close(): void {
    this.clearPosition();
    this.searchTerm = '';
    this.isOpen = false;
  }

  public clickOutsideHandler(): void {
    this.close();
  }
  
  public select(item: any): void {
    const { data } = item;
    if (!data || (this.value && data?.id === this.value['id'])) { return; }
    this.textBinding.set(data[this.displayExpr]);
    this.searchTerm = '';
    // this.updateItems();
    this.value = data;
    this.close();
    this.input?.nativeElement?.focus();
  }
  
  public setPosition(): void {
    if (!this.isOpen) { return; }
    if (this.wrapperEl && this.contentEl) {
      this.positioning.setPosition_Parent(this.renderer, this.wrapperEl, this.contentEl);
    }
  }

  public clearPosition(): void {
    if (this.wrapperEl && this.contentEl) {
      this.positioning.clearPosition(this.renderer, this.wrapperEl, this.contentEl);
    }
  }

  public keydownHandler(e: KeyboardEvent): void {
    this.havePressedKey = true;
    const key = e.key;
    
    switch(key) {
      case 'ArrowDown':
      case 'ArrowUp':
        this.arrowHandler(key);
        break;
      case 'Enter':
        this.enterHandler();
        break;
      case 'Tab':
        this.tabHandler();
        break;
      default:
        break;
    }
  }

  public updateItems(term: string): void {
    if (this.havePressedKey) {
      this.table?.searchTermChangedHandler(term);
    }
  }
  
  public async arrowHandler(keyPressed: string): Promise<void> {
    if (!this.isOpen) {
      this.open();
    }
    const instance = this.table?.table?.instance;
    if (instance) {
      const selectedKeys = instance.getSelectedRowKeys();
    const pageSize = instance.pageSize();
      if (selectedKeys.length > 0 && pageSize > 0) {
        const currentIndex = instance.getRowIndexByKey(selectedKeys[0]);
        const nextIndex = keyPressed === 'ArrowUp' ? currentIndex - 1 : currentIndex + 1;
        if (nextIndex >= 0) {
          const rows: any[] = await instance.selectRowsByIndexes([nextIndex]);
          if (rows.length === 0) {
            instance.selectRowsByIndexes([nextIndex - 1]);
          } else {
            this.table?.scrollToRow(nextIndex); 
          }
        }
      }
    }
  }

  public tabHandler(): void {
    if (this.isOpen) {
      this.close();
    }
    this.wrapper?.nativeElement?.blur();
  }
  
  public enterHandler(): void {
    const instance = this.table?.table?.instance;
    if (instance) {
      
      const selectedData = instance.getSelectedRowsData();
      if (selectedData && selectedData.length === 1) {
        this.value = selectedData[0];
        this.searchTerm = '';
        if (this.value) {
          this.textBinding.set(this.value[this.displayExpr]);
        }
        this.close();
      }
    }
  }

  public clear(): void {
    this.searchTerm = '';
    this.updateItems('');
    this.textBinding.reset();
    this.value = null;
  }

  public rowClicked(e: any): void{
    console.log()
  }
}
