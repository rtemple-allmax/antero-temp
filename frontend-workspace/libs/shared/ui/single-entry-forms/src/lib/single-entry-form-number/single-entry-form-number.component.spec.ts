import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEntryFormNumberComponent } from './single-entry-form-number.component';

describe('SingleEntryFormNumberComponent', () => {
  let component: SingleEntryFormNumberComponent;
  let fixture: ComponentFixture<SingleEntryFormNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleEntryFormNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleEntryFormNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
