import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPartDeleteComponent } from './supplier-part-delete.component';

describe('SupplierPartDeleteComponent', () => {
  let component: SupplierPartDeleteComponent;
  let fixture: ComponentFixture<SupplierPartDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierPartDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierPartDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
