import { guid } from "@allmax-angular/shared/utils";
import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { Nullable } from "./nullable.type";

@Component({ template: '' })
export class PopoverBaseComponent implements OnInit {
  @Input() public template: Nullable<TemplateRef<any>>;

  public id = '';
  public target = '';
  public visibility = false;
    
  public ngOnInit(): void {
    this.id = `popover-target${ guid() }`;
    this.target = `#${ this.id }`;   
  }

  public show(): void {
    this.visibility = true;
  }

  public hide(): void {
    this.visibility = false;
  }
}