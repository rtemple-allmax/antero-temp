import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPanelEquipmentComponent } from './work-order-panel-equipment.component';

describe('WorkOrderPanelEquipmentComponent', () => {
  let component: WorkOrderPanelEquipmentComponent;
  let fixture: ComponentFixture<WorkOrderPanelEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPanelEquipmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPanelEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
