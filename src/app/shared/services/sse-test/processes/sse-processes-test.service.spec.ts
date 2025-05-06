import { TestBed } from '@angular/core/testing';
import { SseProcessesTestService } from './sse-processes-test.service';


describe('SseTestService', () => {
  let service: SseProcessesTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SseProcessesTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
