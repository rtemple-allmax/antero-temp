import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEditPrimaryComponent } from './equipment-edit-primary.component';

describe('EquipmentEditPrimaryComponent', () => {
  let component: EquipmentEditPrimaryComponent;
  let fixture: ComponentFixture<EquipmentEditPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentEditPrimaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentEditPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
