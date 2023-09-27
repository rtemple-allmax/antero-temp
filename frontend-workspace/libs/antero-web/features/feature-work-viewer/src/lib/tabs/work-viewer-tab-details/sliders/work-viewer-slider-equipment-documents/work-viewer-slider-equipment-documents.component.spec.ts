import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerSliderEquipmentDocumentsComponent } from './work-viewer-slider-equipment-documents.component';

describe('WorkViewerSliderEquipmentDocumentsComponent', () => {
  let component: WorkViewerSliderEquipmentDocumentsComponent;
  let fixture: ComponentFixture<WorkViewerSliderEquipmentDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerSliderEquipmentDocumentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      WorkViewerSliderEquipmentDocumentsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
