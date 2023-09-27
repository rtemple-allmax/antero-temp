import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPanelToolsComponent } from './work-viewer-panel-tools.component';

describe('WorkViewerPanelToolsComponent', () => {
  let component: WorkViewerPanelToolsComponent;
  let fixture: ComponentFixture<WorkViewerPanelToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPanelToolsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPanelToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
