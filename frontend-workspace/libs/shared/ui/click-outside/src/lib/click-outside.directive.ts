import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  constructor(private el: ElementRef) {}

  @Output() public clickOutside = new EventEmitter<undefined>();

  @HostListener('document:click', ['$event'])
  public onClick(event: Event) {
    if ((this.el.nativeElement as HTMLElement).contains(event.target as Node) === false) {
      this.clickOutside.emit();
    }
  }

  @HostListener('document:contextmenu', ['$event'])
  public onRightClick(event: Event) {
    if ((this.el.nativeElement as HTMLElement).contains(event.target as Node) === false) {
      this.clickOutside.emit();
    }
  }
}
