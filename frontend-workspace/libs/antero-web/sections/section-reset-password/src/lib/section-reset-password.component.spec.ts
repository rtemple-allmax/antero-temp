import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionResetPasswordComponent } from './section-reset-password.component';

describe('SectionResetPasswordComponent', () => {
  let component: SectionResetPasswordComponent;
  let fixture: ComponentFixture<SectionResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionResetPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
