import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsTabHistoryComponent } from './parts-tab-history.component';

describe('PartsTabHistoryComponent', () => {
  let component: PartsTabHistoryComponent;
  let fixture: ComponentFixture<PartsTabHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsTabHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsTabHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
