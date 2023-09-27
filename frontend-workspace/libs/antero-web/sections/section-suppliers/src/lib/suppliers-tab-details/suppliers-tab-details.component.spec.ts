import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersTabDetailsComponent } from './suppliers-tab-details.component';

describe('SuppliersTabDetailsComponent', () => {
  let component: SuppliersTabDetailsComponent;
  let fixture: ComponentFixture<SuppliersTabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuppliersTabDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuppliersTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
