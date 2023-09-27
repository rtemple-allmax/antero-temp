import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryContractorListItemComponent } from './work-history-contractor-list-item.component';

describe('WorkHistoryContractorListItemComponent', () => {
  let component: WorkHistoryContractorListItemComponent;
  let fixture: ComponentFixture<WorkHistoryContractorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryContractorListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryContractorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
