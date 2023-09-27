import { Nullable, SecurityLevels } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'amx-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @ViewChild('wrapper') public wrapper: Nullable<ElementRef<HTMLDivElement>>;
  @ViewChild('avatar') public avatar: Nullable<ElementRef<HTMLImageElement>>;
  @ViewChild('filePicker') public filePicker: Nullable<ElementRef<HTMLInputElement>>;

  @Input() public src: Nullable<string>;
  @Input() public width = '50px';
  @Input() public height = '50px';
  @Input() public accept = '.png, .jpg, .jpeg, .bmp, .gif';
  @Input() public iconHeight = '20px';
  // @Input() public color = 'rgb(44, 120, 228)'
  @Input() public security: SecurityLevels = SecurityLevels.Full;
  @Input() public securityThreshold: SecurityLevels = SecurityLevels.AddEdit;
  @Input() public shouldDisable = false;

  @Output() public filesSelected: EventEmitter<File[]> = new EventEmitter<File[]>();

  public hovered = false;
  private intervalID: any;

  public icons = { ...miscIcons };

  public get disabled(): boolean {
    return this.security < this.securityThreshold || this.shouldDisable;
  }

  constructor(private renderer: Renderer2) { }

  public mouseenterHandler(): void {
    this.intervalID = setTimeout(() => {
      this.hovered = true;
    }, 500)
  }

  public mouseleaveHandler(): void {
    this.hovered = false;
    clearTimeout(this.intervalID);
  }

  public imageLoadedHandler(e: any): void {
    const el = this.avatar?.nativeElement;
    if (el) {
      if (el.naturalHeight > el.naturalWidth) {
        this.renderer.addClass(el, 'portrait')
        this.renderer.removeClass(el, 'landscape');
      } else {
        this.renderer.addClass(el, 'landscape');
        this.renderer.removeClass(el, 'portrait');
      }
    }
  }
  
  public add() {
    this.filePicker?.nativeElement?.click();
  }

  public fileSelectionHandler(e: Event) {
    const files: File[] = Array.from((e.target as HTMLInputElement).files || []);
    if (files.length > 0) {
      (e.target as HTMLInputElement).value = '';
      this.filesSelected.emit(files);
    }
  }

  public setPosition(): void {
    if (!this.hovered) { return; }
    const el = this.avatar?.nativeElement;
    if (el) {
      const avatarRect = el.getBoundingClientRect();
      if (avatarRect) {
        this.renderer.setStyle(el, 'top', `${ avatarRect.top }px`);
        this.renderer.setStyle(el, 'left', `${avatarRect.left }px`);
      } 
    }
  }

  public clearPosition(): void {
    const el = this.avatar?.nativeElement;
    const wrapperEl = this.wrapper?.nativeElement;
    if (!el || !wrapperEl) { return; }
    this.renderer.appendChild(wrapperEl, el);
    this.renderer.removeStyle(el, 'top');
    this.renderer.removeStyle(el, 'left');
  }
}
