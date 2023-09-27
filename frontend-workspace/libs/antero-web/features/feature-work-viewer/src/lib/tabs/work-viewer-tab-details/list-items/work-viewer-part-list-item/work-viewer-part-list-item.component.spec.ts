import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerPartListItemComponent } from './work-viewer-part-list-item.component';

describe('WorkViewerPartListItemComponent', () => {
  let component: WorkViewerPartListItemComponent;
  let fixture: ComponentFixture<WorkViewerPartListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerPartListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerPartListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
