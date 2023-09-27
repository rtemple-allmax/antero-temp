import { Nullable, SecurityLevels } from '@allmax-angular/shared/types';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'amx-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: [ './file-picker.component.scss' ] 
  // styles: [`
  //   .file-picker {
  //     pointer-events: all;
  //   }

  //   .file-picker input[type=file] {
  //     visibility: hidden;
  //     position: absolute;
  //   }

  //   .file-picker.disabled {
  //     pointer-events: none;
  //     position: relative;
  //     cursor: initial;
  //     opacity: 0;
  //   }
  //   .file-picker.disabled::after {
  //     content: '';
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     right: 0;
  //     bottom: 0;
  //     background-color: rgba(196, 196, 196, 0.6);
  //   }
  // `]
})
export class FilePickerComponent {
  @ViewChild('filePicker') public filePicker: Nullable<ElementRef<HTMLInputElement>>;

  @Input() public label = '';
  @Input() public accept = '.png, .jpg, .jpeg, .bmp, .gif, .doc, .docx, .txt';
  @Input() public iconHeight = '20px';
  @Input() public color = 'var(--icon-color)'
  @Input() public security: SecurityLevels = SecurityLevels.Full;
  @Input() public securityThreshold: SecurityLevels = SecurityLevels.AddEdit;
  @Input() public shouldDisable = false;

  @Output() public filesSelected: EventEmitter<File[]> = new EventEmitter<File[]>();

  public icons = toolbarIcons;

  public get disabled(): boolean {
    return this.security < this.securityThreshold || this.shouldDisable;
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
}
