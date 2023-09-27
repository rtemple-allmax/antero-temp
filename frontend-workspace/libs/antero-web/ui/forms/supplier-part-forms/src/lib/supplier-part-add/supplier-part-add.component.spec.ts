import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPartAddComponent } from './supplier-part-add.component';

describe('SupplierPartAddComponent', () => {
  let component: SupplierPartAddComponent;
  let fixture: ComponentFixture<SupplierPartAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierPartAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierPartAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
