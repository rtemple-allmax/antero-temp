import { bindableProvider, FormfieldBaseComponent, Precision } from '@allmax-angular/shared/types';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, Input, ViewChild } from '@angular/core';
import { DxNumberBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'amx-number-box',
  templateUrl: './number-box.component.html',
  providers: [ bindableProvider(NumberBoxComponent) ]
})
export class NumberBoxComponent extends FormfieldBaseComponent<number> {
  @ViewChild(DxNumberBoxComponent) public textbox: DxNumberBoxComponent | undefined;

  @Input() public showSpinButtons = false;
  @Input() public precision: Precision | null = null;
  @Input() public format: any = '';
  
  ignoredKeys: string[] = [
    'Enter',
    'Tab',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'End',
    'Home',
    'PageUp',
    'PageDown',
    'Backspace',
    'Delete',
    'Insert',
    'Escape'
  ];

  public keyDownHandler(e: any): void {
    if (this.precision && !!e?.event?.originalEvent) {
      if (this.ignoredKeys.includes(e.event.originalEvent.key)) {
        return;
      }
      const str: string = e.event.originalEvent.target?.value;
      if (!isNullOrEmpty(str)) {
        if (str.includes('.')) {
          const decimalIndex = (str as string).indexOf('.');
          const cursorPosition = e.event.originalEvent.target?.selectionStart;
          const { integral, fractional } = this.precision;
          const split = str.split('.');
          if (split.length === 2) {
            if ((cursorPosition > decimalIndex && split[1].length >= fractional) ||  (cursorPosition <= decimalIndex && split[0].length >= (integral - Math.min(fractional, split[1].length)))) {
              e.event.originalEvent.preventDefault();
              return;
            }
          }
        } else {
          if(str.length >= this.precision.integral) {
            e.event.originalEvent.preventDefault();
          }
        }
      }
    }
  }

  public focus(): void {
    if (this.textbox?.instance) {
      setTimeout(() => { this.textbox?.instance.focus() }, 0);
    }
  }
}
