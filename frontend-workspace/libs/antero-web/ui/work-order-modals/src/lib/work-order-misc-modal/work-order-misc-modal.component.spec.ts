import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderMiscModalComponent } from './work-order-misc-modal.component';

describe('WorkOrderMiscModalComponent', () => {
  let component: WorkOrderMiscModalComponent;
  let fixture: ComponentFixture<WorkOrderMiscModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderMiscModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderMiscModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
