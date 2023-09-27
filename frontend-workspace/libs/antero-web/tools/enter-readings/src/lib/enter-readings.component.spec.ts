import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterReadingsComponent } from './enter-readings.component';

describe('EnterReadingsComponent', () => {
  let component: EnterReadingsComponent;
  let fixture: ComponentFixture<EnterReadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterReadingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EnterReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
