import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryListItemComponent } from './work-history-list-item.component';

describe('WorkHistoryListItemComponent', () => {
  let component: WorkHistoryListItemComponent;
  let fixture: ComponentFixture<WorkHistoryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
