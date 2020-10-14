import { TestBed } from '@angular/core/testing';

import { ViewTradesService } from './view-trades.service';

describe('ViewTradesService', () => {
  let service: ViewTradesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewTradesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
