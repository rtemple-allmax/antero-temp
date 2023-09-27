import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborTypeAddComponent } from './labor-type-add.component';

describe('LaborTypeAddComponent', () => {
  let component: LaborTypeAddComponent;
  let fixture: ComponentFixture<LaborTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaborTypeAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LaborTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
