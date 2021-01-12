import { BACKEND_URL } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZipTestService {

  private serviceUrl = `${BACKEND_URL}/teste-zip`;

  constructor(private http: HttpClient) { }

  public downloadZipTest(){
    return this.http.get(`${this.serviceUrl}/download`, {
      responseType: 'arraybuffer'
    });
  }
}
