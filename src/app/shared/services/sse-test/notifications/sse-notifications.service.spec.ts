import { TestBed } from '@angular/core/testing';

import { SseNotificationsService } from './sse-notifications.service';

describe('SseNotificationsService', () => {
  let service: SseNotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SseNotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
