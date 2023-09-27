import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDetailsPanelComponent } from './supplier-details-panel.component';

describe('SupplierDetailsPanelComponent', () => {
  let component: SupplierDetailsPanelComponent;
  let fixture: ComponentFixture<SupplierDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierDetailsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
