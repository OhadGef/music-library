import { TestBed } from '@angular/core/testing';

import { SongsListFacadeService } from './songs-list-facade.service';

describe('SongsListFacadeService', () => {
  let service: SongsListFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongsListFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
