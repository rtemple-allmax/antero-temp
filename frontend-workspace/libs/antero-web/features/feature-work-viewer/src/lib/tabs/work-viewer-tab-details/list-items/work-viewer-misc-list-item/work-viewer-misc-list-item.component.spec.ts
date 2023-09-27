import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerMiscListItemComponent } from './work-viewer-misc-list-item.component';

describe('WorkViewerMiscListItemComponent', () => {
  let component: WorkViewerMiscListItemComponent;
  let fixture: ComponentFixture<WorkViewerMiscListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerMiscListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerMiscListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
