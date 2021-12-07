import { TestBed } from '@angular/core/testing';

import { MostViewedService } from './most-viewed.service';

describe('MostViewedService', () => {
  let service: MostViewedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostViewedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
