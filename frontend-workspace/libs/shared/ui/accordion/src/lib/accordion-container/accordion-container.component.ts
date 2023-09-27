import { Nullable } from '@allmax-angular/shared/types';
import { AfterContentInit, ChangeDetectorRef, Component, ContentChildren, Input, OnDestroy, QueryList } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component';

@Component({
  selector: 'amx-accordion-container',
  templateUrl: './accordion-container.component.html',
  styleUrls: ['../accordion.theme.scss' ]
})
export class AccordionContainerComponent implements AfterContentInit, OnDestroy {
  @Input() public startingIndex = -1;
  @Input() public shouldSetScrollPosition = false;
  @Input() public topOffset = 37;

  @ContentChildren(AccordionPanelComponent) private panelsRef: Nullable<QueryList<AccordionPanelComponent>>;

  private readonly currentIndexSubject = new BehaviorSubject<number>(-1);
  public readonly currentIndex$ = this.currentIndexSubject.asObservable();
  private set currentIndex(payload: number) { this.currentIndexSubject.next(payload); }
  private get currentIndex(): number { return this.currentIndexSubject.getValue(); }

  private panels: AccordionPanelComponent[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  public ngAfterContentInit(): void {
    this.panels = this.panelsRef?.toArray() || [];
    this.panels.forEach((x, i) => {
      x.setIndex(i);
      x.setCB((index) => this.switchPanels(index));
    });
    this.switchPanels(this.startingIndex);
    this.cdr.detectChanges();
  }

  public ngOnDestroy(): void {
    this.cdr.detach();
  }

  public switchPanels(nextIndex: number): void {
    if (this.panels.length < 1 || nextIndex >= this.panels.length) {
      return;
    }
    this.panels.forEach(panel => panel.close());
    if (this.currentIndex === nextIndex) {
      this.currentIndex = -1;
    } else {
      this.currentIndex = nextIndex;
    }
    if (this.panels[this.currentIndex]) {
      this.panels[this.currentIndex].open();
    }

    if (this.shouldSetScrollPosition) {
      setTimeout(() => {
        window.scrollTo({ top: (this.currentIndex ? this.currentIndex : 0) * this.topOffset, left: 0, behavior: 'smooth' });
      }, 600);
    }
  }
}
