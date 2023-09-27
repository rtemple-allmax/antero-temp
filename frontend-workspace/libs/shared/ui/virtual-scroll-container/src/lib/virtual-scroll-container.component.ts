import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, TemplateRef } from '@angular/core';

interface VirtualScrollItem {
  id: number;
  type: string;
  datapoints: string[];
}

@Component({
  selector: 'amx-virtual-scroll-container',
  templateUrl: './virtual-scroll-container.component.html',
  styles: [],
})
export class VirtualScrollContainerComponent  {
  // @Input() public columnCount = 1;
  // @Input() public itemSize = 100;
  // @Input() public height = 'auto';
  @Input() public items: any[] = [];
  // @Input() public itemTemplate: Nullable<TemplateRef<any>>;
  
  // public get columns(): string {
  //   return `repeat(${ this.columnCount }, 1fr)`;
  // }

  // public get innerHeight(): string {
  //   return `calc(${ this.height } - 1rem)`;
  // }
  
  // public get itemSet(): any {
  //   let index: number;
  //   const dataChunk: any[][] = [];
  //   for (index = 0; index < this.items.length; index += this.columnCount) {
  //     dataChunk.push(this.items.slice(index, index + this.columnCount));
  //   }
  //   return dataChunk;
  // }

  public test() : void {
    // console.log('test in container');
  }
}
