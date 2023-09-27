import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'amx-image',
  templateUrl: './image.component.html',
  styles: [`
    .image {
      width: 100%;
      height: auto;
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  `],
})
export class ImageComponent {
  @Input() public src: Nullable<string>;
  @Input() public maxWidth = '100%';

  public getThumbUrl(): string {
    if (this.src) {
      return this.src;
    }
    return '';
  }
}
