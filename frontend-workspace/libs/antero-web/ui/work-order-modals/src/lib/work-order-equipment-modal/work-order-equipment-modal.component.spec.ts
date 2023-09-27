import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderEquipmentModalComponent } from './work-order-equipment-modal.component';

describe('WorkOrderEquipmentModalComponent', () => {
  let component: WorkOrderEquipmentModalComponent;
  let fixture: ComponentFixture<WorkOrderEquipmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderEquipmentModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderEquipmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
