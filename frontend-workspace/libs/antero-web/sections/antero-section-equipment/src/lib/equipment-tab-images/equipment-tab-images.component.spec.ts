import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTabImagesComponent } from './equipment-tab-images.component';

describe('EquipmentTabImagesComponent', () => {
  let component: EquipmentTabImagesComponent;
  let fixture: ComponentFixture<EquipmentTabImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentTabImagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentTabImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
