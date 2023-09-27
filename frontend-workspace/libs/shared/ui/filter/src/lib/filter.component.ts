import { bindableProvider, FormfieldBaseComponent, Nullable } from '@allmax-angular/shared/types';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, Input, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, OnInit, OnDestroy } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Subscription } from 'rxjs';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'amx-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [ bindableProvider(FilterComponent) ]
})
export class FilterComponent extends FormfieldBaseComponent<any> implements OnInit, AfterViewInit {
  @ViewChildren(DataTableComponent) public tableQuery: Nullable<QueryList<DataTableComponent>>;
  @ViewChild('wrapper') public wrapper: Nullable<ElementRef<HTMLDivElement>>;
  @ViewChild('content') public content: Nullable<ElementRef<HTMLDivElement>>;

  @Input() public override label = '';
  @Input() public icon: any = null;
  @Input() public items: any[] = [];
  @Input() public origin: 'left' | 'right' = 'left';
  @Input() public width = '300px';
  @Input() public displayExpr = 'name';
  @Input() public keyExpr = 'id';
  @Input() public selectionMode = 'single';

  public isOpen = false;
  public data: Nullable<DataSource>

  private wrapperEl: Nullable<HTMLDivElement>;
  private contentEl: Nullable<HTMLDivElement>;
  private table: Nullable<DataTableComponent>;


  public get cols(): any[] {
    return [ { dataField: this.displayExpr, visible: true }]
  }

  public get uiLabel(): string {
    if (this.value) {
      return this.value[this.displayExpr]
    } else {
      return this.label;
    }
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.data = this.createDataSource();
  }

  public ngAfterViewInit(): void {
    this.wrapperEl = this.wrapper?.nativeElement;
    this.contentEl = this.content?.nativeElement;

    if (this.tableQuery) {
      this.subs.push(this.tableQuery?.changes.subscribe(q => {
        this.table = q.first;
        if (this.value) {
          this.table?.selectByIDs([ this.value[ this.keyExpr ] ])
        }
      }))
    }

    document.addEventListener('scroll', () => this.setPosition());
    window.addEventListener('resize', () => this.close());
  }
  
  public select(data: any): void {
    this.value = data;
  } 

  public clearedHandler(): void {
    this.table?.deselectAll();
  }

  public toggle(): void {
    this.isOpen ? this.close() : this.open();
  }

  public open(): void {
    if (this.isOpen) { return; }
    this.isOpen = true;
    this.setPosition();
  }

  public close(): void {
    if (!this.isOpen) { return; } 
    this.isOpen = false;
    this.clearPosition();
  }

  public setPosition(): void {
    if (!this.isOpen) { return; }
    if (this.wrapperEl && this.contentEl) {
      this.positioning.setPosition_Parent(this.renderer, this.wrapperEl, this.contentEl)
    }
  }

  public clearPosition(): void {
    if (this.wrapperEl && this.contentEl) {
      this.positioning.clearPosition(this.renderer, this.wrapperEl, this.contentEl);
    }
  }

  public preventBubble(e: Event): void {
    e.stopPropagation();
  }

  public createDataSource(): DataSource {
    return new DataSource({
      store: new ArrayStore({
        key: this.keyExpr,
        data: this.items
      })
    });
  }
}
