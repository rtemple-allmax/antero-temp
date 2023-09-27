import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableSelectionComponent } from './editable-selection.component';

describe('EditableSelectionComponent', () => {
  let component: EditableSelectionComponent;
  let fixture: ComponentFixture<EditableSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditableSelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditableSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
