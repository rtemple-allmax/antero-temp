import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderMiscListItemComponent } from './work-order-misc-list-item.component';

describe('WorkOrderMiscListItemComponent', () => {
  let component: WorkOrderMiscListItemComponent;
  let fixture: ComponentFixture<WorkOrderMiscListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderMiscListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderMiscListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
