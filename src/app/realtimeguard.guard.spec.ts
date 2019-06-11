import { TestBed, async, inject } from '@angular/core/testing';

import { RealtimeguardGuard } from './realtimeguard.guard';

describe('RealtimeguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealtimeguardGuard]
    });
  });

  it('should ...', inject([RealtimeguardGuard], (guard: RealtimeguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
