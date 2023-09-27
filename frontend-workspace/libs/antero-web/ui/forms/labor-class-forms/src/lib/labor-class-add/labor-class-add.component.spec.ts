import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborClassAddComponent } from './labor-class-add.component';

describe('LaborClassAddComponent', () => {
  let component: LaborClassAddComponent;
  let fixture: ComponentFixture<LaborClassAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaborClassAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaborClassAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
