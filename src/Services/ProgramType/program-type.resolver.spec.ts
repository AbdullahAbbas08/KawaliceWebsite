import { TestBed } from '@angular/core/testing';

import { ProgramTypeResolver } from './program-type.resolver';

describe('ProgramTypeResolver', () => {
  let resolver: ProgramTypeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProgramTypeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
