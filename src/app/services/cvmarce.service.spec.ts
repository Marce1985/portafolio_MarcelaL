import { TestBed } from '@angular/core/testing';

import { CvmarceService } from './cvmarce.service';

describe('CvmarceService', () => {
  let service: CvmarceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvmarceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
