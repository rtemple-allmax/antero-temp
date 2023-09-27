import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierEquipmentListItemComponent } from './supplier-equipment-list-item.component';

describe('SupplierEquipmentListItemComponent', () => {
  let component: SupplierEquipmentListItemComponent;
  let fixture: ComponentFixture<SupplierEquipmentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierEquipmentListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierEquipmentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
