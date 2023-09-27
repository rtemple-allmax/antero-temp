import { TestBed } from '@angular/core/testing';

import { DataSourceConfiguratorService } from './data-source-configurator.service';

describe('DataSourceConfiguratorService', () => {
  let service: DataSourceConfiguratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSourceConfiguratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
