import { TestBed } from '@angular/core/testing';

import { PlaceATradeService } from './place-atrade.service';

describe('PlaceATradeService', () => {
  let service: PlaceATradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceATradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
