import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { guid } from '@allmax-angular/shared/utils'
import { CollapsibleWindowService } from './collapsible-window.service';
import { Location } from '@angular/common';
import { AmxWindowComponent, WindowTypes } from '@allmax-angular/shared/types';

@Component({
  selector: 'amx-collapsible-window',
  templateUrl: './collapsible-window.component.html',
  styleUrls: ['./collapsible-window.component.scss'],
})
export class CollapsibleWindowComponent extends AmxWindowComponent implements OnInit, OnDestroy {
  @Output() public minimized: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() public maximized: EventEmitter<undefined> = new EventEmitter<undefined>();
  
  public isMinimized = false;
  public top = '50%';
  public left = '50%';
  public transform = 'translate(-50%, -50%)';
  
  constructor(
    private cdr: ChangeDetectorRef,
    private location: Location,
    private collapsibleService: CollapsibleWindowService
  ) { super(); }

  public ngOnInit(): void {
    this.type = WindowTypes.COLLAPSIBLE;
    this.key = guid();
    this.unregisterUrlChangeListener = this.location.onUrlChange(() => this.close())
    this.open();
  }

  public ngOnDestroy(): void {
    this.cdr.detach();
    if (this.unregisterUrlChangeListener) {
      this.unregisterUrlChangeListener();
    }
  }

  public override open(): void {
    this.visibility = true;
    this.opened.emit();
    this.cdr.detectChanges();
  }

  public override close(): void {
    this.visibility = false;
    this.closed.emit();
    this.collapsibleService.removePrevious(this);
    this.cdr.detectChanges();
  }

  public stopPropagation(e: Event): void {
    e.stopPropagation();
  }

  public toggleMinimize(): void {
    if (this.isMinimized) {
      this.collapsibleService.deregisterWindow(this);
      this.isMinimized = false;
    } else {
      this.collapsibleService.registerWindow(this)
      this.isMinimized = true;
    }
  }
}
