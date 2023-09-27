import { Nullable } from '@allmax-angular/shared/types';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amx-scroll-box',
  templateUrl: './scroll-box.component.html',
  styleUrls: ['./scroll-box.component.scss'],
})
export class ScrollBoxComponent {
  @Input() public maxHeight = 'auto';

  @Output() public scrolled = new EventEmitter<undefined>();
  
  constructor(private el: ElementRef) { }

  public scrollHandler(): void {
    this.scrolled.emit()
  }
}
