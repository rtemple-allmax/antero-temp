import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPartListItemComponent } from './work-order-part-list-item.component';

describe('WorkOrderPartListItemComponent', () => {
  let component: WorkOrderPartListItemComponent;
  let fixture: ComponentFixture<WorkOrderPartListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPartListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPartListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
