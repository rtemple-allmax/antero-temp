import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCopyComponent } from './part-copy.component';

describe('PartCopyComponent', () => {
  let component: PartCopyComponent;
  let fixture: ComponentFixture<PartCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartCopyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
