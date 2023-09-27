import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderInstructionsModalComponent } from './work-order-instructions-modal.component';

describe('WorkOrderInstructionsModalComponent', () => {
  let component: WorkOrderInstructionsModalComponent;
  let fixture: ComponentFixture<WorkOrderInstructionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderInstructionsModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderInstructionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
