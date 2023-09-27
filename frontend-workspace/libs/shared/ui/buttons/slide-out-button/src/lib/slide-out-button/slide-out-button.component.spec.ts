import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideOutButtonComponent } from './slide-out-button.component';

describe('SlideOutButtonComponent', () => {
  let component: SlideOutButtonComponent;
  let fixture: ComponentFixture<SlideOutButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideOutButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideOutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
