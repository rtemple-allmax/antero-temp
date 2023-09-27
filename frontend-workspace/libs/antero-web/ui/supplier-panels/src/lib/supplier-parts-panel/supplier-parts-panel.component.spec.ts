import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPartsPanelComponent } from './supplier-parts-panel.component';

describe('SupplierPartsPanelComponent', () => {
  let component: SupplierPartsPanelComponent;
  let fixture: ComponentFixture<SupplierPartsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierPartsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierPartsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
