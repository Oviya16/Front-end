import { TestBed } from '@angular/core/testing';

import { AllBookingService } from './all-booking.service';

describe('AllBookingService', () => {
  let service: AllBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
