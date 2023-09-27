import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderManageCriticalityComponent } from './equipment-slider-manage-criticality.component';

describe('EquipmentSliderManageCriticalityComponent', () => {
  let component: EquipmentSliderManageCriticalityComponent;
  let fixture: ComponentFixture<EquipmentSliderManageCriticalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderManageCriticalityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      EquipmentSliderManageCriticalityComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
