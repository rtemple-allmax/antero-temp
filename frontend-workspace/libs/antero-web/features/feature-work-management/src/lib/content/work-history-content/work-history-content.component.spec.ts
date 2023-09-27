import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryContentComponent } from './work-history-content.component';

describe('WorkHistoryContentComponent', () => {
  let component: WorkHistoryContentComponent;
  let fixture: ComponentFixture<WorkHistoryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
