import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRegisterComponent } from './section-register.component';

describe('SectionRegisterComponent', () => {
  let component: SectionRegisterComponent;
  let fixture: ComponentFixture<SectionRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
