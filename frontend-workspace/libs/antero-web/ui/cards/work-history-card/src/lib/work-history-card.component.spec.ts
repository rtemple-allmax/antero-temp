import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryCardComponent } from './work-history-card.component';

describe('WorkHistoryCardComponent', () => {
  let component: WorkHistoryCardComponent;
  let fixture: ComponentFixture<WorkHistoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
