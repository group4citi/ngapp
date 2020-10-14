import { TestBed } from '@angular/core/testing';

import { ViewSuggestionService } from './view-suggestion.service';

describe('ViewSuggestionService', () => {
  let service: ViewSuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
