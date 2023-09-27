import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborTypeDeleteComponent } from './labor-type-delete.component';

describe('LaborTypeDeleteComponent', () => {
  let component: LaborTypeDeleteComponent;
  let fixture: ComponentFixture<LaborTypeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaborTypeDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaborTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
