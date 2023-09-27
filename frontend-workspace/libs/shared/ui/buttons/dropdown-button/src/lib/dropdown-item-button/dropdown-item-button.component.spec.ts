import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownItemButtonComponent } from './dropdown-item-button.component';

describe('DropdownItemButtonComponent', () => {
  let component: DropdownItemButtonComponent;
  let fixture: ComponentFixture<DropdownItemButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownItemButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
