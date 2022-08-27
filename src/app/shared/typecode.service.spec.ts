import { TestBed } from '@angular/core/testing';

import { TypecodeService } from './typecode.service';

describe('TypecodeService', () => {
  let service: TypecodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypecodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
