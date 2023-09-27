import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverButtonComponent } from './popover-button.component';

describe('PopoverButtonComponent', () => {
  let component: PopoverButtonComponent;
  let fixture: ComponentFixture<PopoverButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopoverButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
