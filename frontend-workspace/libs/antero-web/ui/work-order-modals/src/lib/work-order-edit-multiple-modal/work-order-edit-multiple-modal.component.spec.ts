import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderEditMultipleModalComponent } from './work-order-edit-multiple-modal.component';

describe('WorkOrderEditMultipleModalComponent', () => {
  let component: WorkOrderEditMultipleModalComponent;
  let fixture: ComponentFixture<WorkOrderEditMultipleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderEditMultipleModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderEditMultipleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
