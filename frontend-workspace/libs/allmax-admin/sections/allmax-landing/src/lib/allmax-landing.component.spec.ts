import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmaxLandingComponent } from './allmax-landing.component';

describe('AllmaxLandingComponent', () => {
  let component: AllmaxLandingComponent;
  let fixture: ComponentFixture<AllmaxLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllmaxLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllmaxLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
