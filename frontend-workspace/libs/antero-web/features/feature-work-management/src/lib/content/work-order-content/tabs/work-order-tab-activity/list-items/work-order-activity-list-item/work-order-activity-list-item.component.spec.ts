import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderActivityListItemComponent } from './work-order-activity-list-item.component';

describe('WorkOrderActivityListItemComponent', () => {
  let component: WorkOrderActivityListItemComponent;
  let fixture: ComponentFixture<WorkOrderActivityListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderActivityListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderActivityListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
