import { bindableProvider, FormfieldBaseComponent } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amx-dropdown',
  templateUrl: './dropdown.component.html',
  providers: [ bindableProvider(DropdownComponent) ],
  styles: [],
})
export class DropdownComponent extends FormfieldBaseComponent<any> {
  // @ViewChild() 
  public displayExpr = 'name';
  public keyExpr = 'id';

  public items = [
    { name: 'Test 1', id: 0 },
    { name: 'Test 2', id: 1 },
    { name: 'Test 3', id: 2 },
    { name: 'Test 4', id: 3 },
    { name: 'Test 5', id: 4 },
    { name: 'Test 6', id: 5 },
    { name: 'Test 7', id: 6 },
  ]

  public selection = null;

  public isOpen = false;

  public select(e: any): void {
    this.value = e.addedItems[0];
    this.selection = e.addedItems[0].id;
    this.isOpen = false;
  }

  public searchValueChanged(e: any): void {
    this.isOpen = true;
    const term = e.event?.originalEvent?.target?.value;
  }
}
