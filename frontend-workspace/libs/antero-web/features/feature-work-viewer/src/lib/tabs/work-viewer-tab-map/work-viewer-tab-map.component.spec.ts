import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerTabMapComponent } from './work-viewer-tab-map.component';

describe('WorkViewerTabMapComponent', () => {
  let component: WorkViewerTabMapComponent;
  let fixture: ComponentFixture<WorkViewerTabMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerTabMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerTabMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
