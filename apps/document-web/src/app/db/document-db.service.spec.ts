import { TestBed } from '@angular/core/testing';

import { DocumentDbService } from './document-db.service';

describe('DocumentDbService', () => {
  let service: DocumentDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
