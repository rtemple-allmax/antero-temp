import { Nullable } from '@allmax-angular/shared/types';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'amx-read-only-box',
  templateUrl: './read-only-box.component.html',
  styleUrls: ['./read-only-box.component.scss'],
})
export class ReadOnlyBoxComponent {
  @Input() public inline = false;
  @Input() public label: Nullable<string>;
  @Input() public labelIsBold = false;
  @Input() public showDot = false;
  @Input() public dotColor = 'black';
  @Input() public showPopover = false;
  @Input() public popoverTemplate: Nullable<TemplateRef<any>>;
  @Input() public preline = false;

  @Output() public clicked = new EventEmitter<any>();
  @Output() public rightClicked = new EventEmitter<any>();

  public get dotStyles(): any {
    return { 'background-color': this.dotColor };
  }

  public clickHandler(e: Event): void {
    e.stopPropagation();
    this.clicked.emit();
  }

  public rightClickHandler(e: Event): void {
    e.preventDefault();
    this.rightClicked.emit();
  }
}
