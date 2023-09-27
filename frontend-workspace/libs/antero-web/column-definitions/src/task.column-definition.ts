import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class TaskColumnDefiniton extends BaseColumnDefinition {
  constructor(visibleColumns?: string[]) {
    super();
    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('name', { width: 200 }),
      new DataColumn('manualOnly', { width: 100 }),
      new DataColumn('templateCount', { caption: 'Templates', width:  100 }),
      new DataColumn('instructions')
    ];
    if (visibleColumns) {
      this.setVisibility(visibleColumns);
    }
  }
}