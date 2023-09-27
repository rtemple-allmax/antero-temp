import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartModalsComponent } from './part-modals.component';

describe('PartModalsComponent', () => {
  let component: PartModalsComponent;
  let fixture: ComponentFixture<PartModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartModalsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
