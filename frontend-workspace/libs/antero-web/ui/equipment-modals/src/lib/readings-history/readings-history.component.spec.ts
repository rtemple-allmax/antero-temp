import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingsHistoryComponent } from './readings-history.component';

describe('ReadingsHistoryComponent', () => {
  let component: ReadingsHistoryComponent;
  let fixture: ComponentFixture<ReadingsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadingsHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadingsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
