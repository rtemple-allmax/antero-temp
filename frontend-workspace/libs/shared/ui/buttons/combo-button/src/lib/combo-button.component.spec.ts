import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboButtonComponent } from './combo-button.component';

describe('ComboButtonComponent', () => {
  let component: ComboButtonComponent;
  let fixture: ComponentFixture<ComboButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComboButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComboButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
