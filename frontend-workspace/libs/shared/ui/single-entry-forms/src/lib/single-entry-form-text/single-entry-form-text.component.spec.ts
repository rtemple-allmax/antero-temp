import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEntryFormTextComponent } from './single-entry-form-text.component';

describe('SingleEntryFormTextComponent', () => {
  let component: SingleEntryFormTextComponent;
  let fixture: ComponentFixture<SingleEntryFormTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleEntryFormTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleEntryFormTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
