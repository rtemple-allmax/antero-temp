import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyCheckBoxComponent } from './read-only-check-box.component';

describe('ReadOnlyCheckBoxComponent', () => {
  let component: ReadOnlyCheckBoxComponent;
  let fixture: ComponentFixture<ReadOnlyCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadOnlyCheckBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadOnlyCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
