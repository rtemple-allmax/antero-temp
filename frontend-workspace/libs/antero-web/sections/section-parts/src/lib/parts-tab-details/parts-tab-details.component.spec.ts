import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsTabDetailsComponent } from './parts-tab-details.component';

describe('PartsTabDetailsComponent', () => {
  let component: PartsTabDetailsComponent;
  let fixture: ComponentFixture<PartsTabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsTabDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
