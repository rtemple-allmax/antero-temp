import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderContractorListItemComponent } from './work-order-contractor-list-item.component';

describe('WorkOrderContractorListItemComponent', () => {
  let component: WorkOrderContractorListItemComponent;
  let fixture: ComponentFixture<WorkOrderContractorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderContractorListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderContractorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
