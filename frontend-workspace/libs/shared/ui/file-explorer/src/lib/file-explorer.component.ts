import { allIcons, getIconByExtension } from '@allmax-angular/shared/ui/icons';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amx-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss'],
})
export class FileExplorerComponent  {
  @Input() public files: any[] = [];
  @Input() public parentTypeName = 'Equipment';
  @Input() public allowAdd = true;

  @Output() public downloadRequested = new EventEmitter<any[]>();
  @Output() public deleteRequested = new EventEmitter<any[]>();
  @Output() public selectionChanged = new EventEmitter<any[]>();
  @Output() public addRequested = new EventEmitter<File[]>();

  public selected: any[] = [];

  public icons = { ...allIcons };

  public isInSelection(record: any): boolean {
    return this.selected.includes(record);
  }

  public getFileIcon(ext: string) {
    return getIconByExtension(ext);
  }

  public clickHandler(file: any): void {
    this.selected = [ file ];
    this.selectionChanged.emit(this.selected);
  }

  public rightClickHandler(file: any): void {
    if (!this.selected.includes(file)) {
      this.selected.push(file);
      this.selectionChanged.emit(this.selected);
    }
  }

  public dblClickHandler(file: any): void {
    this.selected = [ file ];
    this.selectionChanged.emit(this.selected);
    this.downloadRequested.emit(this.selected);
  }
  
  public ctrlClickHandler(file: any): void {
    // console.log('ctrl click');
    if (this.isInSelection(file)) {
      const index = this.selected.indexOf(file);
      if (index >= 0) {
        this.selected.splice(index, 1);
      }
    } else {
      this.selected.push(file);
    }
    this.selectionChanged.emit(this.selected);
  }

  public filesAddedHandler(files: File[]): void {
    this.addRequested.emit(files);
  }

  public downloadHandler(): void {
    this.downloadRequested.emit(this.selected);
    this.selected = [];
  }

  public deleteHandler(): void {
    this.deleteRequested.emit(this.selected);
  }
}
