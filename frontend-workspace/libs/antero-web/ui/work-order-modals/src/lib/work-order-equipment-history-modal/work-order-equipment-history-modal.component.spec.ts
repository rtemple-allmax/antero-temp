import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderEquipmentHistoryModalComponent } from './work-order-equipment-history-modal.component';

describe('WorkOrderEquipmentHistoryModalComponent', () => {
  let component: WorkOrderEquipmentHistoryModalComponent;
  let fixture: ComponentFixture<WorkOrderEquipmentHistoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderEquipmentHistoryModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderEquipmentHistoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
