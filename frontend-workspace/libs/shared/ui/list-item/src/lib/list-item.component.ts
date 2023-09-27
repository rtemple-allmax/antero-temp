import { Nullable } from '@allmax-angular/shared/types';
import { CrudButtonComponent } from '@allmax-angular/shared/ui/buttons/crud-button';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, EventEmitter, OnInit, Input, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'amx-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @ViewChild(CrudButtonComponent) public more: Nullable<CrudButtonComponent>;

  @Input() public record: any;
  @Input() public displayExpr = 'name';
  @Input() public allowEdit = true;
  @Input() public allowDelete = true;
  @Input() public label: Nullable<string>;

  @Output() public editRequested = new EventEmitter<any>();
  @Output() public deleteRequested = new EventEmitter<any>();

  public hovered = false;

  public icons = { ...allIcons };

  public items: any[] = [
    {
      text: 'Edit',
      icons: this.icons.editIcon,
      onItemClick: () => this.editHandler()
    },
    {
      text: 'Delete',
      icons: this.icons.deleteIcon,
      onItemClick: () => this.deleteHandler()
    },
  ];
  
  constructor(public el: ElementRef) { }

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
    this.editRequested.emit(this.record);
  }

  public deleteHandler(): void {
    this.deleteRequested.emit(this.record);
  }

  public scrollIntoView(): void {
    (this.el.nativeElement as HTMLDivElement).scrollIntoView({ block: 'end',  behavior: 'smooth' });
  }

  public closeMenu(): void {
    this.more?.close();
  }
}
