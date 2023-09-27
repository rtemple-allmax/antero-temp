import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerComponent } from './work-viewer.component';

describe('WorkViewerComponent', () => {
  let component: WorkViewerComponent;
  let fixture: ComponentFixture<WorkViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
