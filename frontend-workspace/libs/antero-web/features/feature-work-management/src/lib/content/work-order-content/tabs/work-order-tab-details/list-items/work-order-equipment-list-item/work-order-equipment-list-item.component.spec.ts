import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderEquipmentListItemComponent } from './work-order-equipment-list-item.component';

describe('WorkOrderEquipmentListItemComponent', () => {
  let component: WorkOrderEquipmentListItemComponent;
  let fixture: ComponentFixture<WorkOrderEquipmentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderEquipmentListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderEquipmentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
