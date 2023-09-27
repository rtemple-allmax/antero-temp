import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPanelContractorsComponent } from './work-viewer-panel-contractors.component';

describe('WorkViewerPanelContractorsComponent', () => {
  let component: WorkViewerPanelContractorsComponent;
  let fixture: ComponentFixture<WorkViewerPanelContractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPanelContractorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPanelContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
