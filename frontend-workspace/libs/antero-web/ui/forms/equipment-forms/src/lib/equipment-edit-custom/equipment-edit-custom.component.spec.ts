import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEditCustomComponent } from './equipment-edit-custom.component';

describe('EquipmentEditCustomComponent', () => {
  let component: EquipmentEditCustomComponent;
  let fixture: ComponentFixture<EquipmentEditCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentEditCustomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentEditCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
