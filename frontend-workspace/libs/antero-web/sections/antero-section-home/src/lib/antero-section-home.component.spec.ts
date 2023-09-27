import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteroSectionHomeComponent } from './antero-section-home.component';

describe('AnteroSectionHomeComponent', () => {
  let component: AnteroSectionHomeComponent;
  let fixture: ComponentFixture<AnteroSectionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnteroSectionHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnteroSectionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
