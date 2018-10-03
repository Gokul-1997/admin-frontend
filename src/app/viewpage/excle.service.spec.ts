import { TestBed, inject } from '@angular/core/testing';

import { ExcleService } from './excle.service';

describe('ExcleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcleService]
    });
  });

  it('should be created', inject([ExcleService], (service: ExcleService) => {
    expect(service).toBeTruthy();
  }));
});
