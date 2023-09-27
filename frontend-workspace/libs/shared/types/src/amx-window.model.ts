import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({ template: '' })
export abstract class AmxWindowComponent {
  @Input() public heading = '';
  @Input() public zIndex = 'var(--layer-2)';
  @Input() public overflow = 'hidden';
  @Input() public icon: string | null = null;
  @Input() public iconHeight = '32px';
  @Input() public showSeparator = true;
  @Input() public maxWidth = '800px';
  @Input() public initialfocusedIndex = 0;
  @Input() public maxHeight = 'auto';
  @Input() public headerBGColor = 'var(--app-color)'
  @Input() public minHeight = 'auto';
  @Input() public height = 'auto';

  @Output() public opened: EventEmitter<undefined> = new EventEmitter<undefined>();
  @Output() public closed: EventEmitter<undefined> = new EventEmitter<undefined>();

  public type = WindowTypes.NOT_SET;
  public visibility = false;
  public key: string | null = null; 
  protected unregisterUrlChangeListener: VoidFunction | null = null;
  
  public open(): void {
    this.visibility = true;
  }
  
  public close(): void {
    this.visibility = false;
  }
}

export enum WindowTypes {
  NOT_SET,
  COLLAPSIBLE,
  MODAL,
  POPUP
}