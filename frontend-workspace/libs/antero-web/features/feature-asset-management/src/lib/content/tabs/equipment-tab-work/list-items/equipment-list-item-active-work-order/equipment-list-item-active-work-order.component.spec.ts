import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentListItemActiveWorkOrderComponent } from './equipment-list-item-active-work-order.component';

describe('EquipmentListItemActiveWorkOrderComponent', () => {
  let component: EquipmentListItemActiveWorkOrderComponent;
  let fixture: ComponentFixture<EquipmentListItemActiveWorkOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentListItemActiveWorkOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      EquipmentListItemActiveWorkOrderComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
