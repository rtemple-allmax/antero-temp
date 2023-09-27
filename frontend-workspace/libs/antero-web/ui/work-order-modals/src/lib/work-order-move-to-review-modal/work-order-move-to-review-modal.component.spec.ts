import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderMoveToReviewModalComponent } from './work-order-move-to-review-modal.component';

describe('WorkOrderMoveToReviewModalComponent', () => {
  let component: WorkOrderMoveToReviewModalComponent;
  let fixture: ComponentFixture<WorkOrderMoveToReviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderMoveToReviewModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderMoveToReviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
