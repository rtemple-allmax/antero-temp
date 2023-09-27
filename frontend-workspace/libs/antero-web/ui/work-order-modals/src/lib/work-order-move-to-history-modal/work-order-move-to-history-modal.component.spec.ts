import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderMoveToHistoryModalComponent } from './work-order-move-to-history-modal.component';

describe('WorkOrderMoveToHistoryModalComponent', () => {
  let component: WorkOrderMoveToHistoryModalComponent;
  let fixture: ComponentFixture<WorkOrderMoveToHistoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderMoveToHistoryModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderMoveToHistoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
