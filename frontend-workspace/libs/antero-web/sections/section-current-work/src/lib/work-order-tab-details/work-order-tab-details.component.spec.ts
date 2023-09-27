import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderTabDetailsComponent } from './work-order-tab-details.component';

describe('WorkOrderTabDetailsComponent', () => {
  let component: WorkOrderTabDetailsComponent;
  let fixture: ComponentFixture<WorkOrderTabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderTabDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
