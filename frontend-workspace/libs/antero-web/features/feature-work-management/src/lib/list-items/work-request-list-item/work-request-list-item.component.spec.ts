import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestListItemComponent } from './work-request-list-item.component';

describe('WorkRequestListItemComponent', () => {
  let component: WorkRequestListItemComponent;
  let fixture: ComponentFixture<WorkRequestListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkRequestListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkRequestListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
