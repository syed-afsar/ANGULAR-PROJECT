import { TestBed } from '@angular/core/testing';

import { ResolveeService } from './resolvee.service';

describe('ResolveeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveeService = TestBed.get(ResolveeService);
    expect(service).toBeTruthy();
  });
});
