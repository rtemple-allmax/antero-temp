import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({ selector: '[amxFlexChild]' })
export class FlexChildDirective implements OnInit {
  @Input('amxFlexChild') public flex = '1';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  public ngOnInit(): void {
    if (this.el?.nativeElement) {
      this.renderer.setStyle(this.el.nativeElement, 'flex', this.flex);
    }
  }
}