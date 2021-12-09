import { TestBed } from '@angular/core/testing';

import { TrendingResolver } from './trending.resolver';

describe('TrendingResolver', () => {
  let resolver: TrendingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TrendingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
