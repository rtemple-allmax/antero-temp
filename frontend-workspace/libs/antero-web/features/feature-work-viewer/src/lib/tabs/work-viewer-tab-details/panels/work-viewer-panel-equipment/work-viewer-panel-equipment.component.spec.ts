import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPanelEquipmentComponent } from './work-viewer-panel-equipment.component';

describe('WorkViewerPanelEquipmentComponent', () => {
  let component: WorkViewerPanelEquipmentComponent;
  let fixture: ComponentFixture<WorkViewerPanelEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPanelEquipmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPanelEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
