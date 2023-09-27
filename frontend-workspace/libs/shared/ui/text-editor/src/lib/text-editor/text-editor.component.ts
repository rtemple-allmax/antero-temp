import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit, OnDestroy, Input } from '@angular/core';
import Quill, { QuillOptionsStatic } from 'quill'
import { Subscription } from 'rxjs';
import { bindableProvider, FormfieldBaseComponent, Nullable } from '@allmax-angular/shared/types';
import { TextEditorDropdownComponent } from '../text-editor-dropdown/text-editor-dropdown.component';
import { unsubscribe } from '@allmax-angular/shared/utils';

const AVAILABLE_FONTS = [
  'Arial',
  'Arial Black',
  'Calibri',
  'Cambria',
  'Courier New',
  'Franklin Gothic Medium',
  'Georgia',
  'Impact',
  'Tahoma',
  'Times New Roman'
];

const AVAILABLE_FONT_SIZES = [
  '8pt',
  '9pt',
  '10pt',
  '11pt',
  '12pt',
  '14pt',
  '16pt',
  '18pt',
  '20pt',
  '22pt',
  '24pt',
  '26pt',
  '28pt',
  '36pt',
  '48pt',
  '72pt'
];

@Component({
  selector: 'amx-text-editor',
  templateUrl: './text-editor.component.html',
  providers: [ bindableProvider(TextEditorComponent) ],
  styles: [`
    .button-wrapper {
      display: flex;
      justify-content: flex-end;
    }
    .flex {
      display: flex;
      gap: var(--space-md);
    }

    .no-wrap {
      flex-flow: row nowrap;
    }

    .flex .stretch {
      flex-basis: 70%;
      /* margin-right: var(--space-lg); */
    }
    .flex .slim {
      flex-basis: calc(30% - var(--space-lg));
      /* margin-right: var(--space-lg); */
    }
    .ql-toolbar.ql-snow, .ql-container.ql-snow { border: none !important;}
  `],
})
export class TextEditorComponent extends FormfieldBaseComponent<string> implements AfterViewInit, OnDestroy {
  @ViewChild('container') public container: Nullable<ElementRef<HTMLDivElement>>;
  @ViewChild('fontDropdown') public fontDropdown: Nullable<TextEditorDropdownComponent>;
  @ViewChild('sizeDropdown') public sizeDropdown: Nullable<TextEditorDropdownComponent>;

  @Input() public height = '50vh'
  
  @Output() public initialized: EventEmitter<Nullable<Quill>> = new EventEmitter<Nullable<Quill>>();

  
  private instance: Nullable<Quill>;
  public fonts: string[] = [];
  public fontSizes: string[] = [];
  
  public get innerHeight(): string {
    return `calc(${ this.height } - 42px)`;
  }

  public async ngAfterViewInit(): Promise<void> {
    if (!!this.container && !!this.container.nativeElement) {
      await this.initialize();
      this.initialized.emit(this.instance);
    }
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.finalize();
  }
  
  public handleCloseFontDropdown(): void {
    if (this.fontDropdown && this.fontDropdown.isOpen) {
      this.fontDropdown.close();
    }
  }

  public handleCloseSizeDropdown(): void {
    if (this.sizeDropdown && this.sizeDropdown.isOpen) {
      this.sizeDropdown.close();
    }
  }

  public handleCloseDropdowns(): void {
    this.handleCloseFontDropdown();
    this.handleCloseSizeDropdown();
  }

  public setContent(content: string): void {
    this.instance?.clipboard.dangerouslyPasteHTML(content);
  }
  
