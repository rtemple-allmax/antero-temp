import { bindableProvider, FormfieldBaseComponent } from '@allmax-angular/shared/types';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, Input, ViewChild } from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'amx-text-box',
  templateUrl: './text-box.component.html',
  providers: [ bindableProvider(TextBoxComponent) ],
  
})
export class TextBoxComponent extends FormfieldBaseComponent<string> {
  @ViewChild(DxTextBoxComponent) public textbox: DxTextBoxComponent | undefined;

  @Input() public mode = 'text';
  @Input() public whiteLabel = false;
  
  public focus(): void {
    if (this.textbox?.instance) {
      setTimeout(() => { this.textbox?.instance.focus() }, 0);
    }
  }
}
