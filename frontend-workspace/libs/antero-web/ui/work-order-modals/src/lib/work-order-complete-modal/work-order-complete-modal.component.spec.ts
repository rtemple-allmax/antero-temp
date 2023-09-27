import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderCompleteModalComponent } from './work-order-complete-modal.component';

describe('WorkOrderCompleteModalComponent', () => {
  let component: WorkOrderCompleteModalComponent;
  let fixture: ComponentFixture<WorkOrderCompleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderCompleteModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderCompleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
