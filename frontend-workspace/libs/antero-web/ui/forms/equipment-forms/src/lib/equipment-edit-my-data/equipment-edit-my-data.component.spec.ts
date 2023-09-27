import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEditMyDataComponent } from './equipment-edit-my-data.component';

describe('EquipmentEditMyDataComponent', () => {
  let component: EquipmentEditMyDataComponent;
  let fixture: ComponentFixture<EquipmentEditMyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentEditMyDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentEditMyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
