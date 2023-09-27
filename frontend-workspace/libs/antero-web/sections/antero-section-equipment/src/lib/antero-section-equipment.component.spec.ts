import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteroSectionEquipmentComponent } from './antero-section-equipment.component';

describe('AnteroSectionEquipmentComponent', () => {
  let component: AnteroSectionEquipmentComponent;
  let fixture: ComponentFixture<AnteroSectionEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnteroSectionEquipmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnteroSectionEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
