import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InServiceHistoryComponent } from './in-service-history.component';

describe('InServiceHistoryComponent', () => {
  let component: InServiceHistoryComponent;
  let fixture: ComponentFixture<InServiceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InServiceHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InServiceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
