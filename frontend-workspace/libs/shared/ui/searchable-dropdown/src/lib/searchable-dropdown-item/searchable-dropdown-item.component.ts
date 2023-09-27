import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'amx-searchable-dropdown-item',
  templateUrl: './searchable-dropdown-item.component.html',
  styleUrls: ['./searchable-dropdown-item.component.scss'],
})
export class SearchableDropdownItemComponent implements OnChanges {
  @Input() public item: any;
  @Input() public displayExpr = 'name';
  @Input() public selected = false;

  @Output() public hoverIn: EventEmitter<any> = new EventEmitter<any>();
  @Output() public hoverOut: EventEmitter<any> = new EventEmitter<any>();

  @Output() public selectedChanged = new EventEmitter<any>();

  public selection$: Nullable<Observable<boolean>>;

  constructor(public el: ElementRef) { }

  public ngOnChanges(): void {
    if (this.item.selected) {
      this.scrollIntoView();
    }
  }
  
  public select(): void {
    this.selectedChanged.emit(this.item);
  }

  public mouseenterHandler(): void {
    this.hoverIn.emit(this.item)
  }

  public mouseleaveHandler(): void {
    this.hoverOut.emit(this.item)
  }

  public scrollIntoView(): void {
    (this.el.nativeElement as HTMLElement).scrollIntoView({ block: 'end', behavior: 'smooth' });
  }
}
