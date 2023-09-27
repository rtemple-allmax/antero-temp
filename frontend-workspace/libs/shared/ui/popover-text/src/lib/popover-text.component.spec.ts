import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTextComponent } from './popover-text.component';

describe('PopoverTextComponent', () => {
  let component: PopoverTextComponent;
  let fixture: ComponentFixture<PopoverTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopoverTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopoverTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
