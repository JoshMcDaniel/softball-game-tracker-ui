import { TestBed } from '@angular/core/testing';

import { SoftballGameApiService } from './softball-game-api.service';

describe('SoftballGameApiService', () => {
  let service: SoftballGameApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftballGameApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
