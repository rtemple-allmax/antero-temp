import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentRetireComponent } from './equipment-retire.component';

describe('EquipmentRetireComponent', () => {
  let component: EquipmentRetireComponent;
  let fixture: ComponentFixture<EquipmentRetireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentRetireComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentRetireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
