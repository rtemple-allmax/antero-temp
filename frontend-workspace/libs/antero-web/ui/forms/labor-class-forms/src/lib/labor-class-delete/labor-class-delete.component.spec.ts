import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborClassDeleteComponent } from './labor-class-delete.component';

describe('LaborClassDeleteComponent', () => {
  let component: LaborClassDeleteComponent;
  let fixture: ComponentFixture<LaborClassDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaborClassDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaborClassDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
