import { Injectable, Renderer2 } from "@angular/core";

interface StyleProp {
  name: string;
  val: any;
}

@Injectable({ providedIn: 'root' })
export class PositioningService {
  private edgeOffset = 12;
  private coverID = 'positioning-cover';
  private coverEl: HTMLDivElement | null = null;
  private index = -1;

  // Sets position of content element based on the position of the container element in screenspace prefering to appear below
  public setPosition_Parent(renderer: Renderer2, containerEl: HTMLDivElement, contentEl: HTMLDivElement, index: number = -1): void {
    if (!renderer || !containerEl || !contentEl) { return; }
    
    const containerRect = containerEl.getBoundingClientRect();
    const contentRect = contentEl.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    this.index = index;

    this.createCover(renderer);
    const tbProp = this.calculateTopAndBottom(containerRect, contentRect, windowHeight);
    const lrProp = this.calculateLeftAndRight(containerRect, contentRect, windowWidth);
    
    renderer.setStyle(contentEl, 'position', 'absolute');
    renderer.setStyle(contentEl, 'width', `${ containerRect.width }px`);
    renderer.setStyle(contentEl, tbProp.name, tbProp.val);
    renderer.setStyle(contentEl, lrProp.name, lrProp.val);
    renderer.appendChild(this.coverEl, contentEl);
  }

  // Sets position of the content element based on its own position in screenspace.
  public setPosition_Self(renderer: Renderer2, el: HTMLDivElement, index: number = -1): void {
    if (!renderer || !el) { return; }

    this.index = index;
    
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    this.createCover(renderer);

    const tbProp = this.calculateTopAndBottom(null, rect, windowHeight);
    const lrProp = this.calculateLeftAndRight(null, rect, windowWidth);

    renderer.setStyle(el, 'position', 'absolute');
    renderer.setStyle(el, 'width', `${ rect.width }px`);
    renderer.setStyle(el, tbProp.name, tbProp.val);
    renderer.setStyle(el, lrProp.name, lrProp.val);
    renderer.appendChild(this.coverEl, el);
  }

  //Set position of content element based on viewport units with option to center the element on that position
  public setPosition_Viewport(renderer: Renderer2, el: HTMLDivElement, vw: string, vh: string, center: boolean, index: number = -1) {
    if (!renderer || !el) { return; }

    this.index = index;
    
    const rect = el.getBoundingClientRect();

    this.createCover(renderer);

    renderer.setStyle(el, 'position', 'absolute');
    renderer.setStyle(el, 'width', `${ rect.width }px`);
    renderer.setStyle(el, 'top', vh);
    renderer.setStyle(el, 'left', vw);

    if (center) {
      renderer.setStyle(el, 'transform', 'translate(-50%, -50%)');
    }

    renderer.appendChild(this.coverEl, el);
  }

  // Returns the content element to its original position and adds it the container elements children
  public clearPosition(renderer: Renderer2, containerEl: HTMLDivElement, contentEl: HTMLDivElement): void {
    // renderer.setStyle(containerEl, 'height', 'auto')
    renderer.setStyle(contentEl, 'position', 'static');
    renderer.setStyle(contentEl, 'top', 'unset');
    renderer.setStyle(contentEl, 'bottom', 'unset');
    renderer.setStyle(contentEl, 'left', 'unset');
    renderer.setStyle(contentEl, 'right', 'unset');
    renderer.setStyle(contentEl, 'width', '100%');
    renderer.setStyle(contentEl, 'transform', 'unset')

    // if (this.index >= 0) {
    //   renderer.insertBefore(containerEl, contentEl, containerEl.children[this.index])
    // } else {
      renderer.appendChild(containerEl, contentEl);
    // }

    if (this.coverEl) {
      this.coverEl.remove();
      this.coverEl = null;
    }
    this.index = -1;
  }

  //Creates the overlay that will be the parent for content elements that are positioned.
  private createCover(renderer: Renderer2): void {
    if (this.coverEl) { return; }
    this.coverEl = document.createElement('div');

    renderer.setAttribute(this.coverEl, 'id', this.coverID)

    this.coverEl.addEventListener('click', (e: Event) => {
      e.stopPropagation();
      document.dispatchEvent(new Event('click', { bubbles: false }));
    })

    renderer.appendChild(document.body, this.coverEl);

    renderer.setStyle(this.coverEl, 'position', 'fixed');
    // renderer.setStyle(this.coverEl, 'background', 'rgba(0, 0, 0, .3)')
    renderer.setStyle(this.coverEl, 'top', 0);
    renderer.setStyle(this.coverEl, 'right', 0);
    renderer.setStyle(this.coverEl, 'bottom', 0);
    renderer.setStyle(this.coverEl, 'left', 0);
    renderer.setStyle(this.coverEl, 'z-index', 10000);
  }

  // Calculates the top or bottom value of the content element while keeping it on screen.
  private calculateTopAndBottom(containerRect: DOMRect | null, contentRect: DOMRect, windowHeight: number): StyleProp {
    const prop: StyleProp = {name: '', val: ''};

    if (!containerRect && contentRect) {
      if ((contentRect.top + contentRect.height) > (windowHeight - this.edgeOffset)) {
        prop.name = 'bottom'
        prop.val =  `${contentRect.bottom }px`
      } else {
        prop.name = 'top';
        prop.val = `${ contentRect.top }px`
      }
    } else if (contentRect && containerRect) {
      console.log('has container', { contentRect, containerRect, windowHeight})
      if ((containerRect.bottom + 300) > (windowHeight - this.edgeOffset)) {
        prop.name = 'top'
        prop.val =  `${containerRect.top - 316 }px`
        console.log('dropdown should appear above')
      } else {
        prop.name = 'top';
        prop.val = `${ containerRect.bottom }px`
      }
    }

    return prop;
  }

  // Calculates the left or right value of the content element while keeping it on screen.
  private calculateLeftAndRight(containerRect: DOMRect | null, contentRect: DOMRect, windowWidth: number): StyleProp {
    const prop: StyleProp = {name: '', val: ''};

    if (!containerRect && contentRect) {
      if ((contentRect.left + contentRect.width) > (windowWidth - this.edgeOffset)) {
        prop.name = 'right'
        prop.val = `${windowWidth - contentRect.right }px`
      } else {
        prop.name = 'left';
        prop.val = `${ contentRect.left }px`
      }
    } else if (contentRect && containerRect) {
      if ((containerRect.left + contentRect.width) > (windowWidth - this.edgeOffset)) {
        prop.name = 'right'
        prop.val = `${windowWidth - containerRect.right }px`
      } else {
        prop.name = 'left';
        prop.val = `${ containerRect.left }px`
      }
    }

    return prop;
  }
}