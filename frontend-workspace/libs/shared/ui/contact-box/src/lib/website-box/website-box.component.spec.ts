import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBoxComponent } from './website-box.component';

describe('WebsiteBoxComponent', () => {
  let component: WebsiteBoxComponent;
  let fixture: ComponentFixture<WebsiteBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsiteBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebsiteBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
