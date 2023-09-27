import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'amx-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: [ './search-box.component.scss' ],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @ViewChild('input') public input:  Nullable<ElementRef<HTMLInputElement>>;

  @Output() public searchTermChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() public downArrowClicked: EventEmitter<any> = new EventEmitter<any>();

  private subs: Subscription[] = [];

  public icons = { ...allIcons };
  public valueBinding: ObservableBinding<string> = new ObservableBinding<string>();

  public ngOnInit(): void {
    this.subs.push(this.valueBinding.value$.subscribe(x => this.searchTermChanged.emit(x || '')))
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public keydownHandler(e: KeyboardEvent): any {
    if (e.key === 'ArrowDown') {
      this.downArrowClicked.emit();
      return false;
    }
  }
  
  public focus(): void {
    if (this.input?.nativeElement) {
      (this.input.nativeElement as HTMLElement).focus();
    }
  }

  public blur(): void {
    if (this.input?.nativeElement) {
      (this.input.nativeElement as HTMLElement).blur();
    }
  }
  
  public clear(): void {
    this.valueBinding.reset();
  }
}
    