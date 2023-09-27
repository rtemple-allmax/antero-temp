import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableNumberComponent } from './editable-number.component';

describe('EditableNumberComponent', () => {
  let component: EditableNumberComponent;
  let fixture: ComponentFixture<EditableNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditableNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditableNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
