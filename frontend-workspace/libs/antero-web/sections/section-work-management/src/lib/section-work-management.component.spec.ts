import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWorkManagementComponent } from './section-work-management.component';

describe('SectionWorkManagementComponent', () => {
  let component: SectionWorkManagementComponent;
  let fixture: ComponentFixture<SectionWorkManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionWorkManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionWorkManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
