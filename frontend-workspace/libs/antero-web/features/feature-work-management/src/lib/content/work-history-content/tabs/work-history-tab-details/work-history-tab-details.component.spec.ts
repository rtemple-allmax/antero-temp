import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryTabDetailsComponent } from './work-history-tab-details.component';

describe('WorkHistoryTabDetailsComponent', () => {
  let component: WorkHistoryTabDetailsComponent;
  let fixture: ComponentFixture<WorkHistoryTabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryTabDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
