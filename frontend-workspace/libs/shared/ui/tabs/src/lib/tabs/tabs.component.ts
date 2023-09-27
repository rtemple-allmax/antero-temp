import { Nullable } from '@allmax-angular/shared/types';
import { CollapsibleWindowModule } from '@allmax-angular/shared/ui/collapsible-window';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { TabButtonComponent } from '../tab-button/tab-button.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'amx-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  @ViewChild('container', { read: ElementRef }) public containerRef: Nullable<ElementRef<HTMLDivElement>>;
  @ContentChildren(TabComponent) public panelsRef: Nullable<QueryList<TabComponent>>;
  @ViewChildren(TabButtonComponent) public buttonsRef: Nullable<QueryList<TabButtonComponent>>;

  private readonly currentIndexSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public readonly currentIndex$: Observable<number> = this.currentIndexSubject.asObservable();
  public get currentIndex(): number { return this.currentIndexSubject.getValue(); }
  
  @Input() public set currentIndex(payload: number) { this.currentIndexSubject.next(payload); }
  @Input() public minWidth = '0';
  @Input() public height = 'auto';
  @Input() public width = '100%';
  @Input() public orientation = 'vertical';
  @Input() public stretch = false;
  @Input() public styleType: 'bg' | 'underline' = 'bg';
  @Input() public disabled = false;
  @Input() public overlayText = '';

  @Output() public tabChanged: EventEmitter<number> = new EventEmitter<number>();

  public label: Nullable<string> = null;
  public panels: TabComponent[] = [];
  public buttons: TabButtonComponent[] = [];
  private previousIndex = -1;
  private subs: Subscription[] = [];

  public get nativeElement(): Nullable<HTMLDivElement> {
    if (this.containerRef && this.containerRef.nativeElement) {
      return this.containerRef.nativeElement;
    }
    return null;
  }
  
  constructor(private cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    window.addEventListener('resize', () => this.resizeHandler());
  }

  public ngAfterContentInit(): void {
    this.panels = this.panelsRef?.toArray() || [];
    if (this.panels.length > 0) {
      this.panels[0].open();
      this.label = this.panels[0].label;
    }
    const panelsSub = this.panelsRef?.changes.subscribe(panels => {
      this.panels = panels;
      this.label = this.panels[0]?.label;
      this.panels[0]?.open();
    });
    if (panelsSub) {
      this.subs.push(panelsSub);
    }
    this.cdr.detectChanges();
  }

  public ngAfterViewInit(): void {
    this.buttons = this.buttonsRef?.toArray() || [];
    this.buttonsRef?.changes.subscribe(q => this.buttons = q.toArray());
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
    this.cdr.detach();
  }

  public resizeHandler(): void {
    // console.log('resize')
    // const containerWidth = (this.nativeElement as HTMLElement)?.getBoundingClientRect().width
    // let totalButtonWidth = this.buttons.reduce((sum, { collapsed, width }: { width: number, collapsed: boolean }) => sum + (collapsed ? width : 0), 0);

    // while(totalButtonWidth >= containerWidth - 20) {
    //   const button = this.buttons[this.findLastIndex(this.buttons, 'collapsed', false)];
    //   console.log('button', button)
    //   if (button) {
    //     button.collapsed = true;
    //     totalButtonWidth -= button.width;
    //   }

    //   // if we get here it went wronmg
    //   console.log('while fell through');
    //   totalButtonWidth = 0;
    // }

    // console.log('buttons', this.buttons)
  }

  public changeToPanel(index: number, e?: Event): void {
    e?.stopPropagation();
    
    if (this.currentIndex === index) { return; }

    this.currentIndex = index;

    const panels = this.panelsRef?.toArray() || [];
    panels.forEach(p => p.close());
    if (panels.length > index) {
      panels[index].open();
      this.label = panels[index].label;
      if (this.currentIndex !== this.previousIndex) {
        this.tabChanged.emit(index);
      }
      this.previousIndex = index;
    }
    this.cdr.detectChanges();
  }

  private findLastIndex(array: any[], key: string, val: any) {
    const index = array.slice().reverse().findIndex(x => x[key] === val);
    const count = array.length - 1
    return index >= 0 ? count - index : index;
  }

  public preventBubble(e: Event): void {
    e.stopPropagation();
    document.dispatchEvent(new Event('click', { bubbles: false }));
  }
}
