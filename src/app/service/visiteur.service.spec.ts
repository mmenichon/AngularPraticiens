import { TestBed } from '@angular/core/testing';

import { VisiteurService } from './visiteur.service';

describe('VisiteurServiceService', () => {
  let service: VisiteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisiteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
