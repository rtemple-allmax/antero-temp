import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerInstrumentListItemComponent } from './work-viewer-instrument-list-item.component';

describe('WorkViewerInstrumentListItemComponent', () => {
  let component: WorkViewerInstrumentListItemComponent;
  let fixture: ComponentFixture<WorkViewerInstrumentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerInstrumentListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerInstrumentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
