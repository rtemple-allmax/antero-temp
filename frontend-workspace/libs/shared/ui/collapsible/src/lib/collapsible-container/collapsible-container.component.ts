import { Component, AfterContentInit, OnDestroy, Input, ContentChildren, QueryList, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Nullable } from '@allmax-angular/shared/types';
import { CollapsibleItemComponent } from '../collapsible-item/collapsible-item.component';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { unsubscribe } from '@allmax-angular/shared/utils';

@Component({
  selector: 'amx-collapsible-container',
  templateUrl: './collapsible-container.component.html',
  styleUrls: ['./collapsible-container.component.scss'],
})
export class CollapsibleContainerComponent implements AfterContentInit, OnDestroy {
  @Input() public startingIndex = 0;
  @Input() public maxHeight = 'auto';
  @Input() public shouldSetScrollPosition = true;
  
  @ContentChildren(CollapsibleItemComponent) private itemsRef: Nullable<QueryList<CollapsibleItemComponent>>;

  private readonly currentIndexSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.startingIndex);
  public readonly currentIndex$: Observable<number> = this.currentIndexSubject.asObservable();
  public set currentIndex(payload: number) { this.currentIndexSubject.next(payload); }
  public get currentIndex(): number { return this.currentIndexSubject.getValue(); }

  private subs: Subscription[] = [];
  private items: CollapsibleItemComponent[] = [];

  private prevItemCount = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  public ngAfterContentInit(): void {
    this.setupItems(this.itemsRef);
    this.subs.push(this.currentIndex$.subscribe(x => {
      this.items.forEach(y => y.currentIndex = x);
    }))
    this.switchItems(this.startingIndex || 0);
    this.cdr.detectChanges();

    this.itemsRef?.changes.subscribe((q: QueryList<CollapsibleItemComponent>) => {
      if (this.items.length < q.toArray().length) {
        const lastItem = q.last;
        if (lastItem) {
          lastItem.scrollIntoView();
        }
      }
      this.setupItems(q)
      
    })
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
    this.cdr.detach();
  }

  public switchItems(nextIndex: number): void {
    if (this.items.length < 1 || nextIndex >= this.items.length) {
      return;
    }
    // this.items.forEach(item => item.close());
    if (this.currentIndex >= 0 && this.currentIndex === nextIndex) {
      this.currentIndex = -1;
    } else {
      this.currentIndex = nextIndex;
      if (this.items[this.currentIndex]) {
        this.items[this.currentIndex].open();
      }
    }
  }

  public getItemAt(index: number): Nullable<CollapsibleItemComponent> {
    if (this.items && this.items.length > index) {
      return this.items[index];
    }
    return null;
  }

  public setupItems(ref: Nullable<QueryList<CollapsibleItemComponent>>): void {
    this.prevItemCount = this.items.length;
    this.items = ref?.toArray() || [];
    this.items.forEach((x, i) => {
      x.setIndex(i);
      x.setCB((index: number) => this.switchItems(index));
    });
  }
}
