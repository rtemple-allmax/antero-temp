import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryLaborListItemComponent } from './work-history-labor-list-item.component';

describe('WorkHistoryLaborListItemComponent', () => {
  let component: WorkHistoryLaborListItemComponent;
  let fixture: ComponentFixture<WorkHistoryLaborListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryLaborListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryLaborListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
