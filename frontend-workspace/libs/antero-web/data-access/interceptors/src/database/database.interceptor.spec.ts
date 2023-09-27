import { TestBed } from '@angular/core/testing';

import { DatabaseInterceptor } from './database.interceptor';

describe('DatabaseInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DatabaseInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DatabaseInterceptor = TestBed.inject(DatabaseInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
