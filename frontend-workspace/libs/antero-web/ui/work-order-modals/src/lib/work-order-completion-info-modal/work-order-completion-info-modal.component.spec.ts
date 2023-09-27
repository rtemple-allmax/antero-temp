import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderCompletionInfoModalComponent } from './work-order-completion-info-modal.component';

describe('WorkOrderCompletionInfoModalComponent', () => {
  let component: WorkOrderCompletionInfoModalComponent;
  let fixture: ComponentFixture<WorkOrderCompletionInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderCompletionInfoModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderCompletionInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
