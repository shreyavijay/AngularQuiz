import { TestBed, inject } from '@angular/core/testing';

import { EmailValidatorService } from './email-validator.service';

describe('EmailValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailValidatorService]
    });
  });

  it('should be created', inject([EmailValidatorService], (service: EmailValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
