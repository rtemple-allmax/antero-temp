import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPanelAttachmentsComponent } from './work-viewer-panel-attachments.component';

describe('WorkViewerPanelAttachmentsComponent', () => {
  let component: WorkViewerPanelAttachmentsComponent;
  let fixture: ComponentFixture<WorkViewerPanelAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPanelAttachmentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPanelAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
