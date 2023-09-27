import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsTabImagesComponent } from './parts-tab-images.component';

describe('PartsTabImagesComponent', () => {
  let component: PartsTabImagesComponent;
  let fixture: ComponentFixture<PartsTabImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsTabImagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsTabImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
