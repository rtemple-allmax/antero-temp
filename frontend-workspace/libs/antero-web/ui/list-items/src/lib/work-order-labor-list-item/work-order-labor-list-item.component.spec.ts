import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderLaborListItemComponent } from './work-order-labor-list-item.component';

describe('WorkOrderLaborListItemComponent', () => {
  let component: WorkOrderLaborListItemComponent;
  let fixture: ComponentFixture<WorkOrderLaborListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderLaborListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderLaborListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
