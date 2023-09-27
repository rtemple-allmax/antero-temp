import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEquipmentPartComponent } from './delete-equipment-part.component';

describe('DeleteEquipmentPartComponent', () => {
  let component: DeleteEquipmentPartComponent;
  let fixture: ComponentFixture<DeleteEquipmentPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteEquipmentPartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteEquipmentPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
