import { TestBed } from '@angular/core/testing';

import { DocsServiceService } from './docs-service.service';

describe('DocsServiceService', () => {
  let service: DocsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
