import { TestBed } from '@angular/core/testing';

import { ToyotaDealershipService } from './toyota-dealership.service';

describe('ToyotaDealershipService', () => {
  let service: ToyotaDealershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToyotaDealershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
