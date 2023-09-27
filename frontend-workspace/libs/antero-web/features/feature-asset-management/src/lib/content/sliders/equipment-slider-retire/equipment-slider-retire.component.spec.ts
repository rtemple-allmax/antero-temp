import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderRetireComponent } from './equipment-slider-retire.component';

describe('EquipmentSliderRetireComponent', () => {
  let component: EquipmentSliderRetireComponent;
  let fixture: ComponentFixture<EquipmentSliderRetireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderRetireComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderRetireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
