import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewerContractorListItemComponent } from './work-viewer-contractor-list-item.component';

describe('WorkViewerContractorListItemComponent', () => {
  let component: WorkViewerContractorListItemComponent;
  let fixture: ComponentFixture<WorkViewerContractorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkViewerContractorListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkViewerContractorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
