import { TestBed } from '@angular/core/testing';

import { MovierepoService } from './movierepo.service';

describe('MovierepoService', () => {
  let service: MovierepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovierepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
