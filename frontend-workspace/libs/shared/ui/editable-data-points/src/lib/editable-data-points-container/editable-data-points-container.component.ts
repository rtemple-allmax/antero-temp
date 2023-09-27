import { Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, EventEmitter, Output, ContentChildren, QueryList, AfterContentInit, ElementRef } from '@angular/core';
import { EditableDataPointArgs, EditableDataPointBaseComponent } from '../editable-data-point.base';

@Component({
  selector: 'amx-editable-data-points-container',
  templateUrl: './editable-data-points-container.component.html',
  styleUrls: ['./editable-data-points-container.component.scss'],
})
export class EditableDataPointsContainerComponent implements AfterContentInit {
  @ContentChildren('editable', { descendants: true }) public datapointsQuery: Nullable<QueryList<any>>;
  
  @Output() public editing = new EventEmitter<any>();
  @Output() public submitted = new EventEmitter<EditableDataPointArgs[]>();

  public icons = { ...allIcons };
  public isEditing = false;

  public els: EditableDataPointBaseComponent[] = [];
  public datapoints: EditableDataPointArgs[] = [];

  constructor(public el: ElementRef) { } 

  public ngAfterContentInit(): void {
    this.els = this.datapointsQuery?.toArray() || [];
    this.subscribeToChildren();
    this.datapointsQuery?.changes.subscribe(q => {
      this.subscribeToChildren();
      this.els = q.toArray();
    })
  }

  public subscribeToChildren(): void {
    if (this.els.length > 0) {
      this.els.forEach(x => {
        x.submitted.subscribe((y: any) => {
          const found = this.datapoints.find(z => z.name === x.name)
          if (found) {
            this.datapoints[this.datapoints.lastIndexOf(found)] = y;
          } else {
            this.datapoints.push(y)
          }
        })
      });
    }
  }

  public setEditMode(mode: boolean): void {
    this.isEditing = mode;
    if (this.isEditing) {
      this.editing.emit();
    }
    this.els.forEach(x => x.setEditMode(mode));
  }

  public clickHandler(): void {
    if (this.isEditing) {
      this.submitted.emit(this.datapoints);
      this.setEditMode(false);
    } else {
      this.datapoints = [];
      this.setEditMode(true);
    }
  }
}
