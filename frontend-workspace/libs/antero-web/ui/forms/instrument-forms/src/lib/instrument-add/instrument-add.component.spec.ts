import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentAddComponent } from './instrument-add.component';

describe('InstrumentAddComponent', () => {
  let component: InstrumentAddComponent;
  let fixture: ComponentFixture<InstrumentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstrumentAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstrumentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
