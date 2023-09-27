import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEntryFormSelectionComponent } from './single-entry-form-selection.component';

describe('SingleEntryFormSelectionComponent', () => {
  let component: SingleEntryFormSelectionComponent;
  let fixture: ComponentFixture<SingleEntryFormSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleEntryFormSelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleEntryFormSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
