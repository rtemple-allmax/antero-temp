import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPartEditComponent } from './supplier-part-edit.component';

describe('SupplierPartEditComponent', () => {
  let component: SupplierPartEditComponent;
  let fixture: ComponentFixture<SupplierPartEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierPartEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierPartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
