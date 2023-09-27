import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyBoxComponent } from './read-only-box.component';

describe('ReadOnlyBoxComponent', () => {
  let component: ReadOnlyBoxComponent;
  let fixture: ComponentFixture<ReadOnlyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadOnlyBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadOnlyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
