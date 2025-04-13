import { TestBed } from '@angular/core/testing';

import { WebsocketParallelProcessingTestService } from './websocket-parallel-processing-test.service';

describe('WebsocketParallelProcessingTestService', () => {
  let service: WebsocketParallelProcessingTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketParallelProcessingTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
