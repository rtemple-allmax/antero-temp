import { allIcons } from "@allmax-angular/shared/ui/icons";
import { unsubscribe } from "@allmax-angular/shared/utils";
import { Component, ElementRef, OnDestroy, Input, EventEmitter, Output } from "@angular/core";
import { Subscription } from "rxjs";

@Component({ template: '' })
export class LayoutPanelBaseComponent implements OnDestroy {
  @Input() public disableControls = false;
  @Input() public allowAdding = false;
  @Input() public allowEditing = false;

  @Output() public addRequested = new EventEmitter<any>();
  @Output() public editRequested = new EventEmitter<any>();
  
  protected subs: Subscription[] = [];

  public icons = { ...allIcons };

  public isEditing = false;
  
  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public addingHandler(): void {
    this.addRequested.emit();
  }

  public editingHandler(): void {
    this.editRequested.emit();
  }
}