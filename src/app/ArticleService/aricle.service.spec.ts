import { TestBed } from '@angular/core/testing';

import { AricleService } from './aricle.service';

describe('AricleService', () => {
  let service: AricleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AricleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
