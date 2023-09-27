import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderReplaceComponent } from './equipment-slider-replace.component';

describe('EquipmentSliderReplaceComponent', () => {
  let component: EquipmentSliderReplaceComponent;
  let fixture: ComponentFixture<EquipmentSliderReplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderReplaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
