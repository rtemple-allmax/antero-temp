import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInstrumentComponent } from './delete-instrument.component';

describe('DeleteInstrumentComponent', () => {
  let component: DeleteInstrumentComponent;
  let fixture: ComponentFixture<DeleteInstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteInstrumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
