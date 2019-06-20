import { TestBed } from '@angular/core/testing';

import { GardService } from './gard.service';

describe('GardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GardService = TestBed.get(GardService);
    expect(service).toBeTruthy();
  });
});
