import { TestBed } from '@angular/core/testing';

import { SseParallelProcessingTestService } from './sse-parallel-processing-test.service';

describe('SseParallelProcessingTestService', () => {
  let service: SseParallelProcessingTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SseParallelProcessingTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
