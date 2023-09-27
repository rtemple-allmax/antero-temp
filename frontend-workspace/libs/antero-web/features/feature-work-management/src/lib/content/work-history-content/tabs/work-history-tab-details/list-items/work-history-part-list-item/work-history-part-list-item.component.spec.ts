import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryPartListItemComponent } from './work-history-part-list-item.component';

describe('WorkHistoryPartListItemComponent', () => {
  let component: WorkHistoryPartListItemComponent;
  let fixture: ComponentFixture<WorkHistoryPartListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryPartListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryPartListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
