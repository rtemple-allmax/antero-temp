import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPanelMiscComponent } from './work-viewer-panel-misc.component';

describe('WorkViewerPanelMiscComponent', () => {
  let component: WorkViewerPanelMiscComponent;
  let fixture: ComponentFixture<WorkViewerPanelMiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPanelMiscComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPanelMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
