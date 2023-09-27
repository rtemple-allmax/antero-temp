import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPanelAdminComponent } from './work-viewer-panel-admin.component';

describe('WorkViewerPanelAdminComponent', () => {
  let component: WorkViewerPanelAdminComponent;
  let fixture: ComponentFixture<WorkViewerPanelAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPanelAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPanelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
