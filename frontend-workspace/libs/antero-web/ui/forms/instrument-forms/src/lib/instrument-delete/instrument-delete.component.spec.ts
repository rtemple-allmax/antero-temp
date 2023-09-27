import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentDeleteComponent } from './instrument-delete.component';

describe('InstrumentDeleteComponent', () => {
  let component: InstrumentDeleteComponent;
  let fixture: ComponentFixture<InstrumentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstrumentDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstrumentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
