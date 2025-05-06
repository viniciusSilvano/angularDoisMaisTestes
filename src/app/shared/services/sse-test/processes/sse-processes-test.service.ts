import { Injectable } from '@angular/core';
import { SseService } from '../sse-service.service';

@Injectable({
  providedIn: 'root'
})
export class SseProcessesTestService extends SseService {

  protected getUrl(): string {
    return 'http://localhost:8080/javaTeste/sse_test';
  }

  constructor() { 
    super();
  }

}
