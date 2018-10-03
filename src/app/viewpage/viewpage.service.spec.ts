import { TestBed, inject } from '@angular/core/testing';

import { ViewpageService } from './viewpage.service';

describe('ViewpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewpageService]
    });
  });

  it('should be created', inject([ViewpageService], (service: ViewpageService) => {
    expect(service).toBeTruthy();
  }));
});
