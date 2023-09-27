import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersTabActivityComponent } from './suppliers-tab-activity.component';

describe('SuppliersTabActivityComponent', () => {
  let component: SuppliersTabActivityComponent;
  let fixture: ComponentFixture<SuppliersTabActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuppliersTabActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuppliersTabActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
