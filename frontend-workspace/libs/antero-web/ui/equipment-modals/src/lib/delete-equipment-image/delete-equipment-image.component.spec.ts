import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEquipmentImageComponent } from './delete-equipment-image.component';

describe('DeleteEquipmentImageComponent', () => {
  let component: DeleteEquipmentImageComponent;
  let fixture: ComponentFixture<DeleteEquipmentImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteEquipmentImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteEquipmentImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
