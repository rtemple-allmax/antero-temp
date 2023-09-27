import { TaskColumnDefiniton } from '@allmax-angular/antero-web/column-definitions';
import { Task } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { MocksService } from '@allmax-angular/antero-web/services/mocks';
import { AddTaskEventArgs } from '@allmax-angular/antero-web/types';
import { DataSourceConfiguratorService } from '@allmax-angular/shared/services';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-task-list',
  templateUrl: './task-list.component.html',
  styles: [],
})
export class TaskListComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  public showAddInstructions = false;
  public showDeleteTask = false;

  public htmlText = ``;

  public crud: CrudFunctions = CrudFunctions.CREATE;

  public cols = new TaskColumnDefiniton([ 'name', 'manualOnly', 'templateCount' ]).columns;
  public data: Nullable<DataSource>;

  public icons = { ...toolbarIcons };

  public selection: Nullable<Task>;

  public nextIndex = 1;

  constructor(
    private antero: AnteroService,
    private datasources: DataSourceConfiguratorService,
    private mocks: MocksService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.mocks.taskList$.subscribe(x => {
      if (x.length >= 0) {
        this.data = this.datasources.createFromArray(x, 'id');
      }
    }));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public showAddInstructionsHandler(): void {
    this.showAddInstructions = true;
  }

  public closeAddInstructionsHandler(): void {
    this.showAddInstructions = false;
    this.crud = CrudFunctions.CREATE;
  }

  public openEditInstructions(): void {
    this.crud = CrudFunctions.UPDATE;
    this.showAddInstructions = true;
  }

  public openDeleteTask(): void {
    this.showDeleteTask = true;
  }

  public closeDeleteTask(): void {
    this.showDeleteTask = false;
  }

  public selectionHandler(record: Task): void {
    this.selection = record;
  }

  public addHandler(args: AddTaskEventArgs): void {
    const model: Task = {
      id: this.nextIndex,
      name: args.name,
      manualOnly: args.manual,
      templateCount: 0,
      instructions: args.instructions,
      checklist: args.checklist || []
    };
    this.nextIndex++;
    this.mocks.addTask(model);
    this.showAddInstructions = false;
  }

  public editHandler(args: AddTaskEventArgs): void {
    const model: Task = {
      id: this.nextIndex,
      name: args.name,
      manualOnly: args.manual,
      templateCount: 0,
      instructions: args.instructions,
      checklist: args.checklist || []
    };
    this.nextIndex++;
    this.mocks.updateTask(model);
    this.showAddInstructions = false;
  }

  public deleteHandler(): void {
    if (this.selection) {
      this.mocks.deleteTask(this.selection);
    }
    this.showDeleteTask = false;
  }
}
