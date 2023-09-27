import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryInstrumentListItemComponent } from './work-history-instrument-list-item.component';

describe('WorkHistoryInstrumentListItemComponent', () => {
  let component: WorkHistoryInstrumentListItemComponent;
  let fixture: ComponentFixture<WorkHistoryInstrumentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryInstrumentListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryInstrumentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