  public async initialize(): Promise<void> {
    const fonts = await this.configureFonts();
    this.fontSizes = AVAILABLE_FONT_SIZES;

    const alignAttributor =  Quill.import('attributors/style/align');
    Quill.register(alignAttributor, true);

    const bgAttributor = Quill.import('attributors/style/background');
    Quill.register(bgAttributor, true);

    const colorAttributor = Quill.import('attributors/style/color');
    Quill.register(colorAttributor, true);

    const directionStyle = Quill.import('attributors/style/direction');
    Quill.register(directionStyle, true);

    const fontAttributor = Quill.import('attributors/style/font');
    fontAttributor.whitelist = Object.values(fonts);
    Quill.register(fontAttributor, true);

    const sizeAttributor = Quill.import('attributors/style/size');
    sizeAttributor.whitelist = this.fontSizes;
    Quill.register(sizeAttributor, true);

    if (this.fontDropdown && this.sizeDropdown) {
      this.fontDropdown.setItems(fonts);
      this.sizeDropdown.setItems(this.fontSizes);
    
      if (this.container) {
        this.instance = new Quill(this.container?.nativeElement, this.configureContainer(this.container.nativeElement));

        this.instance.format('font', fonts[this.fontDropdown?.initialIndex]);
        this.instance.format('size', this.fontSizes[this.sizeDropdown.initialIndex]);
        
        this.instance.on('editor-change', this.editorChangeHandler);
        this.instance.on('text-change', this.textChangeHandler);
        this.instance.on('selection-change', this.selectionHandler);
      
        this.initialized.emit(this.instance);
      }
    }

    this.value$.subscribe(x => {
      // console.log('editor value', x);
      if (x !== this.getHTML()) {
        this.setHTML(x || '');
      }
    });



    // console.log('quill editor init end', {
    //   instance: this.instance,
    //   container: this.container,
    //   fontDropdown: this.fontDropdown,
    //   sizeDropdown: this.sizeDropdown
    // });
  }

  public finalize(): void {
    if (!this.instance) { return; }
    this.instance.off('editor-change', this.editorChangeHandler);
    this.instance.off('text-change', this.textChangeHandler);
    this.instance.off('selection-change', this.selectionHandler);
  }

  public editorChangeHandler = (e: any): void => {
    console.log('html editor - editor change handler', e);
    const content = this.getHTML();
    this.value = content;
  }

  public override writeValue(val: string): void {
    // console.log('editor write value', val);
    this.setContent(val);
    this.value = val;
    // this.onChange(this.value);
  }

  

  // public override registerOnChange(fn: (args: any) => any): void {
  //     this.onChange = fn;
  // }

  public textChangeHandler = (e: any) => {
    if (this.instance && this.fontDropdown && this.fontDropdown.value === '') {
      this.fontDropdown.setValue(this.instance.getFormat()['font']);
    }
    if (this.instance && this.sizeDropdown && this.sizeDropdown.value === '') {
      this.sizeDropdown.setValue(this.instance.getFormat()['size']);
    }
  }

  public fontHandler = (value: string) => {
    if (this.instance) {
      this.instance.format('font', value);
    }
  }

  public sizeHandler = (value: string) => {
    if (this.instance) {
      this.instance.format('size', value);
    }
  }

  public selectionHandler = (range: any, oldRange: any, source: any) => {
    if (range === null || oldRange === null || !this.instance) {
      return;
    }
    
    const formats = this.instance.getFormat(range);
    const keys = Object.keys(formats);
    if (keys.length > 0) {
      for (const key of keys) {
        if (formats[key] instanceof Array) {
          if (key === 'font' && this.fontDropdown) {
            this.fontDropdown.setValue('');
          }
          if (key === 'size' && this.sizeDropdown) {
            this.sizeDropdown.setValue('');
          }
        } else {
          if (key === 'font' && this.fontDropdown) {
            this.fontDropdown.setValue(formats[key]);
          }
          if (key === 'size' && this.sizeDropdown) {
            this.sizeDropdown.setValue(formats[key]);
          }
        }
      }
    }
  }

  public setHTML(html: string): void {
    if (!!this.container && !!this.container.nativeElement.firstChild && this.container.nativeElement.firstChild instanceof HTMLElement) {
      this.container.nativeElement.firstChild.innerHTML = html;
    }
  }

  private getHTML(): string {
    if (!!this.container && !!this.container.nativeElement.firstChild && this.container.nativeElement.firstChild instanceof HTMLElement) {
      return this.container.nativeElement.firstChild.innerHTML;
    }
    return '';
  }

  private configureContainer(container: HTMLDivElement): QuillOptionsStatic {
    return {
      bounds: container,
      debug: 'warn',
      placeholder: 'Enter text...',
      theme: 'snow',
      modules: {
        toolbar: '#ql-toolbar',
        // table: true
      }
    };
  }

  private async configureFonts(): Promise<string[]> {
    if ((document as any).fonts) {
      await (document as any).fonts.ready;

      const fontsAvailable = new Set<string>();

      for (const font of AVAILABLE_FONTS) {
        if ((document as any).fonts.check(`12px "${font}"`)) {
          fontsAvailable.add(font);
        }
      }

      return [ ...fontsAvailable.values() ];
    }
    return AVAILABLE_FONTS;
  }
}
