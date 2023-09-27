import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InServiceToggleComponent } from './in-service-toggle.component';

describe('InServiceToggleComponent', () => {
  let component: InServiceToggleComponent;
  let fixture: ComponentFixture<InServiceToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InServiceToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InServiceToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
