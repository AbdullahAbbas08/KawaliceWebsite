import { TestBed } from '@angular/core/testing';

import { SliderResolver } from './slider.resolver';

describe('SliderResolver', () => {
  let resolver: SliderResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SliderResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
