import { TestBed } from '@angular/core/testing';

import { NotificationButtonService } from './notification-button.service';

describe('NotificationButtonService', () => {
  let service: NotificationButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
