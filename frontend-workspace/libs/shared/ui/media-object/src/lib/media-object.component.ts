import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amx-media-object',
  templateUrl: './media-object.component.html',
  styles: [],
})
export class MediaObjectComponent {
  @Input() public src: Nullable<string>;
  @Input() public heading: Nullable<string>;
  @Input() public subheading: Nullable<string> = '';
  @Input() public text: Nullable<string>;
  @Input() public isLink = false;
  @Input() public listItem = false;

  @Output() public clicked = new EventEmitter<undefined>();
  @Output() public avatarSelected = new EventEmitter<File>();

  public clickHandler(): void {
    this.clicked.emit();
  }

  public filesSelectedHandler(files: File[]): void {
    if (files.length > 0) {
      this.avatarSelected.emit(files[0]);
    }
  }
}
