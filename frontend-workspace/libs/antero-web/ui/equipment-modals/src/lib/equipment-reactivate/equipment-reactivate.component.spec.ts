import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentReactivateComponent } from './equipment-reactivate.component';

describe('EquipmentReactivateComponent', () => {
  let component: EquipmentReactivateComponent;
  let fixture: ComponentFixture<EquipmentReactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentReactivateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentReactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
