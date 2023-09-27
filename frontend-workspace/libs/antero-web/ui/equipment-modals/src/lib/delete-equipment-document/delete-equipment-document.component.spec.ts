import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEquipmentDocumentComponent } from './delete-equipment-document.component';

describe('DeleteEquipmentDocumentComponent', () => {
  let component: DeleteEquipmentDocumentComponent;
  let fixture: ComponentFixture<DeleteEquipmentDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteEquipmentDocumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteEquipmentDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
