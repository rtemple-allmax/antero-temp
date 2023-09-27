import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerLaborListItemComponent } from './work-viewer-labor-list-item.component';

describe('WorkViewerLaborListItemComponent', () => {
  let component: WorkViewerLaborListItemComponent;
  let fixture: ComponentFixture<WorkViewerLaborListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerLaborListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerLaborListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
