import { Anchors } from '@allmax-angular/shared/utils';
import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amx-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit, OnDestroy {
  @Input() public anchor: Anchors = Anchors.RIGHT;
  @Input() public zIndex = 'var(--layer-2)';
  @Input() public wrapperBgColor = 'transparent';
  @Input() public bgColor = 'var(--panel-bg-color)';
  @Input() public xOffset = '0';
  @Input() public yOffset = '0';
  @Input() public peek = '0';
  @Input() public width = '100%'
  @Input() public borderLeft = false;
  @Input() public borderRight = false;
  @Input() public height = 'calc(100vh - 56px)';

  @Output() public opened: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() public closed: EventEmitter<undefined> = new EventEmitter<undefined>();

  public visibility = false;
  public top = 'auto';
  public right = 'auto';
  public bottom = 'auto';
  public left = 'auto';
  public transform = 'none';

  public get isOpen(): boolean {
    return this.visibility;
  }

  public get closeBtnTransform(): string {
    return `rotate(${ this.anchor === Anchors.RIGHT ? 180 : 0 }deg)`;
  }
  
  public get closeBtnJustify(): string {
    return this.anchor === Anchors.RIGHT ? 'flex-start' : 'flex-end';
  }


  constructor(
    private cdr: ChangeDetectorRef,
    private location: Location
  ) { }

  public ngOnInit(): void {
    this.update();
    this.location.onUrlChange(() => this.close());
  }

  public ngOnDestroy(): void {
    this.cdr.detach();
  }

  public open(): void {
    if (!this.visibility) {
      this.visibility = true;
      this.update();
      this.opened.emit();
    }
  }

  public close(): void {
    if (this.visibility) {
      this.visibility = false;
      this.update();
      this.closed.emit();
    }
  }

  public toggle(): void {
    this.visibility = !this.visibility;
    this.update();
    if (this.visibility) {
      this.opened.emit();
    } else {
      this.closed.emit();
    }
  }

  public update(): void {
    switch (this.anchor) {
      case Anchors.BOTTOM:
        this.transform = this.visibility ? 'translateY(0)' : `translateY(calc(100% - ${ this.peek }))`;
        this.setPosition('auto', 'auto', this.yOffset, this.xOffset);
        break;
      case Anchors.LEFT:
        this.transform = this.visibility ? 'translateX(0)' : `translateX(calc(-100% + ${ this.peek }))`;
        this.setPosition(this.yOffset, 'auto', 'auto', this.xOffset);
        break;
      case Anchors.RIGHT:
        this.transform = this.visibility ? 'translateX(0)' : `translateX(calc(100% - ${ this.peek }))`;
        this.setPosition(this.yOffset, this.xOffset, 'auto', 'auto');
        break;
      case Anchors.TOP:
        this.transform = this.visibility ? 'translateY(0)' : `translateY(calc(-100% + ${ this.peek }))`;
        this.setPosition(this.yOffset, 'auto', 'auto', this.xOffset);
        break;
    }
    this.cdr.detectChanges();
  }

  public setPosition(t: string, r: string, b: string, l: string): void {
    this.top = t;
    this.right = r;
    this.bottom = b;
    this.left = l;
  }

  public preventBubble(e: Event): void {
    e.stopPropagation();
  }
}
