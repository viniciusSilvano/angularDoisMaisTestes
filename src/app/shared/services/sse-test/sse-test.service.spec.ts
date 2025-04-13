import { TestBed } from '@angular/core/testing';
import { SseTestService } from './sse-test.service';


describe('SseTestService', () => {
  let service: SseTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SseTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
