import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderDocumentDeleteComponent } from './equipment-slider-document-delete.component';

describe('EquipmentSliderDocumentDeleteComponent', () => {
  let component: EquipmentSliderDocumentDeleteComponent;
  let fixture: ComponentFixture<EquipmentSliderDocumentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderDocumentDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderDocumentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
