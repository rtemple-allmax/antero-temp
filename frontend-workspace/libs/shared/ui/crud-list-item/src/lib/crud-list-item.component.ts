import { Component, Input } from '@angular/core';

@Component({
  selector: 'amx-crud-list-item',
  templateUrl: './crud-list-item.component.html',
  styleUrls: ['./crud-list-item.component.scss'],
})
export class CrudListItemComponent {
  @Input() allowEditing = true;
  @Input() allowDeleting = true;

  public editing = false;
  public deleting = false;
  public hovered = false;

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

  public editHandler(): void {
    if (this.allowEditing) {
      this.editing = true;
    }
  }

  public deleteHandler(): void {
    if (this.allowDeleting) {
      this.deleting = true;
    }
  }

  public reset(): void {
    this.editing = false;
    this.deleting = false;
  }
}
