import { AmxWindowComponent, WindowTypes } from '@allmax-angular/shared/types';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { guid } from '@allmax-angular/shared/utils';
import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'amx-modal',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent extends AmxWindowComponent implements OnInit, OnDestroy {
  @Input() public bgColor = 'var(--base-bg-color)';

  public icons = { ...toolbarIcons };

  constructor(
    private cdr: ChangeDetectorRef,
    private location: Location,
  ) { super(); }

  public ngOnInit(): void {
    this.type = WindowTypes.MODAL;
    this.key = guid();
    this.open();
    this.unregisterUrlChangeListener = this.location.onUrlChange(() => this.close())
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
    this.cdr.detectChanges();
  }
}
