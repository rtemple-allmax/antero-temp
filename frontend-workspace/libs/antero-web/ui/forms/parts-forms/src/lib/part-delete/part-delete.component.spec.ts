import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartDeleteComponent } from './part-delete.component';

describe('PartDeleteComponent', () => {
  let component: PartDeleteComponent;
  let fixture: ComponentFixture<PartDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
