import { Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { guid } from '@allmax-angular/shared/utils';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DxContextMenuComponent } from 'devextreme-angular';

@Component({
  selector: 'amx-crud-button',
  templateUrl: './crud-button.component.html',
  styleUrls: ['./crud-button.component.scss'],
})
export class CrudButtonComponent implements OnInit {
  @ViewChild(DxContextMenuComponent) public menu: Nullable<DxContextMenuComponent>;

  @Input() public allowAdding = false;
  @Input() public allowEditing = false;
  @Input() public allowDeleting = false;
  @Input() public tooltip = '';
  @Input() public tabIndex = -1;
  @Input() public iconHeight = '20px';
  @Input() public opacity = 1;
  @Input() public shouldDisable = false;

  @Output() public clicked = new EventEmitter();
  @Output() public addRequested = new EventEmitter();
  @Output() public editRequested = new EventEmitter();
  @Output() public deleteRequested = new EventEmitter();

  public id = `crud-btn-${ guid() }`
  public target = `#${ this.id }`;

  public items: any[] = []

  private icons = { ...allIcons };
  private hovered = false;
  public icon: any;
  public visibility = false;

  public get disabled(): boolean {
    return this.shouldDisable;
  }

  public get addOnly(): boolean {
    return this.allowAdding && !this.allowEditing && !this.allowDeleting;
  }

  public get editOnly(): boolean {
    return !this.allowAdding && this.allowEditing && !this.allowDeleting;
  }

  public get deleteOnly(): boolean {
    return !this.allowAdding && !this.allowEditing && this.allowDeleting;
  }

  public ngOnInit(): void {
    if (this.addOnly) {
      this.icon = this.icons.addIcon;
    } else if (this.editOnly) {
      this.icon = this.icons.editIcon;
    } else if (this.deleteOnly) {
      this.icon = this.icons.deleteIcon;
    } else {
      this.icon = this.icons.moreIcon;
      if (this.allowAdding) {
        this.items.push({ text: 'Add', icon: this.icons.addIcon, disabled: false, danger: false, onItemClick: () => this.addHandler() });
      }
      if (this.allowEditing) {
        this.items.push({ text: 'Edit', icon: this.icons.editIcon, disabled: false, danger: false, onItemClick: () => this.editHandler() });
      }
      if (this.allowDeleting) {
        this.items.push({ text: 'Delete', icon: this.icons.deleteIcon, disabled: false, danger: true, onItemClick: () => this.deleteHandler() });
      }
    }
  }

  public clickHandler(e: Event): void {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    if (this.addOnly) {
      this.addRequested.emit();
    } else if (this.editOnly) {
      this.editRequested.emit();
    } else if (this.deleteOnly) {
      this.deleteRequested.emit();
    } else {
      this.open();
    }
  }

  public itemClickHandler(e: any): void {
    e.itemData.onItemClick();
  }

  public clickOutsideHandler(): void {
    this.close();
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

  public addHandler(): void {
    this.addRequested.emit();
  }

  public editHandler(): void {
    this.editRequested.emit();
  }

  public deleteHandler(): void {
    this.deleteRequested.emit();
  }

  public open(): void {
    this.menu?.instance?.show();
  }

  public close(): void {
    this.menu?.instance?.hide();
  }
}
