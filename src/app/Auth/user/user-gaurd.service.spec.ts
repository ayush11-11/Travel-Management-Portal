import { TestBed } from '@angular/core/testing';

import { UserGaurdService } from './user-gaurd.service';

describe('UserGaurdService', () => {
  let service: UserGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
