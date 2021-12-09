import { TestBed } from '@angular/core/testing';

import { InterviewerResolverResolver } from './interviewer-resolver.resolver';

describe('InterviewerResolverResolver', () => {
  let resolver: InterviewerResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(InterviewerResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
