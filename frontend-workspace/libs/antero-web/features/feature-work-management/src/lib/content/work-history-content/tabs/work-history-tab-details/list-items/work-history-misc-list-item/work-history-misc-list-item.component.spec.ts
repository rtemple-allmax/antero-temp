import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryMiscListItemComponent } from './work-history-misc-list-item.component';

describe('WorkHistoryMiscListItemComponent', () => {
  let component: WorkHistoryMiscListItemComponent;
  let fixture: ComponentFixture<WorkHistoryMiscListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryMiscListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryMiscListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
