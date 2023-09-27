import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryTabMapComponent } from './work-history-tab-map.component';

describe('WorkHistoryTabMapComponent', () => {
  let component: WorkHistoryTabMapComponent;
  let fixture: ComponentFixture<WorkHistoryTabMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryTabMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryTabMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
