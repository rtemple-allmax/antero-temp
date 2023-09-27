import { Nullable } from '@allmax-angular/shared/types';
import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'amx-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss'],
})
export class SeparatorComponent implements AfterViewInit {
  @ViewChild('wrapper') public wrapper: Nullable<ElementRef<HTMLDivElement>>;
  @ViewChild('element') public element: Nullable<ElementRef<HTMLDivElement>>;
  
  @Input() public space = 'var(--space-md)';
  @Input() public color = 'var(--fg-color)';
  @Input() public orientation = 'horizontal';

  constructor(private renderer: Renderer2) { }

  public ngAfterViewInit(): void {
    if (this.wrapper?.nativeElement && this.element?.nativeElement) {
      if (this.orientation === 'horizontal') {
        this.renderer.setStyle(this.element.nativeElement, 'height', '1px');
        this.renderer.setStyle(this.element.nativeElement, 'width', '100%')
        this.renderer.setStyle(this.wrapper.nativeElement, 'padding', `${ this.space } 0`);
      } else {
        this.renderer.setStyle(this.element.nativeElement, 'height', '100%');
        this.renderer.setStyle(this.element.nativeElement, 'width', '1px')
        this.renderer.setStyle(this.wrapper.nativeElement, 'padding', `0 ${ this.space }`);
      }
      this.renderer.setStyle(this.element.nativeElement, 'background-color', this.color);
    }
    
  }
}
