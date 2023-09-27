import { Instrument, Task } from '@allmax-angular/antero-web/entities';
import { WorkScheduleTypes } from '@allmax-angular/antero-web/types';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MocksService {
  private taskListSubject = new BehaviorSubject<Task[]>([]);
  public taskList$ = this.taskListSubject.asObservable();
  
  public addTask(model: Task): void {
    const records = [ ...this.taskListSubject.getValue() ];
    records.push(model);
    this.taskListSubject.next(records);
  } 

  public updateTask(model: Task): void {
    const records = [ ...this.taskListSubject.getValue() ];
    const index = records.lastIndexOf(model);
    if (index >= 0) {
      records[index] = model;
    }
    this.taskListSubject.next(records);
  }

  public deleteTask(record: Task): void {
    const records = [ ...this.taskListSubject.getValue() ];
    const index = records.lastIndexOf(record);
    if (index >= 0) {
      records.splice(index, 1);
    }
    this.taskListSubject.next(records);
  }

  public get defaultColumns(): any[] {
    return [
      { dataField: 'name' },
      { dataField: 'description' }
    ]
  }
  
  public get instrumentColumns_Equipment(): any[] {
    return [
      { dataField: 'name' },
      { dataField: 'instrumentType' },
      { dataField: 'units' },
      { dataField: 'lastReading' },
      { dataField: 'lastReadingDate' },
      { dataField: 'id' },
      { dataField: 'equipment' },
      { dataField: 'equipmentID' },
      { dataField: 'rollover' },
    ]
  }

  public get readingsColumns_Equipment(): any[] {
    return [
      { dataField: 'date' },
      { dataField: 'reading' },
      { dataField: 'by' },
      { dataField: 'user' }
    ];
  }

  public get partColumns_Equipment(): any[] {
    return [
      { dataField: 'name', caption: 'Part Name' },
      { dataField: 'description' },
      { dataField: 'units' },
      { dataField: 'comment' },
      { dataField: 'quantity' },
    ];
  }

  public get stockLocationsColumns_Equipment(): any[] {
    return [ 
      { dataField: 'warehouse' },
      { dataField: 'area' },
      { dataField: 'quantity' }
    ];
  }

  public get templateColumns_Equipment(): any[] {
    return [
      { dataField: 'name', caption: 'Task Name' },
      { dataField: 'scheduleType' },
      { dataField: 'lastScheduled' },
      { dataField: 'lastCompleted' },
      { dataField: 'type' },
      { dataField: 'prioirty' }
    ];
  }

  public get workOrderColumns_Equipment(): any[] {
    return [
      { dataField: 'isDelinquent' },
      { dataField: 'needsAttention' },
      { dataField: 'workOrderNumber' },
      { dataFiled: 'task' },
      { dataField: 'workType' },
      { dataField: 'dateScheduled' },
      { dataField: 'status' }
    ];
  }

  public get defaultData(): any[] {
    return [
    { name: 'Test 1', description: 'Description 1' },
    { name: 'Test 2', description: 'Description 2' },
    { name: 'Test 3', description: 'Description 3' },
    { name: 'Test 4', description: 'Description 4' },
    { name: 'Test 5', description: 'Description 5' },
    { name: 'Test 6', description: 'Description 6' },
    { name: 'Test 7', description: 'Description 7' },
    { name: 'Test 8', description: 'Description 8' },
    { name: 'Test 9', description: 'Description 9' },
    { name: 'Test 10', description: 'Description 10' },
    { name: 'Test 11', description: 'Description 11' },
    { name: 'Test 12', description: 'Description 12' },
    { name: 'Test 13', description: 'Description 13' },
    { name: 'Test 14', description: 'Description 14' },
    { name: 'Test 15', description: 'Description 15' },
    { name: 'Test 16', description: 'Description 16' },
    { name: 'Test 17', description: 'Description 17' },
    ]
  }

  public get instrumentData_Equipment(): Instrument[] {
    return [
      // {
      //   name: 'Test 1',
      //   instrumentType: InstrumentTypes.GUAGE,
      //   units: 'Ft',
      //   lastReading: 61,
      //   lastReadingDate: new Date(),
      //   id: 1,
      //   equipment: null,
      //   equipmentID: 1,
      //   rollOver: 0
      // },
      // {
      //   name: 'Test 2',
      //   instrumentType: InstrumentTypes.GUAGE,
      //   units: 'Ft',
      //   lastReading: 45,
      //   lastReadingDate: new Date(),
      //   id: 1,
      //   equipment: null,
      //   equipmentID: 1,
      //   rollOver: 0
      // },
      // {
      //   name: 'Test 3',
      //   instrumentType: InstrumentTypes.GUAGE,
      //   units: 'Ft',
      //   lastReading: 728,
      //   lastReadingDate: new Date(),
      //   id: 1,
      //   equipment: null,
      //   equipmentID: 1,
      //   rollOver: 0
      // },
      // {
      //   name: 'Test 4',
      //   instrumentType: InstrumentTypes.GUAGE,
      //   units: 'Ft',
      //   lastReading: 23,
      //   lastReadingDate: new Date(),
      //   id: 1,
      //   equipment: null,
      //   equipmentID: 1,
      //   rollOver: 0
      // }
    ];
  }

  public get readingsData_Equipment(): any[] {
    return [
      {
        date: new Date(),
        reading: 345,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 2,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 1234,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 67,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 32,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 98,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 34,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 345,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 345,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 345,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 345,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 345,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 345,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 345,
        by: 'Equipment',
        user: 'Temple'
      },
      {
        date: new Date(),
        reading: 345,
        by: 'Equipment',
        user: 'Temple'
      },
    ];
  }

  public get partsData_Equipment(): any[] {
    return [
      {
        name: 'Test 14',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 89
      },
      {
        name: 'Test 1',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 190
      },
      {
        name: 'Test 4',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 10
      },
      {
        name: 'Test',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 890
      },
      {
        name: 'Test 1411',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 91
      },
      {
        name: 'Test 1411',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 91
      },
      {
        name: 'Test 1411',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 91
      },
      {
        name: 'Test 1411',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 91
      },
      {
        name: 'Test 1411',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 91
      },
      {
        name: 'Test 1411',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 91
      },
      {
        name: 'Test 1411',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 91
      },
      {
        name: 'Test 1411',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 91
      },
      {
        name: 'Test 1411',
        description: 'Part Description',
        units: 'each',
        comment: 'Im a comment',
        quantity: 91
      },
    ] 
  }  

  public get stockLocationsData_Equipment(): any[] {
    return [
      {
        warehouse: 'Warehouse 1',
        area: 'Shelf 2',
        quantity: 17
      },
      {
        warehouse: 'Warehouse 1',
        area: 'Shelf 11',
        quantity: 1
      },
      {
        warehouse: 'Warehouse 1',
        area: 'Shelf 1878',
        quantity: 17112
      },
      {
        warehouse: 'Warehouse 1',
        area: 'Shelf 112121123',
        quantity: 170
      },
    ];
  }

  public get templateData_Equipment(): any[] {
    return [
      {
        name: 'Template 1',
        scheduleType: WorkScheduleTypes.CALENDAR,
        lastScheduled: new Date(),
        lastCompleted: new Date(),
        workType: 'emergency',
        workPriority: 'immediate'
      },
      {
        name: 'Template 2',
        scheduleType: WorkScheduleTypes.CALENDAR,
        lastScheduled: new Date(),
        lastCompleted: new Date(),
        workType: 'routine',
        workPriority: 'little'
      },
    ];
  }

  public get workOrderData_Equipment(): any[] {
    return [
      { 
        id: 0,
        isDue: true,
        needsAttention: false,
        workOrderNumber: 17,
        task: 'My Favorite Task',
        workType: 'Super Easy',
        dateScheduled: new Date(),
        status: 'Awaiting Parts'
      },
      { 
        id: 1,
        isDue: true,
        needsAttention: true,
        workOrderNumber: 1780,
        task: 'My Favorite Task',
        workType: 'Super Easy',
        dateScheduled: new Date(),
        status: 'Awaiting Parts'
      },
      {
        id: 2,
        isDue: true,
        needsAttention: false,
        workOrderNumber: 1,
        task: 'My Favorite Task',
        workType: 'Super Easy',
        dateScheduled: new Date(),
        status: 'Awaiting Parts'
      },
      {
        id: 3,
        isDue: true,
        needsAttention: false,
        workOrderNumber: 1,
        task: 'My Favorite Task',
        workType: 'Super Easy',
        dateScheduled: new Date(),
        status: 'Awaiting Parts'
      },
      {
        id: 4,
        isDue: true,
        needsAttention: false,
        workOrderNumber: 1,
        task: 'My Favorite Task',
        workType: 'Super Easy',
        dateScheduled: new Date(),
        status: 'Awaiting Parts'
      }
    ];
  }
}
