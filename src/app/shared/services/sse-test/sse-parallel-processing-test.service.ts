import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from 'src/environments/environment';
import { SseTestService } from './sse-test.service';

@Injectable({
  providedIn: 'root'
})
export class SseParallelProcessingTestService {

  private serviceUrl = `${BACKEND_URL}/sse_parallel_processing_test`;

  constructor(private http: HttpClient,
    private sseTestService: SseTestService) { }

  beginProcessing() : void{
    this.http.get(`${this.serviceUrl}`).subscribe(
      response => {
        console.log('parallel processing initiate')
      },
      error => {
        console.log('error during parallel processing: ', error)
      },
      () => {
        console.log('parallel processing finished')
      } 
    );
  }
}
