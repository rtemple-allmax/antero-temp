import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsImagesPanelComponent } from './parts-images-panel.component';

describe('PartsImagesPanelComponent', () => {
  let component: PartsImagesPanelComponent;
  let fixture: ComponentFixture<PartsImagesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsImagesPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsImagesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
