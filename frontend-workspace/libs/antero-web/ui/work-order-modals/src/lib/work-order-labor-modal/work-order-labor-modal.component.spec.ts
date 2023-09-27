import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderLaborModalComponent } from './work-order-labor-modal.component';

describe('WorkOrderLaborModalComponent', () => {
  let component: WorkOrderLaborModalComponent;
  let fixture: ComponentFixture<WorkOrderLaborModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderLaborModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderLaborModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
