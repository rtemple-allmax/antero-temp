import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverIconComponent } from './popover-icon.component';

describe('PopoverIconComponent', () => {
  let component: PopoverIconComponent;
  let fixture: ComponentFixture<PopoverIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopoverIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
