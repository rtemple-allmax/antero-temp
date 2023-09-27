import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsTabActivityComponent } from './parts-tab-activity.component';

describe('PartsTabActivityComponent', () => {
  let component: PartsTabActivityComponent;
  let fixture: ComponentFixture<PartsTabActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsTabActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsTabActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
