import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryToolListItemComponent } from './work-history-tool-list-item.component';

describe('WorkHistoryToolListItemComponent', () => {
  let component: WorkHistoryToolListItemComponent;
  let fixture: ComponentFixture<WorkHistoryToolListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryToolListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryToolListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
