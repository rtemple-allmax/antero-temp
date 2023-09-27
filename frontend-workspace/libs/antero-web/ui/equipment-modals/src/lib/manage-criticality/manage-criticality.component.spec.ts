import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCriticalityComponent } from './manage-criticality.component';

describe('ManageCriticalityComponent', () => {
  let component: ManageCriticalityComponent;
  let fixture: ComponentFixture<ManageCriticalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageCriticalityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageCriticalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
