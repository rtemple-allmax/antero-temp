import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderChecklistModalComponent } from './work-order-checklist-modal.component';

describe('WorkOrderChecklistModalComponent', () => {
  let component: WorkOrderChecklistModalComponent;
  let fixture: ComponentFixture<WorkOrderChecklistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderChecklistModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderChecklistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
