import { Nullable } from '@allmax-angular/shared/types';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'amx-switch',
  templateUrl: './switch.component.html',
  styleUrls: [ './switch.component.scss' ],
})
export class SwitchComponent implements OnInit {
  @Input() public values: [ string, string ] = [ 'left', 'right' ]
  @Input() public state = false;
  @Input() public onColor = 'var(--highlight-color)';
  @Input() public offColor = 'var(--disabled-color)';
  @Input() public size = 'var(--space-lg)';
  @Input() public type: 'buttons' | 'labels' = 'labels';
  @Output() public changed = new EventEmitter<any>();

  public selectedValue: Nullable<string>;

  public ngOnInit(): void {
    this.selectedValue = this.values[0];
  }

  public toggleChange(state: number): void {
    this.selectedValue = this.values[state];
    this.changed.emit(state);
  }
}
