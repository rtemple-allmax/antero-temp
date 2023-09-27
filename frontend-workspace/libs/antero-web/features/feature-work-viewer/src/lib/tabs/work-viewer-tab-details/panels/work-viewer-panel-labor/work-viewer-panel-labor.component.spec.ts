import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPanelLaborComponent } from './work-viewer-panel-labor.component';

describe('WorkViewerPanelLaborComponent', () => {
  let component: WorkViewerPanelLaborComponent;
  let fixture: ComponentFixture<WorkViewerPanelLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPanelLaborComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPanelLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
