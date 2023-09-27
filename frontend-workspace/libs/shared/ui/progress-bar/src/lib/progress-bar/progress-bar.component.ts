import { Nullable } from '@allmax-angular/shared/types';
import { clamp, normalize } from '@allmax-angular/shared/utils';
import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'amx-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements AfterViewInit {
  @ViewChild('bar') public bar: Nullable<ElementRef>;

  @Input() public min = 0;
  @Input() public max = 0;
  @Input() public value = 0;
  
  public width = 0;
  private textWidth = 36;

  public get clamped(): number {
    return clamp(this.value, this.min, this.max);
  }
  
  public get normalized(): number {
    return normalize(this.clamped, this.min, this.max);
  }

  public get step(): number {
    return this.width / 100;
  }
  
  public get innerWidth(): string {
    return `calc(${ (this.normalized || 0) * 100 } * ${ this.step }px)`;
  }
  
  public get progressText(): string {
    return `${ ((this.normalized || 0) * 100).toFixed(0) }%`;
  }

  public get offset(): number {
    if (this.width > 0) {
      return Math.round((normalize(this.textWidth * .7, 0, this.width) + Number.EPSILON) * 100) / 100;
    }
    return 0;
  }

  public get textColor(): string {
    return this.normalized >= (1 - this.offset) ? 'white': 'black';
  }

  public get progressColor(): string {
    return this.normalized === 1 ? 'var(--msg-success)': '#5299C5';
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.width = (this.bar?.nativeElement as HTMLElement)?.clientWidth, 0);
  }
}
