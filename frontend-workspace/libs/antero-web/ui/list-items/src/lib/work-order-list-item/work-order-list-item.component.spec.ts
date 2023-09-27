import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderListItemComponent } from './work-order-list-item.component';

describe('WorkOrderListItemComponent', () => {
  let component: WorkOrderListItemComponent;
  let fixture: ComponentFixture<WorkOrderListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
