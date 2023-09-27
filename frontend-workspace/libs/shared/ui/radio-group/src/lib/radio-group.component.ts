import { Nullable } from '@allmax-angular/shared/types';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amx-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent implements OnInit {
  @Input() public items: string[] = [];
  
  @Output() public changed = new EventEmitter<string>();

  public value: Nullable<string>;

  public ngOnInit(): void {
    if (this.items.length > 0) {
      this.value = this.items[0];
    }
  }

  public changeHandler(e: any): void {
    this.changed.emit(e.value);
  }
}
