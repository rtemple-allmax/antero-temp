import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPartModalComponent } from './work-order-part-modal.component';

describe('WorkOrderPartModalComponent', () => {
  let component: WorkOrderPartModalComponent;
  let fixture: ComponentFixture<WorkOrderPartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPartModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
