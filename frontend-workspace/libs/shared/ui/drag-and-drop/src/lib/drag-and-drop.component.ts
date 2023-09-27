import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, TemplateRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'amx-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styles: [`
    .drag-container {
      border: 8px solid #bbb;
    }

    .drag-container:hover {
    border-color: var(--highlight-color); 
    }

    .drag-container.dragging {
      border-color: var(--highlight-color); 
    }

    .drag-container.primary {
      border-color: var(--selected-color);
    }
  `],
})
export class DragAndDropComponent {
  @Input() public items: any[] = [];
  @Input() public direction: 'horizontal' | 'vertical' = 'horizontal';
  @Input() public numItemsWide = 1;
  @Input() public gap = 'var(--space-md)';
  @Input() public template: Nullable<TemplateRef<any>>;

  @Output() public orderChanged: EventEmitter<any[]> = new EventEmitter<any[]>()

  public draggingIndex = -1;
  public dragging = false;

  public get columns(): string {
    return `repeat(${ this.numItemsWide }, 1fr)`;
  }

  public onDragStart(index: number): void {
    this.draggingIndex = index;
  }

  public onDragOver(index: number): void {
    if (this.draggingIndex >= 0 && this.draggingIndex !== index) {
      this.reorderItem(this.draggingIndex, index);
    }
  }

  public onDragEnd(index: number): void {
    if (this.draggingIndex >= 0 && this.draggingIndex !== index) {
      this.reorderItem(this.draggingIndex, index);
    }
    this.draggingIndex = -1;
  }

  private reorderItem(fromIndex: number, toIndex: number): void {
    const itemsToReOrder = [ ...this.items ];
    const itemToBeReordered = itemsToReOrder.splice(fromIndex, 1)[0];
    itemsToReOrder.splice(toIndex, 0, itemToBeReordered);
    this.draggingIndex = toIndex;
    itemsToReOrder.forEach((x, i) => x.order = i);
    this.items = itemsToReOrder;
    this.orderChanged.emit(itemsToReOrder);
  }
}
