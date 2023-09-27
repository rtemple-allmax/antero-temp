import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogPartUsageToolComponent } from './log-part-usage-tool.component';

describe('LogPartUsageToolComponent', () => {
  let component: LogPartUsageToolComponent;
  let fixture: ComponentFixture<LogPartUsageToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogPartUsageToolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogPartUsageToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
