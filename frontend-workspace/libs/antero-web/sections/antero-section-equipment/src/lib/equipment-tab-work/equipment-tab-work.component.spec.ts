import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTabWorkComponent } from './equipment-tab-work.component';

describe('EquipmentTabWorkComponent', () => {
  let component: EquipmentTabWorkComponent;
  let fixture: ComponentFixture<EquipmentTabWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentTabWorkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentTabWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
