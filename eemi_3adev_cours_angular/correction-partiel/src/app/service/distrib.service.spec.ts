import { TestBed } from '@angular/core/testing';

import { DistribService } from './distrib.service';

describe('DistribService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistribService = TestBed.get(DistribService);
    expect(service).toBeTruthy();
  });
});
