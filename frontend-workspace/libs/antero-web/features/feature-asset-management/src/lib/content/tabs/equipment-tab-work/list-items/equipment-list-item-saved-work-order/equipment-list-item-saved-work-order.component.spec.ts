import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentListItemSavedWorkOrderComponent } from './equipment-list-item-saved-work-order.component';

describe('EquipmentListItemSavedWorkOrderComponent', () => {
  let component: EquipmentListItemSavedWorkOrderComponent;
  let fixture: ComponentFixture<EquipmentListItemSavedWorkOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentListItemSavedWorkOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentListItemSavedWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
