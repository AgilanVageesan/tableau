import { TestBed } from '@angular/core/testing';

import { CovidrepoService } from './covidrepo.service';

describe('CovidrepoService', () => {
  let service: CovidrepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidrepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
