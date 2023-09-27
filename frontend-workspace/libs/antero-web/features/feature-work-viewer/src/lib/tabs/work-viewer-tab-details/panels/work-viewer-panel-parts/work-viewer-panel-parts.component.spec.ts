import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPanelPartsComponent } from './work-viewer-panel-parts.component';

describe('WorkViewerPanelPartsComponent', () => {
  let component: WorkViewerPanelPartsComponent;
  let fixture: ComponentFixture<WorkViewerPanelPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPanelPartsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPanelPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
