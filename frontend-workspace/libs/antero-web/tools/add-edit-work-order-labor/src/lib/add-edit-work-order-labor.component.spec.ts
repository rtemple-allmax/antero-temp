import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWorkOrderLaborComponent } from './add-edit-work-order-labor.component';

describe('AddEditWorkOrderLaborComponent', () => {
  let component: AddEditWorkOrderLaborComponent;
  let fixture: ComponentFixture<AddEditWorkOrderLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditWorkOrderLaborComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditWorkOrderLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
