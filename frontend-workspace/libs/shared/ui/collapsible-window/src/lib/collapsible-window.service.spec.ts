import { TestBed } from '@angular/core/testing';

import { CollapsibleWindowService } from './collapsible-window.service';

describe('CollapsibleWindowService', () => {
  let service: CollapsibleWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollapsibleWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
