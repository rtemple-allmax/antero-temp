import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPanelTaskComponent } from './work-viewer-panel-task.component';

describe('WorkViewerPanelTaskComponent', () => {
  let component: WorkViewerPanelTaskComponent;
  let fixture: ComponentFixture<WorkViewerPanelTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPanelTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPanelTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
