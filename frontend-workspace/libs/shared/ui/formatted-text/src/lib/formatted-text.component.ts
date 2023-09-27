import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'amx-formatted-text',
  templateUrl: './formatted-text.component.html',
  styles: [],
})
export class FormattedTextComponent {
  @Input() public text = '';
  @Input() public maxHeight = '30vh';

  @Output() public brokenLink: EventEmitter<string> = new EventEmitter<string>();

  public handleNestedLinks(e: Event): void {
    e.preventDefault();
    const targets = e.composedPath();
    for (const target of targets) {
      const tN = target as Node;
      if (tN.nodeName === 'A') {
        const href = (tN as HTMLLinkElement).getAttribute('href');
        if (href?.startsWith('file://')) {
          const substr = href.substr(8);
          if (!isNullOrEmpty(substr)) {
            this.brokenLink.emit(substr);
          }
          break;
        } else if (!href?.startsWith('http://') && !href?.startsWith('https://')) {
          const path = `http://${ href }`;
          window.open(path, '_blank');
          break;
        } else {
          window.open(href, '_blank');
          break;
        }
      }
    }
  }
}
