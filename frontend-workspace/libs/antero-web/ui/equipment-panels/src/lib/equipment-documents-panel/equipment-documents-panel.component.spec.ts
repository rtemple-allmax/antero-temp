import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDocumentsPanelComponent } from './equipment-documents-panel.component';

describe('EquipmentDocumentsPanelComponent', () => {
  let component: EquipmentDocumentsPanelComponent;
  let fixture: ComponentFixture<EquipmentDocumentsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentDocumentsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentDocumentsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
