import { TestBed } from '@angular/core/testing';

import { CheckAnswersService } from './check-answers.service';

describe('CheckAnswersService', () => {
  let service: CheckAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
