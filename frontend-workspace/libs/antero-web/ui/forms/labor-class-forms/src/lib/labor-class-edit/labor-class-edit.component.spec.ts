import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborClassEditComponent } from './labor-class-edit.component';

describe('LaborClassEditComponent', () => {
  let component: LaborClassEditComponent;
  let fixture: ComponentFixture<LaborClassEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaborClassEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaborClassEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
