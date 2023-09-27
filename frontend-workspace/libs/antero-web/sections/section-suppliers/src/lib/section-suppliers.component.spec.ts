import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSuppliersComponent } from './section-suppliers.component';

describe('SectionSuppliersComponent', () => {
  let component: SectionSuppliersComponent;
  let fixture: ComponentFixture<SectionSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionSuppliersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
