import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEquipmentPartModalComponent } from './add-edit-equipment-part-modal.component';

describe('AddEditEquipmentPartModalComponent', () => {
  let component: AddEditEquipmentPartModalComponent;
  let fixture: ComponentFixture<AddEditEquipmentPartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditEquipmentPartModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditEquipmentPartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
