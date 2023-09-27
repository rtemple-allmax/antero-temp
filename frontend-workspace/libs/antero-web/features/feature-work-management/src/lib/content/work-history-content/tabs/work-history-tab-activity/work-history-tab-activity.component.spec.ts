import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryTabActivityComponent } from './work-history-tab-activity.component';

describe('WorkHistoryTabActivityComponent', () => {
  let component: WorkHistoryTabActivityComponent;
  let fixture: ComponentFixture<WorkHistoryTabActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryTabActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryTabActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
