// This component is for lists where the display value is just one string. 

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { bindableProvider, FormfieldBaseComponent } from '@allmax-angular/shared/types';
import { isNullOrEmpty } from '@allmax-angular/shared/utils';
import { DxDropDownBoxComponent } from 'devextreme-angular';

export interface ListItem {
  displayValue: string;
  value: any;
}

@Component({
  selector: 'amx-list-box',
  templateUrl: './list-box.component.html',
  providers: [ bindableProvider(ListBoxComponent) ],
  styleUrls: ['./list-box.component.scss'],
})
export class ListBoxComponent extends FormfieldBaseComponent<any> implements OnInit {
  @ViewChild(DxDropDownBoxComponent) public dropdown: DxDropDownBoxComponent | undefined;

  @Input() public items: ListItem[] = [];

  public itemsToDisplay: ListItem[] = [];
  public isOpen = false;
  public searchTerm = '';
  
  public override ngOnInit(): void {
    super.ngOnInit();
    this.itemsToDisplay = this.items;
  }
  
  public override inputHandler(e: any): void {
    super.inputHandler(e);
    this.isOpen = true;
    this.searchTerm = (e.event.originalEvent.target as HTMLInputElement).value;
    
    if (this.searchTerm.length < 1) {
      this.itemsToDisplay = this.items;
    } else {
      this.itemsToDisplay = this.items.filter(x => x.displayValue.toUpperCase().includes(this.searchTerm.toUpperCase()))
    }
      
    setTimeout(() => {
      this.setValue(this.itemsToDisplay.find(x => x.displayValue === this.searchTerm), false)
    }, 100)

    
  }

  public setValue(item: ListItem | undefined, close: boolean = true): void {
    this.dropdown?.instance?.option('value', item);
    this.isOpen = !close;
  }
}
