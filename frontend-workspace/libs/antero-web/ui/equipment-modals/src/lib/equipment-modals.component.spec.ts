import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentModalsComponent } from './equipment-modals.component';

describe('EquipmentModalsComponent', () => {
  let component: EquipmentModalsComponent;
  let fixture: ComponentFixture<EquipmentModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentModalsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
