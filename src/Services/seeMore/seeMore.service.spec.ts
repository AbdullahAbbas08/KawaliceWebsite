import { TestBed } from '@angular/core/testing';

import { SeeMoreService } from './seeMore.service';

describe('RecentlyService', () => {
  let service: SeeMoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeeMoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
