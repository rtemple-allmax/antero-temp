import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleWindowComponent } from './collapsible-window.component';

describe('CollapsibleWindowComponent', () => {
  let component: CollapsibleWindowComponent;
  let fixture: ComponentFixture<CollapsibleWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollapsibleWindowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CollapsibleWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
