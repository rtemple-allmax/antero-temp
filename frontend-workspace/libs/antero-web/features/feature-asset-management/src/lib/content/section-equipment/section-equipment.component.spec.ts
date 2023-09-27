import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEquipmentComponent } from './section-equipment.component';

describe('SectionEquipmentComponent', () => {
  let component: SectionEquipmentComponent;
  let fixture: ComponentFixture<SectionEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionEquipmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
