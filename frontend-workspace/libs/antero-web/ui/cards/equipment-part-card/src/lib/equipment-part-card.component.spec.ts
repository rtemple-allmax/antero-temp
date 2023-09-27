import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPartCardComponent } from './equipment-part-card.component';

describe('EquipmentPartCardComponent', () => {
  let component: EquipmentPartCardComponent;
  let fixture: ComponentFixture<EquipmentPartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPartCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
