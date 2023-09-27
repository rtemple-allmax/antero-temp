import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInstrumentComponent } from './add-edit-instrument.component';

describe('AddEditInstrumentComponent', () => {
  let component: AddEditInstrumentComponent;
  let fixture: ComponentFixture<AddEditInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditInstrumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
