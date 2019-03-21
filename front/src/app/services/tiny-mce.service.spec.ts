import { TestBed } from '@angular/core/testing';

import { TinyMceService } from './tiny-mce.service';

describe('TinyMceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TinyMceService = TestBed.get(TinyMceService);
    expect(service).toBeTruthy();
  });
});
