import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderTabMapComponent } from './work-order-tab-map.component';

describe('WorkOrderTabMapComponent', () => {
  let component: WorkOrderTabMapComponent;
  let fixture: ComponentFixture<WorkOrderTabMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderTabMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderTabMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
