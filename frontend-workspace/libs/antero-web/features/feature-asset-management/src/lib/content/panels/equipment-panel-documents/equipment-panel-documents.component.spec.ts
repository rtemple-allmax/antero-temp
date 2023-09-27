import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelDocumentsComponent } from './equipment-panel-documents.component';

describe('EquipmentPanelDocumentsComponent', () => {
  let component: EquipmentPanelDocumentsComponent;
  let fixture: ComponentFixture<EquipmentPanelDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelDocumentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
