import { Component, Input, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import Sortable from 'sortablejs';
import { Nullable } from '@allmax-angular/shared/types'

@Component({
  selector: 'amx-layout-panel-container',
  templateUrl: './layout-panel-container.component.html',
  styleUrls: ['./layout-panel-container.component.scss'],
})
export class LayoutPanelContainerComponent implements AfterViewInit {
  @ViewChild('sortable') public el: Nullable<ElementRef<HTMLDivElement>>;

  @Input() public columns = '1fr';
  @Input() public masonry = false;

  @Output() public orderChanged = new EventEmitter<string[]>();
  @Output() public indexChanged = new EventEmitter<{ old: number, new: number}>();

  public sorter: Nullable<Sortable>;
  
  public ngAfterViewInit(): void {
    if (this.el?.nativeElement) {
      this.sorter = Sortable.create(
        this.el.nativeElement,
        { 
          animation: 350,
          handle: '.drag-handle',
          forceFallback: true, 
          onEnd: (e) => this.update(e),
        }
      );
    }
  }
  
  public sort(order: string[]): void {
    if (this.sorter) {
      this.sorter.sort(order);
    }
  }

  public update(e: any): void {
    console.log('sorter update', e);
    if (this.sorter) {
      this.orderChanged.emit(this.sorter.toArray());
    }
    this.indexChanged.emit({ old: e.oldIndex, new: e.newIndex });
  }
}
