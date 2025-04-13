import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BACKEND_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketParallelProcessingTestService {

  private serviceUrl = `${BACKEND_URL}/web_socket_parallel_test`;

  constructor(private http: HttpClient) { }

  beginProcessing(){
    this.http.get(`${this.serviceUrl}`).subscribe(
      response => {
        console.log('websocket parallel processing initiate')
      },
      error => {
        console.log('websocket error during parallel processing: ', error)
      },
      () => {
        console.log('websocket parallel processing finished')
      } 
    );
  }
}
