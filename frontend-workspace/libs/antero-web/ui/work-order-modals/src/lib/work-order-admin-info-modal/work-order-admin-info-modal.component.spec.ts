import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderAdminInfoModalComponent } from './work-order-admin-info-modal.component';

describe('WorkOrderAdminInfoModalComponent', () => {
  let component: WorkOrderAdminInfoModalComponent;
  let fixture: ComponentFixture<WorkOrderAdminInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderAdminInfoModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderAdminInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
