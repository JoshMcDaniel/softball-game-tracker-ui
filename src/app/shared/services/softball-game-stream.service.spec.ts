import { TestBed } from '@angular/core/testing';

import { SoftballGameStreamService } from './softball-game-stream.service';

describe('SoftballGameStreamService', () => {
  let service: SoftballGameStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftballGameStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
