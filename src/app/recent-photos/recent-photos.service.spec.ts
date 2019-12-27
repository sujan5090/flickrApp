import { TestBed } from '@angular/core/testing';

import { RecentPhotosService } from './recent-photos.service';

describe('RecentPhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecentPhotosService = TestBed.get(RecentPhotosService);
    expect(service).toBeTruthy();
  });
});
