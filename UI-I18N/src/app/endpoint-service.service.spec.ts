import { TestBed } from '@angular/core/testing';

import { EndpointServiceService } from './endpoint-service.service';

describe('EndpointServiceService', () => {
  let service: EndpointServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
