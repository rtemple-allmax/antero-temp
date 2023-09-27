import { Task } from '@allmax-angular/antero-web/entities';
import { CardBaseComponent } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { IndicatorTypes } from '@allmax-angular/shared/ui/card';
import { Component, OnInit, Input, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'ant-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent extends CardBaseComponent implements OnInit, AfterViewInit {
  @ViewChild('instructionsTemplate') public instructionsTemplate: Nullable<TemplateRef<any>>;
  @Input() public source: Nullable<Task>;
  
  public ngOnInit(): void {
    this.options = [
      {
        label: 'Edit',
        icon: this.icons.editIcon,
        clickHandler: () => this.editHandler(),
        danger: false
      },
      {
        label: 'Delete',
        icon: this.icons.deleteIcon,
        clickHandler: () => this.deleteHandler(),
        danger: true
      }
    ]

    

    console.log('task data', this.source)
  }

  public ngAfterViewInit(): void {
    console.log()
    this.indicators = [
      { icon: this.icons.detailsIcon, type: IndicatorTypes.POPOVER, color: 'var(--icon-color)', template: this.instructionsTemplate }
    ];  
  }

  public editHandler(): void {
    // this.store.selectedInstrument = this.source;
    // this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_INSTRUMENT, CrudFunctions.UPDATE);
  }

  public deleteHandler(): void {
    // this.store.selectedInstrument = this.source;
    // this.antero.openModal(Modals.EQUIPMENT_DELETE_INSTRUMENT);
  }
}
