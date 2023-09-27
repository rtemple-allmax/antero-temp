import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPanelCompletionComponent } from './work-viewer-panel-completion.component';

describe('WorkViewerPanelCompletionComponent', () => {
  let component: WorkViewerPanelCompletionComponent;
  let fixture: ComponentFixture<WorkViewerPanelCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPanelCompletionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPanelCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
