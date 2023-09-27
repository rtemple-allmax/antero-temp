import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationItemComponent } from './customization-item.component';

describe('CustomizationItemComponent', () => {
  let component: CustomizationItemComponent;
  let fixture: ComponentFixture<CustomizationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomizationItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomizationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
