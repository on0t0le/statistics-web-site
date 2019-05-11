import { TestBed } from '@angular/core/testing';

import { GetStatService } from './get-stat.service';

describe('GetStatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStatService = TestBed.get(GetStatService);
    expect(service).toBeTruthy();
  });
});
