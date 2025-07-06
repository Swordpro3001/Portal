import { TestBed } from '@angular/core/testing';

import { PageLoadServiceService } from './page-load-service.service';


describe('PageLoadServiceService', () => {
  let service: PageLoadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageLoadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
