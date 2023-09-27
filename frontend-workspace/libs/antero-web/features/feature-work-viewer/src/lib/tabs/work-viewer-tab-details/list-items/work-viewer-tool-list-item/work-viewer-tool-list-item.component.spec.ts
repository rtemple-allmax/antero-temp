import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerToolListItemComponent } from './work-viewer-tool-list-item.component';

describe('WorkViewerToolListItemComponent', () => {
  let component: WorkViewerToolListItemComponent;
  let fixture: ComponentFixture<WorkViewerToolListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerToolListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerToolListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
