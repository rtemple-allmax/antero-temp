import { Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, Input, Output, EventEmitter, ElementRef, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'amx-collapsible-item',
  templateUrl: './collapsible-item.component.html',
  styleUrls: ['./collapsible-item.component.scss'],
})
export class CollapsibleItemComponent implements OnInit, OnDestroy {
  @Input() public label = '';
  @Input() public indicators: string[] = [];
  @Input() public padding = '0';
  @Input() public openInitially = false;

  public icons = { ...allIcons };

  @Output() public opened: EventEmitter<number> = new EventEmitter<number>();
  @Output() public closed: EventEmitter<number> = new EventEmitter<number>();
  
  public collapsed = true;
  public currentIndex = -1;
  public index = -1;
  private cb: undefined | ((val: number) => void)  = undefined;

  public get iconTransform(): string {
    return this.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
  }

  public showContent(): boolean {
    return this.currentIndex >= 0 && this.index >= 0 && this.currentIndex === this.index;
  }

  constructor(public el: ElementRef, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    if (this.openInitially) {
      this.open();
    }
  }

  public ngOnDestroy(): void {
    this.cdr.detach()
  }

  public setIndex(index: number): void {
    this.index = index;
  }

  public setCB(cb: (val: number) => void): void {
    this.cb = cb;
  }
  
  public toggle(): void {
    this.collapsed ? this.open() : this.close();
  }

  public handleCB(): void {
    if (this.cb && this.index >= 0) {
      this.cb(this.index)
    }
  }

  public open(): void {
    this.collapsed = false;
    this.opened.emit();
    setTimeout(() => this.scrollIntoView(), 0);
  }

  public close(): void {
    this.collapsed = true;
    this.closed.emit();
  }

  public scrollIntoView(): void {
    console.log('collapsible item should scroll into view');
    (this.el.nativeElement as HTMLDivElement).scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }
}
