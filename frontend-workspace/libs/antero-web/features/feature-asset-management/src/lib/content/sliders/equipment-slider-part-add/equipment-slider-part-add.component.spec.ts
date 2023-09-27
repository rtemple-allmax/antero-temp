import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderPartAddComponent } from './equipment-slider-part-add.component';

describe('EquipmentSliderPartAddComponent', () => {
  let component: EquipmentSliderPartAddComponent;
  let fixture: ComponentFixture<EquipmentSliderPartAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderPartAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderPartAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
