import { bindableProvider, FormfieldBaseComponent, Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { getContrastingColor } from '@allmax-angular/shared/utils';
import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { allIcons } from '@allmax-angular/shared/ui/icons';

@Component({
  selector: 'amx-color-box',
  templateUrl: './color-box.component.html',
  providers: [ bindableProvider(ColorBoxComponent) ],
})
export class ColorBoxComponent extends FormfieldBaseComponent<string> implements OnInit, AfterViewInit {
  @ViewChild('colorInput') public inputRef: Nullable<ElementRef<HTMLInputElement>>;

  public textColor = 'var(--fg-color)';
  public icons = { ...allIcons };
  
  public get uiColor(): string {
    if (this.value) {
      return this.value;
    }
    return '#FFFFFF';
  }

  public ngAfterViewInit(): void {
    this.subs.push(this.value$.subscribe(x => {
      if (x) {
        if (this.inputRef?.nativeElement) {
          this.inputRef.nativeElement.value = x;
        }
        this.textColor = this.getTextColor(x);
      }
      this.textColor = 'var(--fg-color)';
    }));
  }

  public keydownHandler(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.openColorPicker();
    }
  }
  
  public getTextColor(hex: string): string {
    if (this.value) {
      return getContrastingColor(hex);
    }
    return 'black';
  }

  public openColorPicker(): void {
    this.inputRef?.nativeElement?.click();
  }
}
