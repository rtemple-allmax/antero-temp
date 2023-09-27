import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborTypeEditComponent } from './labor-type-edit.component';

describe('LaborTypeEditComponent', () => {
  let component: LaborTypeEditComponent;
  let fixture: ComponentFixture<LaborTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaborTypeEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaborTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
