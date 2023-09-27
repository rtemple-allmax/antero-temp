import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableDataPointsContainerComponent } from './editable-data-points-container.component';

describe('EditableDataPointsContainerComponent', () => {
  let component: EditableDataPointsContainerComponent;
  let fixture: ComponentFixture<EditableDataPointsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditableDataPointsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditableDataPointsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
