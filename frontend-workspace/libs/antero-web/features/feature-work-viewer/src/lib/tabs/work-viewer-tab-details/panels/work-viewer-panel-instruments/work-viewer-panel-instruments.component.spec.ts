import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPanelInstrumentsComponent } from './work-viewer-panel-instruments.component';

describe('WorkViewerPanelInstrumentsComponent', () => {
  let component: WorkViewerPanelInstrumentsComponent;
  let fixture: ComponentFixture<WorkViewerPanelInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPanelInstrumentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPanelInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
