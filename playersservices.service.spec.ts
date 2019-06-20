import { TestBed } from '@angular/core/testing';

import { PlayersservicesService } from './playersservices.service';

describe('PlayersservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayersservicesService = TestBed.get(PlayersservicesService);
    expect(service).toBeTruthy();
  });
});
